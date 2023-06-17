<script lang="ts">
  // smui
  import { Cell } from "@smui/data-table";
  // components
  import NotFound from "$lib/components/layout/NotFound.svelte";

  export let colspan: number;
  export let errorMessage = "Network Error";
</script>

<Cell {colspan}>
  <NotFound {errorMessage} width="55px" --min-height="15vh" br={0} />
</Cell>
