<script lang="ts">
  import { onDestroy } from "svelte";
  // smui
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  // store
  import {
    createQuizState,
    resetCreateQuizState,
  } from "$lib/store/createQuizState";
  // component
  import { componentMap } from "./QuizCreateMap.svelte";
  import ArrowDown from "$lib/components/UI/icon/ArrowDown.svelte";
  import ArrowRight from "$lib/components/UI/icon/ArrowRight.svelte";
  import Button from "$lib/components/UI/Button.svelte";

  onDestroy(() => resetCreateQuizState());

  const onCancel = () => window.history.back();

  const onSave = () => {
    // TODO : Post
    console.log($createQuizState);
  };

  let openState = new Array(componentMap.length).fill(true);
</script>

<div class="container">
  <Accordion multiple>
    {#each componentMap as { title, component }, i}
      <Panel bind:open={openState[i]}>
        <Header>
          {#if !openState[i]}
            <ArrowRight width="16px" height="16px" strokeWidth="3" />
          {:else}
            <ArrowDown width="16px" height="16px" strokeWidth="3" />
          {/if}
          &nbsp;
          <span>{title}</span>
        </Header>

        <Content>
          <svelte:component this={component} />
        </Content>
      </Panel>
    {/each}
  </Accordion>

  <div class="button-area">
    <Button
      text="취소"
      onClick={onCancel}
      --color="var(--color-light-40)"
      --background-color="white"
      style="padding:10px 50px;font-size:1.1rem;border:1px solid var(--color-line-400);margin-right:10px;"
    />
    <Button
      text="저장"
      onClick={onSave}
      --color="white"
      --background-color="var(--color-blue)"
      style="padding:10px 50px;font-size:1.1rem;border:1px solid var(--color-line-400);margin-left:10px;"
    />
  </div>
</div>

<style lang="scss">
  .button-area {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 20px 0;
  }
  *:global(.container .smui-accordion__panel) {
    margin-top: 0;
    border: none;
  }
  *:global(.container .smui-accordion__header__title) {
    display: flex;
    align-items: center;
    background-color: #fafafa;
    font-size: 0.9125rem;
  }
  *:global(.container .smui-accordion__panel:first-child) {
    border-top: 1px solid var(--color-line-400);
  }
  *:global(.container .smui-accordion__panel .smui-accordion__header__title) {
    border-bottom: 1px solid var(--color-line-400);
  }
  *:global(.container .smui-accordion__panel--open .smui-paper__content) {
    border-bottom: 1px solid var(--color-line-400);
  }
</style>
