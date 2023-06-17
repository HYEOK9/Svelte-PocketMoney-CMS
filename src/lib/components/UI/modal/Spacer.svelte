<script lang="ts">
  import type { ComponentType, SvelteComponentTyped } from "svelte";

  export let x = "";
  export let y = "";
  export let components: ComponentType<SvelteComponentTyped<any>>[] = [];
</script>

{#if components.length > 0}
  {#each components as component}
    <div style:margin-right={x} style:margin-bottom={y}>
      <svelte:component this={component} />
    </div>
  {/each}
{:else}
  <div style:margin-right={x} style:margin-bottom={y} />
{/if}
