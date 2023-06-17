<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import NotFound from "$lib/components/layout/NotFound.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="layout">
  <NotFound />
</Hst.Story>
