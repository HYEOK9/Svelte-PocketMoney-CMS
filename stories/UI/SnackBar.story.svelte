<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import SnackBar from "$lib/components/UI/SnackBar.svelte";
  import type Snackbar from "@smui/snackbar";
  import { onMount } from "svelte";

  export let Hst: THst;
  let snackbarRef: Snackbar;
  onMount(() => snackbarRef.open());
</script>

<Hst.Story group="UI">
  <SnackBar text="경고합니다" bind:snackbarRef />
</Hst.Story>
