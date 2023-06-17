<script lang="ts">
  import { page, navigating } from "$app/stores";
  import nProgress from "nprogress";
  // style
  import "../style/global.scss";
  // constant
  import { MENUS } from "$lib/constants/menus";
  // components
  import SideBar from "$lib/components/layout/SideBar.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import NotFound from "$lib/components/layout/NotFound.svelte";
  import PreventRightClick from "$lib/components/layout/PreventRightClick.svelte";

  $: $navigating ? nProgress.start() : nProgress.done();

  $: curMenu = MENUS.reduce((acc, { title, subMenus }) => {
    const curSubMenu = subMenus.filter(
      ({ link }) => link === $page.url.pathname
    );
    if (curSubMenu.length) return { title, subMenus: curSubMenu };
    return acc;
  }, {});

  $: showHeader = MENUS.some(({ subMenus }) =>
    subMenus.some(({ link }) => link === $page.url.pathname)
  );

  $: skipLayout = $page.url.pathname === "/login";

  let open = !skipLayout;
</script>

{#if !skipLayout}
  <div id="container" data-open={open}>
    <SideBar menus={MENUS} bind:open />
    <div class="contents">
      <div class="main">
        {#if showHeader}
          <Header {curMenu} />
        {/if}

        {#if $page.error?.message === "Not Found"}
          <NotFound />
        {:else}
          <slot />
        {/if}
      </div>

      <Footer />
    </div>
  </div>
{:else}
  <slot />
{/if}

<PreventRightClick />

<style lang="scss">
  #container {
    display: flex;
    flex-direction: column;
    &[data-open="true"] {
      padding-left: 250px;
    }
    transition: all 0.2s ease;
  }
  .contents {
    padding: 30px 50px 50px 50px;
    flex: 1;
  }
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 140px);
  }
</style>
