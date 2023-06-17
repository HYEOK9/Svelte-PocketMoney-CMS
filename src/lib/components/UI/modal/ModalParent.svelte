<script lang="ts">
  import Dialog from "@smui/dialog";

  export let open: boolean;
  export let width = "50vw";
  export let height = "auto";
</script>

<div class="container">
  <Dialog bind:open noContentPadding sheet>
    <div style="min-width:{width};height:{height};">
      <slot />
    </div>
  </Dialog>
</div>

<style lang="scss">
  *:global(.container .mdc-dialog .mdc-dialog__surface) {
    max-width: none;
    min-width: 0;
    box-shadow: var(--dialog-box-shadow);
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  *:global(.container .mdc-dialog .mdc-dialog__scrim) {
    background-color: var(--dialog-opacity);
  }
</style>
