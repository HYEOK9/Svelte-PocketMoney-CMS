<script lang="ts">
  export let title: string;
  export let height = "30px";
  export let required = false;
</script>

<div class="container">
  <div class="title" style="height:{height};">
    {#if required}
      <span class="mark">*&nbsp;</span>
    {/if}
    <span>{title} :</span>
  </div>

  <div class="content-area">
    <slot />
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.95rem;
    padding-bottom: 30px;
  }
  .title {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .mark {
    color: red;
  }
  .content-area {
    flex: 0 1 auto;
    width: 85%;
  }
</style>
