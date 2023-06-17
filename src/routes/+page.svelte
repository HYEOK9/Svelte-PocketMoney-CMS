<script lang="ts">
  import Card from "$lib/components/UI/Card.svelte";
</script>

<div>
  <Card bgColor="rgb(255, 221, 65)">
    <div slot="card">
      <span style="font-size:30px;">🐱</span>
      <br /> <br />
      <span style="font-weight:600;font-size:20px;color:var(--color-dark-35);"
        >💵캐시닥 용돈퀴즈 CMS💵</span
      >
      <br />
      <br />
      <ul>
        <li>
          ✅
          <a
            href="https://github.com/AlmSmartDoctor/MoneyQuiz-CMS"
            style="color:#0000ff;"
            rel="noreferrer"
            target="_blank"
          >
            github
          </a>
        </li>
      </ul>
    </div>
  </Card>

  <Card bgColor="var(--color-dark-35)">
    <div slot="card" style="color:white;">
      <span style="font-size:30px;">🤫</span>
      <br />
      <br />
      <ul>
        <li>
          <a
            href="https://learn.svelte.dev/tutorial/welcome-to-svelte"
            style="text-decoration:underline;"
            rel="noreferrer"
            target="_blank"
          >
            svelte
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://sveltematerialui.com/"
            style="text-decoration:underline;"
            rel="noreferrer"
            target="_blank"
          >
            svelte-mui
          </a>
        </li>
        <br />

        <li>pnpm</li>
      </ul>
    </div>
  </Card>
</div>
