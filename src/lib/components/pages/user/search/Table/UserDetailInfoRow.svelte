<script lang="ts">
  export let label = "추천 코드";
  export let value = "KREGWMG";
</script>

<div class="table-row">
  <div class="label">{label}</div>
  <div class="value">{value}</div>
</div>

<style lang="scss">
  .table-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    border-bottom-width: var(--border-bottom);
    font-size: 0.9em;
  }

  .label {
    background-color: #fafafa;
    border-right: 1px solid #f1f1f1;
    flex: 8;
    padding: 0.5rem;
  }

  .value {
    background-color: #ffffff;
    flex: 18;
    padding: 0.5rem;
  }
</style>
