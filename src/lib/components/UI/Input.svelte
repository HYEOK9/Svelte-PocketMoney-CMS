<script lang="ts">
  import Textfield from "@smui/textfield";
  import DeleteIcon from "./icon/DeleteIcon.svelte";

  export let variant: "outlined" | "standard" | "filled" = "outlined";
  export let type: undefined | string = undefined;
  export let placeHolder = "";
  export let value = "";
  export let onKeyDown:
    | undefined
    | ((e: KeyboardEvent | CustomEvent<any>) => void) = undefined;
  export let inputElement: undefined | Textfield = undefined;
  export let maxLength: undefined | number = undefined;
  export let style = "";
  export let prefix: undefined | string = undefined;
  export let unit: undefined | string = undefined;
  export let deleteIcon = false;
</script>

<div class="container" {style}>
  {#if prefix}
    <div class="sub prefix">{prefix}</div>
  {/if}

  <div class="input-area">
    <Textfield
      {variant}
      {type}
      bind:value
      noLabel
      label={placeHolder}
      on:keydown={onKeyDown}
      bind:this={inputElement}
      input$maxlength={maxLength}
    />
    {#if value && deleteIcon}
      <button class="delete-icon" on:click={() => (value = "")}>
        <DeleteIcon width="20px" fill="var(--color-light-50)" />
      </button>
    {/if}
  </div>

  {#if unit}
    <div class="sub unit">{unit}</div>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    width: var(--width, 200px);
  }
  .input-area {
    position: relative;
    width: 100%;
  }
  *:global(.container .mdc-text-field) {
    width: 100%;
    height: var(--height, 30px);
    background-color: white;
  }
  *:global(.container .mdc-text-field div) {
    border-radius: 0;
    border-width: 1px;
    border-color: var(--color-line-400);
  }
  *:global(.container .mdc-text-field:hover div) {
    border-color: var(--color-blue-hover) !important;
    transition: all 0.2s ease;
  }
  *:global(.container .mdc-text-field:not(:hover) div) {
    transition: all 0.2s ease;
  }
  *:global(.container .mdc-text-field--focused div) {
    border-color: var(--color-blue-hover) !important;
  }
  *:global(.container .mdc-text-field input) {
    caret-color: var(--color-light-50);
  }
  .sub {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    height: var(--height);
    border: 1px solid var(--color-line-400);
    background-color: var(--color-line-300);
    white-space: nowrap;
    padding: 0 10px;
    font-size: 0.875rem;
    cursor: default;
  }
  .prefix {
    border-right: none;
  }
  .unit {
    border-left: none;
  }
  .delete-icon {
    display: flex;
    align-items: center;
    height: 100%;
    top: 0;
    right: 5px;
    position: absolute;
    cursor: pointer;
  }
  *:global(.delete-icon:hover svg) {
    transform: scale(1.05);
  }
</style>
