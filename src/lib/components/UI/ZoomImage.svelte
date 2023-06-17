<script lang="ts">
  import { convertToPx } from "$lib/util/common";
  // components
  import ModalParent from "./modal/ModalParent.svelte";
  // props
  export let src: string;
  export let alt: string;
  export let width: string | number = "100%";
  export let modalWidth = "30vw";

  let open = false;
  let hover = false;
</script>

<button
  class="img-wrapper"
  on:click={() => (open = true)}
  on:mouseenter={() => (hover = true)}
  on:mouseleave={() => (hover = false)}
>
  <img {src} {alt} style="max-width:{convertToPx(width)};" />
  {#if hover} <span class="text">이미지 크게 보기</span> {/if}
</button>

<ModalParent bind:open width="fit-content">
  <button class="modal-container" on:click={() => (open = false)}>
    <img {src} {alt} class="modal-image" style="width:{modalWidth}" />
  </button>
</ModalParent>

<style lang="scss">
  .img-wrapper {
    position: relative;
    cursor: pointer;
  }
  .modal-container {
    display: flex;
    justify-content: center;
    height: fit-content;
    padding: 20px;
  }
  .modal-image {
    width: 80%;
    height: fit-content;
    object-fit: contain;
    cursor: pointer;
    @media (max-width: 720px) {
      min-width: 90vw;
    }
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 5px;
    left: 0;
    text-align: center;
    color: white;
    font-size: 0.85rem;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.15);
  }
  *:global(.container .mdc-dialog .mdc-dialog__surface > div) {
    height: auto !important;
  }
</style>
