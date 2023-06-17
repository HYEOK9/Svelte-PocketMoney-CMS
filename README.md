# 캐시닥 용돈퀴즈 CMS

### [용돈퀴즈 CMS](https://cms-pocket-money-quiz.vercel.app)

<br/>

### [Histoire(storybook)](https://main.d1b5y897ri7b9s.amplifyapp.com/)

<br/>

### [Swagger](http://cashdoc-quiz-api-test.ap-northeast-2.elasticbeanstalk.com/api#/)

<br/>

<br/>

- svelte
- smui
- pnpm

<br/>

## histoire (storybook)

```bash
$ pnpm storybook
```

## development

개발 기기의 dns 에 local.cms-moneyquiz.cashdoc.io를 추가한다.

```bash
# posix
$ sudo vi /etc/hosts
# windows (관리자 권한)
$ code C:\Windows\System32\drivers\etc\hosts

# 아래 라인을 추가
127.0.0.1 local.cms-moneyquiz.cashdoc.io
```

이후 아래의 명령어로 개발 서버 http://local.cms-moneyquiz.cashdoc.io 를 실행시킨다.

```bash
# npm, yarn is not allowed
pnpm i

# posix
sudo pnpm dev
# windows (관리자 권한)
pnpm dev
```

  <br/>

## Building

```bash
pnpm build
```
