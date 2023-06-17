<script lang="ts">
  import { goto } from "$app/navigation";
  // smui
  import Textfield from "@smui/textfield";
  // components
  import LogoIcon from "$lib/imgs/logo/ic-logo-color-en@2x.png";
  import Button from "$lib/components/UI/Button.svelte";

  let id = "";
  let password = "";

  const login = () => {
    // TODO : auth
    goto("/");
  };

  const handleKeydown = (event: KeyboardEvent | CustomEvent<any>) => {
    const e = event as KeyboardEvent;
    if (e.key === "Enter") login();
  };
</script>

<div class="login-box">
  <img class="logo" src={LogoIcon} alt="cashdoc-logo" />

  <Textfield bind:value={id} label="아이디" on:keydown={handleKeydown} />

  <Textfield
    bind:value={password}
    label="비밀번호"
    type="password"
    on:keydown={handleKeydown}
  />

  <Button
    text="LOGIN"
    --color="white"
    --background-color="var(--color-primary)"
    style="width:80%;margin:30px 0;padding:15px;cursor:pointer;font-size:1.125rem;font-weight:700;"
    onClick={login}
  />

  <span class="description">
    Chrome 브라우저에 최적화 되어있습니다.
    <br />
    Copyright © 2023 by CashDoc, Inc. All rights reserved.
  </span>
</div>

<style lang="scss">
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 70px 50px;
    background-color: #fff;
    border: 1px solid var(--color-line-400);
    box-shadow: var(--color-blue-light) 0px 8px 24px;
  }
  .logo {
    width: 50%;
    padding-bottom: 20px;
  }
  *:global(.login-box .mdc-text-field) {
    width: 80%;
    margin-top: 20px;
  }
  *:global(.login-box .mdc-text-field--focused *) {
    color: black !important;
    caret-color: black;
  }
  *:global(.login-box .mdc-text-field .mdc-floating-label) {
    color: var(--color-light-60);
    font-size: 1rem;
  }
  *:global(.login-box .mdc-text-field .mdc-floating-label--float-above) {
    transform: translateY(-126%) scale(0.75);
  }
  *:global(.login-box .mdc-line-ripple::after) {
    border-color: black;
    border-width: 1px;
  }
  *:global(
      .login-box .smui-text-field--standard:hover .mdc-line-ripple::before
    ) {
    border-color: rgba(0, 0, 0, 0.42);
  }
  .description {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 200;
    color: var(--color-light-50);
    padding-top: 20px;
  }
</style>
