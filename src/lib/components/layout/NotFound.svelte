<script lang="ts">
  import ErrorIcon from "$lib/components/UI/icon/ErrorIcon.svelte";
  export let errorMessage = "존재하지 않는 페이지 입니다.";
  export let width = "101px";
  export let height = "101px";
  export let br = 2;
</script>

<div class="container">
  <ErrorIcon {width} {height} />
  {#each new Array(br) as _}
    <br />
  {/each}
  <span class="description">{errorMessage}</span>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: var(--min-height, 80vh);
  }

  .description {
    font-size: 0.875rem;
    color: var(--color-light-40);
    cursor: default;
  }
</style>
