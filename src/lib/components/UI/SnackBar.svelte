<script lang="ts">
  // smui
  import Snackbar, { Actions, Label } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  // components
  import DeleteIcon from "$lib/components/UI/icon/DeleteIcon.svelte";

  export let text: string;
  export let snackbarRef: Snackbar;
  export let deleteIcon = true;
</script>

<div class="container">
  <Snackbar bind:this={snackbarRef} timeoutMs={4000}>
    <Label>{text}</Label>
    {#if deleteIcon}
      <Actions>
        <IconButton class="material-icons" title="Dismiss">
          <DeleteIcon fill="var(--color-red)" />
        </IconButton>
      </Actions>
    {/if}
  </Snackbar>
</div>

<style lang="scss">
  *:global(.container .mdc-snackbar) {
    top: 0;
    bottom: auto;
  }
  *:global(.container .mdc-snackbar--open .mdc-snackbar__label) {
    text-align: center;
  }
</style>
