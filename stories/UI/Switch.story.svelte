<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import Switch from "$lib/components/UI/Switch.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <Switch label="진행중" checked />
  </div>
</Hst.Story>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
</style>
