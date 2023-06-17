<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<div class="container">
  <span class="menu-title">SETTING</span>

  <div class="button-wrapper">
    <button
      class="button"
      on:click={() => {
        // TODO: logout
        console.log("logout");
      }}>로그아웃</button
    >
    <button class="button" on:click={() => goto("/admins/mypage")}
      >정보수정</button
    >
  </div>
</div>

<style lang="scss">
  .container {
    padding: 24px;
  }
  .menu-title {
    font-size: 0.7125rem;
    color: var(--color-text-secondary);
  }
  .button-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 24px;
  }
  .button {
    border: 1px solid var(--color-border-color);
    height: 35px;
    font-size: 0.8125rem;
    width: 45%;
    cursor: pointer;
    font-weight: 500;
    &:hover {
      color: var(--color-secondary);
      background-color: var(--color-primary-bg);
    }
  }
</style>
