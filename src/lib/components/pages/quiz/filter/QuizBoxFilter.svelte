<script lang="ts">
  // constant
  import { OS_LIST } from "$lib/constants/quiz";
  // component
  import Select from "$lib/components/UI/Select.svelte";

  export let osValue: string;
</script>

<div class="container">
  <Select
    bind:value={osValue}
    options={OS_LIST}
    --width="130px"
    --height="30px"
  />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    margin-bottom: 10px;
  }
</style>
