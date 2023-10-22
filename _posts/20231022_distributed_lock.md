---
layout: post
title:  "분산락의 의미와 DJango에서 분산락을 직접 사용해 보자"
date:   2023-10-23 00:16:00
series: "백엔드 이론"
summary: "다중 프로세스에서 특정 데이터를 제어하기 위해 사용되는 기술인 분산락 (Distributed)에 대해서 알아보고 DJango에서 어떻게 사용하는 지 알아보자."
tags: ["backend", "django", "redis", "database", "thread"]
image: ""
---

> **선수 지식**
> [필수] 운영체제에 대한 기초 지식 (특히 멀티쓰레드 관련)
> [필수] Redis나 Memcached같은 캐싱 시스템에 대한 기초 지식.
> [선택] DJango 기본 지식
> [선택] NodeJS 사용 경험

<br >
<br >

# 분산락(Distributed Lock) 이란

## Lock과 Mutex
운영체제, 혹은 컴퓨터공학을 공부해 봤다면 ```lock``` 또는 ```mutex```라는 단어를 한번 쯤 들어봤을 것이다. 멀티쓰레드상에서 공유된 데이터를 접근할 때, 공유 대상의 데이터를 제어할 때 사용되는 도구들로 백엔드 뿐만 아니라 여러 분야에서 개발을 하는데에 있어서 굉장히 중요하게 다루는 요소들이다.

## 예를 들어
좀 억지스러운 예시이지만, 온라인으로 모금을 한다고 가정했을 때, 모금 결제를 한 다음 그 결제한 금액을 메모리에 추가함으로써 총 모금 금액을 계산하는 로직이 있다고 하자.

현재 모금 금액이 5000원일 때, 두 클라이언트가 각각 500원, 1000원으로 동시에 모금을 시도했고 동시에 결제가 끝난 상태다. 그렇게 되면 두 클라이언트는 동시에 모금 금액 메모리에 접근을 하게 되고 각각 5000원에 500과 1000을 더한다. 미세한 차이로 두번째 클라이언트 _(1000원을 후원한 클라이언트)_ 가 금액을 업데이트 했다고 하면, 업데이트 후의 모금액은 500과 1000을 더한 6500원이 아닌 1000원을 더한 6000원이 된다. 

왜냐하면 두번째 클라이언트는 첫번째 클라이언트의 모금액이 업데이트 하기 전에 메모리를 참조해서 5000원에 1000원을 더한 다음 모금액 메모리에 6000원이라는 데이터를 업데이트 했기 때문이다. 이러한 동시성 처리를 제대로 하지 못했기 때문에 실모금액은 6500원이지만, 메모리에 올라와 있는 모금액은 6000원으로 표시가 되고, 이는 금전적 문제로 번지게 되어 서비스 운영에 있어 상당한 차질을 겪게 된다.

하지만 ```mutex``` 를 이용해서 오직 하나의 클라이언트만 모금 메모리에 접근하게 제어한다면 어떻게 될까? 아무리 동시에 접근을 시도했다 하더라도 한명의 클라이언트가 메모리에 진입하는 순간 ```mutex``` 를 이용해 메모리 접근에 ```lock``` 을 걸어 접근을 못하게 하기 때문에 두번 째 클라이언트는 첫번째 클라이언트가 일이 다 끝날 때 까지 메모리에 접근할 수 없다. 결국, 두번 째 클라이언트는 모금액이 5500원이 된 상태에서 1000원을 더하게 되므로, 메모리 상의 모금액은 6500원으로 정상적으로 계산이 된다.

> 물론 이건 어디까지나 ```mutex``` 에 대해서 좀 억지스런 예시를 둔 거고, 실무에서는 메모리가 아니라 당연히 데이터베이스에 모금액을 계산하게 되는데, 어차피 데이터베이스에 데이터를 업데이트 ```update``` 하기 전에 알아서 ```lock```을 걸어버리므로 ```mutex```가 따로 필요없다. 이런 RDB가 가지고 있는 기능을 **트랜잭션 격리 수준** 이라고 하는데 자세한 내용은 구글링을 해보자. 해당 내용은 난이도가 있는 내용이고 필자는 아직 트랜잭션 격리 수준을 블로그에 정리할 정도로 능력이나 경력이 되는 개발자가 아니기 때문에 세월이 좀 지나야 해당 내용을 포스팅할 것 같다.

## 하지만 Mutex 가지고는 한계가 있다.
요즘 웹서버들은 하나의 서버 프로세스 가지고 운영되지 않는다. 성능을 높이기 위해 여러개, 심지어 사양이 넉넉하면 몇백개의 프로세스를 이용해서 운영을 하고, 여러 프로세스를 만드는 기능을 각 백엔드 프레임워크 또는 서버마다 지원을 한다.

그러나 ```mutex```는 어디까지나 Thread 단위에서만 효과를 발휘할 뿐, 프로세스 단위에서는 효력이 없다. 왜냐하면 프로세스 안의 공유 메모리를 다른 프로세스가 접근을 할 수 없기 때문이다. 즉, 멀티프로세스 단위에서는 ```mutex``` 가 무용지물이다. 그렇다고 해서 아예 방법이 없는 것은 아니다. 파일 기반의 ```pipe``` 통신도 있고 ```shared memory``` 라는 것을 이용할 수 있지만. ```pipe``` 는 파일 기반 통신이라 무수히 많은 클라이언트가 자주 접근하는 서버에서 사용하면 성능이 무지막지하게 떨어질 거고, ```shared memory``` 는 OS접근과 연관이 있기 때문에 사용하기 민감한 기능이다.

그러면 도대체 프로세스 단위의 동시성 처리를 어떻게 하라는 거냐? 그래서 나온게 **분산락** ```Distributed Lock``` 이다.

## 분산락 (Distributed Lock)
멀티 프로세스 단위에서 데이터에 대한 동시성을 제어할 때 사용된다. 분산락을 사용하는 경우는 여러가지가 있지만, 필자의 경우 중복 데이터 생성이나, 한번만 수행할 작업을 중복으로 발생할 경우를 방지하기 위해 사용하고 있다. 

대부분 분산락을 구현할 때, Redis를 사용하는 경우가 대부분인데 그 이유는 Redis는 클라이언트로부터 요청받은 작업을 수행할 때, 싱글쓰레드 체제로 작업을 하기 때문이다. 즉, 아무리 동시에 요청이 들어왔어도 작업을 하는 쓰레드는 오직 하나이기 때문에 결국 순차적으로 작업을 하게 된다.
이러한 Redis의 특성을 이용해 분산락을 직접 구현해서 동시성에 대한 대응을 할 수 있다.

실제로 Redis 공식 사이트에서는 [```SETNX```을 이용한 분산락 알고리즘을 공유하고 있다.](https://redis.io/commands/setnx/#Design%20pattern:%20Locking%20with%20SETNX)_(현재 ```SETNX```는 Deprecated 상태이며 ```SET```명령어에서 ```nx=True``` 옵션을 추가해서 사용해야 한다.)_ 필자도 실무에서 FCM알림서버를 개발했을 때, 중복발송을 방지하기 위해 이 알고리즘을 참고해서 분산락을 직접 개발했다. 하지만 분산락 자체를 개발하는 것은 난이도가 꽤 있는 작업이기 때문에 외부 라이브러리를 사용하는 것도 고려해야 한다.



다행히 DJango에서는 DJango외부 라이브러리인 ```django-redis``` 에서 분산락을 지원하기 때문에 따로 구현할 필요 없이 바로 사용할 수 있다. 그렇다면, 설치부터 어떻게 사용해야 하는지 알아보자.

# DJango에서 분산락을 사용해 보기

> 우선 DJango 앱을 만들기 전에 Redis 서버를 켜야 한다. Redis 서버를 키는 방법을 알고 있다고 생각하고 생략한다.
> 필자의 경우 Docker에 Redis를 띄우고 포트를 6379로 설정했다.

## DJango Setting
1. 패키지 설치
```bash
$ pip install redis django django_redis
```

2. DJango 프로젝트 생성후 프로젝트 디렉토리로 이동
```bash
$ django-admin startproject project
$ cd project
```

3. 분산락이 적용될 API를 구현하기 위해 app을 생성
```bash
$ python manage.py startapp example
```

4. 여기까지 진행했으면 아래오 같은 디렉토리 구조가 될 것이다.

![](/images/posts/distributed_lock/directory_structure.png)

## API 구현
* 간단한 구현을 한다.
* GET Method로 잡고 hello world를 출력하는 API를 작성한다.
* 파라미터로 들어가는 ```uid``` 는 나중에 동시성 테스트 할 때, 작업이 순차적으로 진행되는지 확인하기 위해 사용되는 고유 아이디이다.

```python
# example/views.py
from django.http import HttpResponse

def hello_world(request, uid):
    print(f"{uid} IN")
    ans = 1
    for i in range(1, 50):
        ans *= 1
    print(f"{uid} OUT")
    return HttpResponse("Hello World!")
```

```python
# example/urls.py

from django.urls import path

from . import views

urlpatterns = [
    path("hello-world/<int:uid>", views.hello_world, name="hello world")
]
```

```python
# project/urls.py

from django.urls import path

from . import views

urlpatterns = [
    path("hello-world", views.hello_world, name="hello world")
]
```

```python
# project/settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'example',
]
```

* 위와 같이 코드를 작성한 다음 웹브라우저로 ```localhost:8000/hello-world/1``` 에 접근해서 ```Hello World!``` 라는 문구가 보이면 API 구현이 완료된 것이다.


## Redis 연동

* ```settings.py``` 에 Redis 관련 내용을 추가한다.

```python
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
    }
}
```

* 위의 내용을 추가하면 ```django.core.cache.cache``` 모듈을 이용해 Redis와 연결을 할 수 있다. 그러나 이 core모듈은 어디까지나 ```GET``` 이나 ```SET``` 에 대한 기본적인 캐싱 명령어만 지원할 뿐, 추가적인 옵션을 사용할 수 없을 뿐더라 분산락을 사용할 수 없다. 즉, 아까 설치한 ```django_redis``` 가 DJango Application에 적용되지 않은 것이다. 확장 기능을 사용할 수 있게 ```settings.py```의 ```CACHE```의 ```BACKEND```를  ```django_redis```로 변경하자

```python
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
```


* View에 Cache 관련 코드를 작성해서 정상적으로 Redis와 연결되는지 확인한다.
```python
# example/views.py
from django.http import HttpResponse
from django.core.cache import cache

def hello_world(request, uid):
    cache.set("test", uid)
    print(cache.get("test"))
    return HttpResponse("Hello World!")
```

* 서버를 실행하고 ```GET localhost:8000/example/1```로 요청했을 때 터미널에서 ```1```이 출력된다면 정상적으로 연동이 된것이다.
```shell
1
[22/Oct/2023 16:05:50] "GET /hello-world/1 HTTP/1.1" 200 12
```

## 분산락 적용
* ```django_redis``` 에서 제공하는 분산락 기본 사용법은 상당히 쉽다 딱 1줄만 작성하면 된다.
```python
with cache.lock("this-is-the-lock"):
    # write your code
```

분산락 함수인 ```cache.lock()``` 의 파라미터로 키값이 들어가는데, 이 키값과 동일한 분산락 범위 내(```with```문으로 감싼 로직)의 모든 로직들은 무슨일이 있어도 **둘 이상이 동시에 들어갈 수가 없다.**

```view.py```를 아래와 같이 수정한다.

```python
from django.http import HttpResponse
from django.core.cache import cache

def hello_world(request, uid):
    with cache.lock("this-is-the-lock"):
        print(f"{uid} IN")
        ans = 1
        for i in range(1, 50):
            ans *= 1
        print(f"{uid} OUT")
```

이렇게 해서 ```with```문 안에 있는 ```for```문은 무슨일이 있어도 둘 이상이 동시에 들어갈 수 없는 원자성 코드가 되었다.

# 동시성 처리가 제대로 되어있는지 확인하기

## 테스트 코드 작성

구현했다고 다가 아니다. ```django_redis```에서 지원하는 분산락 모듈이 실제로 동시성 접근에 대해 대응이 가능한지 테스트를 해 봐야 한다. 하나의 API에 동시에 접근을 할 때, 동시성 처리가 필요한 로직에 클라이언트의 요청이 순차적으로 들어가는지 확인을 해 봐야 한다.

이러한 성능테스트 툴로 ```Apache Benchmark``` (AB) 가 있으나. 아직 내가 해당 툴을 사용해 본 적이 없기 때문에, 성능 테스트 툴 대신 간단하게 NodeJS로 스크립트를 짜려고 한다. NodeJS의 서버 요청 모듈인 ```axios```가 제공하는 서버 요청 함수들은 비동기 함수들이므로 0.001초 ~ 0.01초 간격으로 여러건의 API요청을 함으로써 동시성 테스트를 해 볼 수 있다. ```Apache Benchmark``` 는 차후에 직접 경험해 보고 포스팅을 따로 할 예정이다. 아래는 내가 작성한 동시성 테스트 코드다.

```javascript
const { default: axios } = require("axios");

const todayStr = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
}

const reserveRental = async (uid) => axios.post(
    `http://localhost:8000/hello-world/${uid}`
    ).then((res) => "success").catch(() => "failed");

const reqTest = async (i, func) => {
    const today = todayStr();
    console.log(`CASE: ${i} IN [${today}]`);
    const res = await func(i)
    console.log(res)
    console.log(`CASE: ${i} OUT`);
}

Promise.all(Array.from({length: 3}, (_, i) => reqTest(i, reserveRental))).then(() => {});
```

```/hello-word/0```, ```/hello-world/1```, ```/hello-world/2```를 거의 동시에 서버로 요청을 해서 분산락이 적용된 구간에 오직 하나의 클라이언트가 들어오고 나가는지 테스트를 한다. 이 세가지 url 요청을 각각 0번, 1번 2번이라고 가정한다.

## 결과 (분산락을 사용하지 않는 경우)

```python
# exmaple/views.py

def hello_world(request, uid):
    print(f"{uid} IN")
    ans = 1
    for i in range(1, 50):
        ans *= 1
    print(f"{uid} OUT")
```

```shell
0 IN
0 OUT
1 IN
2 IN
1 OUT
2 OUT
```

0번 요청이 먼저 진입을 한 다음 1번이 들어오기 전에 나갔다. 여기까지는 문제가 없다. 그런데 1번이 들어왔는데, 1번이 나가기도 전에 2번이 들어왔다. ```IN``` 과 ```OUT``` 사이의 로직은 반드시 하나의 요청만 들어갔다 나올 수 있는데 1번과 2번이 하나의 로직에 같이 들어간 것이다. 이렇게 되면 로직 안의 메모리를 두개 이상의 클라이언트가 동시에 참조하는 일이 발생하므로 동시성 처리가 제대로 되지 않은 것이다.


## 결과 (분산락을 사용한 경우)

```python
def hello_world(request, uid):
    with cache.lock("this-is-the-lock"):
        print(f"{uid} IN")
        ans = 1
        for i in range(1, 50):
            ans *= 1
        print(f"{uid} OUT")
    return HttpResponse("Hello World!")
```

```shell
1 IN
1 OUT
0 IN
0 OUT
2 IN
2 OUT
```

1번이 먼저 로직 안에 들어갔다 나왔다. 그다음 0번이 들어갔다 나오고 2번이 들어갔다 나왔다. 하나의 로직에 하나의 요청만 들어갔다 나갔기 때문에 동시성 처리가 제대로 되었다.


# 끝

대학교 전공시간에 배우는 멀티쓰레드와 ```mutex``` 는 동시성 접근에 대한 제어에 있어 상당히 휼륭한 도구다. 그러나 프로세스 단위에 대한 동시성 접근은 ```mutex``` 가지고는 한계가 있기 때문에 사용하기에는 무리가 있고, 그 대신 분산락을 이용해서 동시성에 대한 처리를 할 수 있었다. 직접 구현을 해도 좋지만, ```django_rest``` 같은 분산락에 대한 외부 라이브러리를 제공해 주는 경우가 많기 때문에, 외부 라이브러리를 이용해서 동시성 제어를 하는 방법도 좋은 방법이다.