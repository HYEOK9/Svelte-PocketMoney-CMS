<script lang="ts">
  export let bgColor = "";
</script>

<button class="search-action-button" style:background-color={bgColor}>
  <slot/>
</button>

<style lang="scss">
  .search-action-button {
    cursor: pointer;
    padding: 0.55em 1.2em;
    color: white;
    font-size: 14px;
    font-weight: 500;
    &:active {
      transform: translateY(1px);
      filter: brightness(0.9);
    }
  }
</style>