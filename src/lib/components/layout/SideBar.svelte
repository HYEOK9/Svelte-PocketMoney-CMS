<script lang="ts">
  import Drawer from "@smui/drawer";
  // style
  import { zIndex } from "../../../style/zIndex";
  // types
  import type { IMenus } from "$lib/types/layout";
  // components
  import Logo from "./sideBar/Logo.svelte";
  import Profile from "./sideBar/Profile.svelte";
  import Menus from "./sideBar/Menus.svelte";
  import Setting from "./sideBar/Setting.svelte";
  import ArrowRight from "$lib/components/UI/icon/ArrowRightDouble.svelte";
  // props
  export let menus: IMenus;
  export let open: boolean;

  let showArrow = false;
  const toggle = () => (showArrow = !showArrow);
</script>

<div class="container" style="z-index:{zIndex.sideBar};">
  <Drawer variant="modal" bind:open>
    <div on:mouseenter={toggle} on:mouseleave={toggle}>
      <Logo bind:open {showArrow} />
      <Profile />
    </div>

    <Menus {menus} />
    <Setting />
  </Drawer>
</div>

<button class="open-button" on:click={() => (open = true)} data-show={open}>
  <ArrowRight />
</button>

<style lang="scss">
  *:global(.container .mdc-drawer--modal) {
    box-shadow: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  * :global(.smui-accordion__panel.smui-accordion__panel--open) {
    margin: 0;
  }
  *:global(.container .smui-accordion__header:hover i) {
    color: var(--color-primary-hover);
  }
  * :global(.smui-paper__content) {
    background-color: var(--color-dark-30);
    border-left: 5px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);
    cursor: pointer;
    &:hover {
      color: var(--color-primary-hover);
    }
  }
  *:global(.container .smui-accordion__panel--raised) {
    border: none;
  }
  *
    :global(
      .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z1::before
    ) {
    box-shadow: none;
  }
  .open-button {
    position: fixed;
    top: 50vh;
    left: 10px;
    cursor: pointer;
    &[data-show="true"] {
      display: none;
    }
  }
  *:global(.open-button:hover svg) {
    fill: var(--color-dark-35);
    transform: translateX(3px);
    transition: all 0.2s ease-out;
  }
  *:global(.open-button:not(:hover) svg) {
    transform: translateX(0);
    transition: all 0.2s ease-out;
  }
</style>
