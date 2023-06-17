<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import Header from "$lib/components/layout/Header.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="layout">
  <Header
    path="path1 > path2"
    title="Page Title"
    description="Page Description"
  />
</Hst.Story>
