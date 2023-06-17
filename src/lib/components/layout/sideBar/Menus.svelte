<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  // smui
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import IconButton, { Icon } from "@smui/icon-button";
  //types
  import type { IMenus } from "$lib/types/layout";
  // props
  export let menus: IMenus;

  let openState = [false, false];

  const clickMenu = (e: MouseEvent, link: string) => {
    e.stopPropagation();
    goto(link);
  };

  $: menus.forEach(({ subMenus }, i) => {
    if (subMenus.some(({ link }) => $page.url.pathname.includes(link))) {
      openState[i] = true;
    } else openState[i] = false;
  });
</script>

<span class="menu-title"> MENU </span>

<Accordion multiple class="menu-wrapper">
  {#each menus as { title, subMenus }, i}
    <Panel open={openState[i]} on:click={() => (openState[i] = !openState[i])}>
      <Header>
        {title}
        <IconButton slot="icon">
          <Icon class="material-icons" on={openState[i]}>expand_more</Icon>
          <Icon class="material-icons" on={!openState[i]}>expand_less</Icon>
        </IconButton>
      </Header>

      {#each subMenus as subMenus}
        <Content
          on:click={(e) => clickMenu(e, subMenus.link)}
          class="menu-item"
        >
          <span
            class="subtitle"
            data-active={$page.url.pathname.includes(subMenus.link)}
          >
            {subMenus.title}
          </span>
        </Content>
      {/each}
    </Panel>
  {/each}
</Accordion>

<style lang="scss">
  .menu-title {
    font-size: 0.7125rem;
    color: var(--color-text-secondary);
    margin: 0 0 10px 24px;
  }
  .subtitle {
    font-size: 0.875em;
    margin-left: 10px;
    &[data-active="true"] {
      color: var(--color-primary-hover);
      font-weight: 700;
    }
  }
  *:global(.menu-title + .smui-accordion .smui-accordion__header__icon) {
    margin-right: 5px;
  }
</style>
