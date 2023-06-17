<script lang="ts">
  import { fly } from "svelte/transition";
  import { convertToPx } from "$lib/util/common";
  import { zIndex } from "../../../style/zIndex";
  // props
  export let src: string;
  export let alt: undefined | string = src;
  export let top: string | number = "auto";
  export let bottom: string | number = "auto";
  export let left: string | number = "auto";
  export let right: string | number = "auto";
  export let width: string | number = "100%";
  export let popupWidth: string | number = 300;
  export let style = "";

  let show = false;
  const toggle = () => (show = !show);
</script>

<div class="img-wrapper" on:mouseenter={toggle} on:mouseleave={toggle}>
  <img
    class="default-image"
    {src}
    {alt}
    style="max-width:{convertToPx(width)};"
  />
  {#if show}
    <div
      class="popover-image-wrapper"
      style="inset:{top} {right} {bottom} {left};z-index:{zIndex.hoverImage};{style}"
      transition:fly={{ y: 10, duration: 200 }}
    >
      <img
        class="popover-image"
        style="width:{convertToPx(popupWidth)};height:auto;};"
        {src}
        {alt}
      />
    </div>
  {/if}
</div>

<style lang="scss">
  .img-wrapper {
    position: relative;
  }
  .default-image {
    object-fit: contain;
  }
  .popover-image-wrapper {
    position: absolute;
    padding: 10px;
    border: 1px solid var(--color-border-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  .popover-image-wrapper::after {
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    bottom: -7px;
    left: 50%;
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transform: rotate(45deg);
  }
  .popover-image {
    object-fit: contain;
  }
</style>
