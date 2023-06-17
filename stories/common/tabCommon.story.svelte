<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import TabCommon from "$lib/components/common/tab/TabCommon.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="common">
  <div class="container">
    <TabCommon
      tabs={[
        { title: "탭1", count: 12 },
        { title: "탭2", count: 0 },
        { title: "종료", count: null },
        { title: "종료들어가면 빨간색", count: 12 },
      ]}
      active="탭1"
    />
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
