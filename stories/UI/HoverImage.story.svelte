<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import HoverImage from "$lib/components/UI/HoverImage.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <div style="border:1px solid var(--color-border-color)">
      <HoverImage
        width="100px"
        popupWidth="250px"
        src="https://kit.svelte.dev/_app/immutable/assets/svelte-kit-machine.3af040cb.png"
        top="-260px"
        left="-92px"
      />
    </div>
  </div>
</Hst.Story>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>
