<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import Footer from "$lib/components/layout/Footer.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="layout">
  <Footer />
</Hst.Story>
