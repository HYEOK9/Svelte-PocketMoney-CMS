<script lang="ts">
  import Select, { Option } from "@smui/select";

  export let variant: "outlined" | "standard" | "filled" = "outlined";
  export let value: any = "";
  export let options: ReadonlyArray<string | object>;
  export let style = "background-color: white;";
  export const getLabel: (option: string | object) => string = (option) =>
    typeof option === "string" ? option : (option as any).label;
  export const getValue: (option: string | object) => string = (option) =>
    typeof option === "string" ? option : (option as any).value;
</script>

<div class="container" {style}>
  <Select {variant} bind:value>
    {#each options as option}
      <Option value={getValue(option)}>{getLabel(option)}</Option>
    {/each}
  </Select>
</div>

<style lang="scss">
  *:global(.container .mdc-select__anchor) {
    width: var(--width);
    height: var(--height);
    background-color: white;
  }
  *:global(.container .mdc-deprecated-list-item) {
    height: 35px;
  }
  *:global(
      .container
        .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
        div
    ) {
    border-width: 1px;
    border-color: var(--color-blue);
  }
  *:global(
      .container
        .mdc-select:not(.mdc-select--disabled).mdc-select--focused
        .mdc-select__dropdown-icon
    ) {
    fill: var(--color-blue);
  }
  *:global(.container .mdc-select__anchor .mdc-notched-outline div) {
    border-color: var(--color-line-400);
    border-radius: 0;
  }
  *:global(.container .mdc-select__anchor:hover .mdc-notched-outline div) {
    border-color: var(--color-blue-hover) !important;
  }
  *:global(.container .mdc-deprecated-list-item:hover) {
    background-color: var(--color-blue-light);
  }
</style>
