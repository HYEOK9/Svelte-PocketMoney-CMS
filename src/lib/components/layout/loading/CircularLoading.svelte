<script lang="ts">
  import CircularProgress from "@smui/circular-progress";

  export let fullPage = false;
</script>

<div class="container" data-fullPage={fullPage}>
  <CircularProgress style="height:40px;width:40px;" indeterminate />
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    &[data-fullPage="true"] {
      position: relative;
      margin: auto;
      min-height: auto;
      align-items: center;
    }
  }
  *:global(.container .mdc-circular-progress__indeterminate-circle-graphic) {
    stroke: var(--color-blue);
  }
</style>
