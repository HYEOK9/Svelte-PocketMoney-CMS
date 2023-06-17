<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import Badge from "$lib/components/UI/Badge.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <Badge text="개발3팀" bgColor="var(--color-primary)" padding="5px 10px" />
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
