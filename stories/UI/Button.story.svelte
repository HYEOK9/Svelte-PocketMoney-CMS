<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import Button from "$lib/components/UI/Button.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <Button
      text="확인"
      style="color:white;background-color:var(--color-blue);"
    />
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
