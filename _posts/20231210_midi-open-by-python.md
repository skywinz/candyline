---
layout: post
title:  "Python Midi 모듈 Mido 사용 튜토리얼"
date:   2023-12-10 13:00:00
series: "미디 데이터 분석"
summary: "Python의 Mido라는 라이브러리로 미디파일을 직접 열어봅니다."
tags: ["python", "midi", "music", "mido"]
image: ""
---

# 개요

이 블로그를 포스팅 하기 전인 며칠 전에 나는 [PCFL이라는 라이브러리를 공개 배포한 적이 있다.](https://github.com/skywinz/pcfl)
PCFL은 FLStudio에서 피아노 페달이 포함된 미디파일을 임포트 하기 전에, FL Studio에서 정상적으로 임포트 할 수 있도록
전처리를 해주는 라이브러리 내지 프로그램이다. (CLI로 실행할 수 있기 때문이다).
전처리 프로세스를 구현하기 위해 당연히 미디파일을 직접 열어 조작하는 코드를 작성을 해야 했는데.
이때 내가 미디파일을 열고 어떻게 수정할 수 있었는지에 대해 과정을 적어보려고 한다.

# 피이썬의 미디 라이브러리들

내가 사용하고 있는 파이썬 미디 라이브러리로 크게 두 가지가 있는데 하나는 [music21](https://web.mit.edu/music21/)이고 다른 하나는 [mido](https://mido.readthedocs.io/en/stable/)이다.

### Mido

미디파일을 읽고 쓰는 정도의 핵심 기능만 제공하는 라이브러리로 꽤나 가벼운 편이다.
현재 구현된 PCFL에 해당 라이브러리를 사용하고 있으며, 이 라이브러리로 설명을 할 예정이다.


### Music21

단순히 미디파일을 읽고 쓰는 정도의 수준을 넘어 미디 데이터 분석 툴 까지 제공하는 라이브러리다.
그렇기 때문에 라이브러리 무게는 매우 무겁다.
이전 버전의 PCFL에서는 해당 라이브러리가 사용되었다.


# 튜토리얼

## 개발 세팅

> 파이썬 세팅의 경우 필자가 자주 사용하는 방식으로 설명하고 있으며 굳이 이 방법이 아니어도 원하는 방식으로 세팅해도 문제가 없습니다.

### mido 설치하기

* mido 라이브러리를 설치한다. 필요하면 가상머신을 먼저 설치한 다음 해당 라이브러리를 설치해도 된다.

```bash
$ pip install mido
```

### [권장] 주피터 노트북 설치

* ```mido```가 어떻게 미디파일을 긁어오는지 반복 절차 없이 확인하기 위해 사용하는 라이브러리로 굳이 설치하고 싶지 않다면 안해도 된다.

#### 설치

```bash
$ pip install jupyter
```

#### 실행

```bash
$ jupyter notebook
```

* 여기서 ```copy and paste one of these URLs``` 밑에 있는 URL중 하나를 선택해서 들어간다.

```bash
    ... 생략
    
    To access the server, open this file in a browser:
        file:///home/recoma/.local/share/jupyter/runtime/jpserver-17557-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/tree?token=66505d8dc96d98471a0ed1ab14164af2ed6d683298a173e3
        http://127.0.0.1:8888/tree?token=66505d8dc96d98471a0ed1ab14164af2ed6d683298a173e3
```


## 라이브러리 활용하기

### 미디 파일 열기

```python
import mido
fileroot = "example/mido-practice.mid"
f = mido.MidiFile(fileroot)
```

## 미디 파일 데이터 구경하기

악보별 각 악기의 악보가 있듯이, ```mido.MidiFile```에서는 ```tracks```가 있다.

```python
for track in tracks:
    print(type(track))
```

```python
<class 'mido.midifiles.tracks.MidiTrack'>
<class 'mido.midifiles.tracks.MidiTrack'>
```

각각 MidiTrack 안에는 미디 데이터가 들어있습니다.

```python
base_track = tracks[1]
for element in base_track:
    print(type(element), element)  # 요소 데이터 출력
```

```python
<class 'mido.midifiles.meta.MetaMessage'> MetaMessage('track_name', name='Piano', time=0)
<class 'mido.midifiles.meta.MetaMessage'> MetaMessage('key_signature', key='C', time=0)
<class 'mido.midifiles.meta.MetaMessage'> MetaMessage('midi_port', port=0, time=0)
<class 'mido.messages.messages.Message'> note_on channel=0 note=53 velocity=80 time=0
<class 'mido.messages.messages.Message'> control_change channel=0 control=64 value=127 time=2
<class 'mido.messages.messages.Message'> note_on channel=0 note=53 velocity=0 time=453
<class 'mido.messages.messages.Message'> note_on channel=0 note=50 velocity=80 time=25
<class 'mido.messages.messages.Message'> note_on channel=0 note=50 velocity=0 time=455
<class 'mido.messages.messages.Message'> note_on channel=0 note=53 velocity=80 time=25
<class 'mido.messages.messages.Message'> note_on channel=0 note=53 velocity=0 time=455
<class 'mido.messages.messages.Message'> note_on channel=0 note=48 velocity=80 time=25
<class 'mido.messages.messages.Message'> note_on channel=0 note=48 velocity=0 time=455
<class 'mido.messages.messages.Message'> note_on channel=0 note=55 velocity=80 time=25
```


# 다음으로

미디 파일에 대해 자세한 설명을 할 예정이다.
