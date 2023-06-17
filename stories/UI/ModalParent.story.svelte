<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import ModalParent from "$lib/components/UI/modal/ModalParent.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <ModalParent open width="50vw" height="50vh">slot</ModalParent>
</Hst.Story>
