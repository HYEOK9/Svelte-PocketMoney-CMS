<script lang="ts">
  import EmptyIcon from "$lib/components/UI/icon/EmptyIcon.svelte";

  export let text = "No data";
</script>

<div class="empty">
  <EmptyIcon />
  <span>{text}</span>
</div>

<style lang="scss">
  .empty {
    display: flex;
    position: absolute;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-height: 15vh;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-top: none;
    color: var(--color-text-secondary);
    cursor: default;
  }
</style>
