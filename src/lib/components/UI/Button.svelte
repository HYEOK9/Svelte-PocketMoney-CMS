<script lang="ts">
  export let text: string;
  export let style: undefined | string = undefined;
  export let onClick: undefined | (() => void) = undefined;
</script>

<button class="button" {style} on:click={onClick}>
  <span>{text}</span>
</button>

<style lang="scss">
  .button {
    padding: 4px 15px;
    height: fit-content;
    font-size: 0.9125rem;
    cursor: pointer;
    white-space: nowrap;
    color: var(--color);
    background-color: var(--background-color);
    transition: all 0.1s ease;
    &:hover {
      opacity: 0.9;
    }
  }
</style>
