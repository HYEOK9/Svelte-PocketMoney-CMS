<script lang="ts">
  // smui
  import Switch from "@smui/switch";
  import FormField from "@smui/form-field";
  // props
  export let checked = false;
  export let persist = false;
  export let label = "";
  export let onClick: undefined | (() => void) = undefined;
  export let labelStyle = "";

  const toggle = () => (checked = !checked);
</script>

<button
  class="container"
  on:click={() => {
    if (onClick) onClick();
    if (!persist) toggle();
  }}
>
  <FormField>
    <Switch
      id="switch"
      bind:checked
      icons={false}
      on:click={(e) => {
        e.preventDefault();
        toggle();
      }}
    />
    {#if label && checked}
      <div class="switch-label" style={labelStyle}>{label}</div>
    {/if}
  </FormField>
</button>

<style lang="scss">
  .container {
    position: relative;
  }
  .switch-label {
    position: absolute;
    top: auto;
    left: calc(var(--width, 65px) / 6.5);
    font-size: 0.75rem;
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
  *:global(.container .mdc-switch) {
    width: var(--width, 65px);
    margin: 0;
  }
  *:global(.container .mdc-switch__track) {
    height: var(--height, 22px);
  }
  *:global(.container .mdc-switch__ripple) {
    display: none;
  }
  *:global(.container .mdc-switch__shadow) {
    pointer-events: none;
  }
</style>
