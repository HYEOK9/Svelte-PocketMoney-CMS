<script lang="ts">
  import { onMount } from "svelte";
  import flatpickr from "flatpickr";
  // style
  import "flatpickr/dist/flatpickr.min.css";
  // lib
  import { Korean } from "flatpickr/dist/l10n/ko.js";
  // components
  import Clock from "./icon/Clock.svelte";
  import Calendar from "./icon/Calendar.svelte";
  import DeleteIcon from "./icon/DeleteIcon.svelte";

  export let value: string;
  export let enableTime = true;
  export let noCalendar = false;
  export let minDate: undefined | string = undefined;
  export let maxDate: undefined | string = undefined;
  export let dateFormat = !noCalendar ? "Y-m-d / H:i" : "H:i";
  export let placeholder = "날짜를 선택해 주세요.";
  export let icon = true;
  export let style = "";
  export let deleteIcon = false;
  export let disabled = false;

  let inputRef: HTMLInputElement;

  onMount(() => {
    flatpickr(inputRef, {
      onValueUpdate: (_, date) => (value = date),
      enableTime,
      noCalendar,
      minDate,
      maxDate,
      dateFormat,
      disableMobile: true,
      locale: Korean,
    });
  });

  const focus = () => inputRef.focus();
  const clear = () => {
    inputRef.value = "";
    value = "";
  };
</script>

<div class="container" {style}>
  {#if (!value && icon) || disabled}
    <button class="icon" on:click={focus} data-disabled={disabled}>
      {#if !noCalendar}
        <Calendar />
      {:else}
        <Clock />
      {/if}
    </button>
  {/if}
  {#if value && deleteIcon && !disabled}
    <button class="icon" on:click={clear} data-disabled={disabled}>
      <DeleteIcon width="20px" fill="var(--color-light-50)" />
    </button>
  {/if}
  <input {value} class="date" bind:this={inputRef} {placeholder} {disabled} />
</div>

<style lang="scss">
  .container {
    display: flex;
    width: var(--width, 200px);
    height: var(--height, 30px);
    align-items: center;
    position: relative;
  }
  .date {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-line-400);
    outline: none;
    font-size: 0.85rem;
    transition: all 0.2s ease;
    padding-left: 16px;
    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      border-color: var(--color-blue-hover);
    }
    &::placeholder {
      color: var(--color-light-50);
    }
    &:disabled {
      cursor: default;
      color: var(--color-light-50);
    }
  }
  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;

    &:hover ~ input:not(:disabled) {
      border-color: var(--color-blue-hover);
    }
    &[data-disabled="false"] {
      cursor: pointer;
      &:hover {
        opacity: 0.85;
      }
    }
  }
</style>
