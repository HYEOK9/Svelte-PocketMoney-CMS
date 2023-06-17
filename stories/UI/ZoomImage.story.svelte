<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import ZoomImage from "$lib/components/UI/ZoomImage.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <ZoomImage
      width={300}
      src="https://kit.svelte.dev/_app/immutable/assets/svelte-kit-machine.3af040cb.png"
      alt="storybook"
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
