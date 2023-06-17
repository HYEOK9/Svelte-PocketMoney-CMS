<script lang="ts">
  import type { IMenu } from "$lib/types/layout";

  export let curMenu: undefined | Partial<IMenu> = undefined;
  export let path = "";
  export let title = "";
  export let description = "";
</script>

<div class="container">
  <span class="navigation">
    {path || `${curMenu?.title} > ${curMenu?.subMenus?.[0].title}`}
  </span>

  <h1 class="title">{title || curMenu?.subMenus?.[0].title}</h1>

  <span class="description"
    >{description || curMenu?.subMenus?.[0].description}</span
  >
</div>

<style lang="scss">
  .container {
    height: fit-content;
    padding-bottom: 20px;
    margin-bottom: 25px;
    border-bottom: 1px solid var(--color-line-500);
    white-space: nowrap;
  }
  .navigation {
    font-size: 0.7rem;
    display: inline-block;
    border-radius: 6px;
    padding: 7px 0px;
    color: var(--color-black-600);
  }
  .title {
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 9px;
  }
  .description {
    text-transform: capitalize;
    font-size: 0.8125rem;
    padding-left: 3px;
    color: rgb(107, 106, 106);
  }
</style>
