# Angeline-Theme

NextJS Based Blog Platform

## Installation
```
$ npm i
$ npm run setup
$ npm run dev
```

## Usage

### 소셜 관련 정보 추가

```_socials.yml``` 에 아래와 같이 소셜 관련 정보들을 입력하면, 하단과 소개 페이지에 소셜 아이콘을 생성할 수 있습니다.

```yaml
socials:
  github: https://github.com/recoma96
  instagram: https://google.com
  facebook: https://google.com
  x: https://google.com
  linkedin: https://google.com
  youtube: https://google.com
  soundcloud: https://google.com
  velog: https://google.com
  tistory: https://google.com
  naverblog: https://google.com
  email: https://google.com
  site1: https://google.com
  site2: https://google.com
  site3: https://google.com
```

### 포스트 추가
1. ```_posts``` 디렉토리 안에 마크다운 파일을 작성합니다.
2. 이미지가 별도로 필요할 경우, ```public/images/posts``` 에 이미지를 추가합니다. 마크다운 파일에서는 URL을 ```/images/posts/...``` 로 연동합니다.

### 시리즈 추가 및 수정, 삭제

* ```_series.yml``` 파일에서 관리합니다.

```yaml
series:
  kramdownTest:
    name: kramdown-test
    summary: '마크다운 테스트를 하는 곳이에요'
  helloWorld:
    name: hello-world
    summary: '헬로 월드!'
```


## Markdown Format

```markdown
---
layout: post
title:  <제목>
date:   <날짜, YYYY-MM-DD HH:MM:SS>
series: <시리즈 이름>(_series.yaml에 포함되는 이름으로 작성해 주세요.)
summary: <포스트 요약>
tags: ["markdown", "test", "kramdown", "jekyll"]
image: ""
---
```
