<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import ImageUpload from "$lib/components/UI/ImageUpload.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <ImageUpload />
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
