<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import TablePagination from "$lib/components/common/pagination/TablePagination.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="common">
  <div class="container">
    <TablePagination dataList={new Array(20)} slice={[]} initialPage={5} />
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
