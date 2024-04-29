# 캐시닥 용돈퀴즈 CMS
![image](https://github.com/HYEOK9/Svelte-study/assets/87190744/02596fac-f217-493f-aacf-ba801571a66b)

- svelte
- smui
- pnpm


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
