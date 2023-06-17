<script lang="ts">
  import { onMount } from "svelte";
  import type Snackbar from "@smui/snackbar";
  import SnackBar from "../UI/SnackBar.svelte";

  let snackbarRef: Snackbar;

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    if (e) snackbarRef.open();
  };

  onMount(() => {
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  });
</script>

<SnackBar bind:snackbarRef text="우클릭은 사용할 수 없습니다." />
