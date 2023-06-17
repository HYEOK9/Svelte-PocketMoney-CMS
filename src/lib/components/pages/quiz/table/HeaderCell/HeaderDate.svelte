<script lang="ts">
  // types
  import type { TSort } from "$lib/types/quiz";
  // components
  import ArrowUp from "$lib/components/UI/icon/ArrowUp.svelte";
  import ArrowDown from "$lib/components/UI/icon/ArrowDown.svelte";

  // props
  export let sortValue: TSort = "none";
  export let title: string;
  export let onClick: undefined | (() => void) = undefined;

  const toggleSort = () => {
    switch (sortValue) {
      case "asc":
        sortValue = "none";
        break;
      case "dsc":
        sortValue = "asc";
        break;
      default:
        sortValue = "dsc";
        break;
    }
  };
</script>

<button
  class="sort-button-wrapper"
  on:click={() => {
    toggleSort();
    onClick?.();
  }}
>
  <span>{title}</span>
  <div class="sort-icon">
    <ArrowUp
      color={sortValue === "asc" && "var(--color-blue)"}
      width="12px"
      height="12px"
    />
    <ArrowDown
      color={sortValue === "dsc" && "var(--color-blue)"}
      width="12px"
      height="12px"
    />
  </div>
</button>

<style lang="scss">
  .sort-button-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .sort-icon {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
</style>
