<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import { OS_LIST } from "$lib/constants/quiz";
  import Select from "$lib/components/UI/Select.svelte";

  export let Hst: THst;
  let value = OS_LIST[0];
</script>

<Hst.Story group="UI">
  <div class="container">
    <Select bind:value options={OS_LIST} />
  </div>
</Hst.Story>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
</style>
