<script lang="ts">
  export let bgColor = "#fff";
</script>

<div class="container" style="background-color:{bgColor};">
  <slot name="card" />
</div>

<style lang="scss">
  .container {
    display: inline-block;
    width: 240px;
    min-height: 370px;
    padding: 30px;
    border-radius: 10px;
    margin: 5px;
    vertical-align: top;
    border: 1px solid var(--color-line-500);
    cursor: default;
  }
</style>
