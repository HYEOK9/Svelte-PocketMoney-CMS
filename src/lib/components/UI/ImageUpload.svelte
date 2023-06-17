<script lang="ts">
  import { onDestroy } from "svelte";
  import { scale } from "svelte/transition";
  // types
  import type Snackbar from "@smui/snackbar";
  // lib
  import { acceptableExt, fileToBase64 } from "$lib/util/common";
  // src
  import CameraIcon from "$lib/imgs/icon/ic-camera.png";
  //components
  import ZoomImage from "./ZoomImage.svelte";
  import DeleteIcon from "./icon/DeleteIcon.svelte";
  import SnackBar from "./SnackBar.svelte";

  export let file: undefined | File = undefined;
  export let required = false;

  let imgBoxRef: HTMLDivElement | null;
  let inputRef: HTMLInputElement | null;
  let files: undefined | FileList;
  let preview: string | ArrayBuffer | null;

  let snackbarRef: Snackbar;
  let snackbarText = "";

  const deleteFile = () => {
    files = undefined;
    inputRef!.value = "";
  };

  $: if (files) {
    file = files[0];
    (async () => {
      preview = await fileToBase64(file);
    })();
  } else {
    file = undefined;
    preview = null;
  }

  const dropHandler = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const draggedFile = event.dataTransfer?.files;

    if (
      !draggedFile?.[0].type.startsWith("image") ||
      !acceptableExt.includes(draggedFile?.[0].type.split("/")[1])
    ) {
      snackbarText = `${acceptableExt} 파일만 가능합니다.`;
      snackbarRef.open();
      return;
    }

    files = draggedFile;
  };

  const dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  $: if (imgBoxRef) {
    imgBoxRef.addEventListener("drop", dropHandler);
    imgBoxRef.addEventListener("dragover", dragOverHandler);
  }
  onDestroy(() => {
    imgBoxRef?.removeEventListener("drop", dropHandler);
    imgBoxRef?.removeEventListener("dragover", dragOverHandler);
  });
</script>

<div class="container">
  {#if !preview}
    <div in:scale={{ duration: 150 }} bind:this={imgBoxRef}>
      <button class="image-box" on:click={() => inputRef?.click()}>
        <img class="camera-icon" src={CameraIcon} alt="camera-icon" />
        <span class="guide-text">파일을 끌어놓거나 클릭하세요</span>
      </button>
    </div>
  {:else}
    <div in:scale>
      <ZoomImage
        src={String(preview)}
        alt="preview"
        width={200}
        modalWidth="30vw"
      />

      <button class="delete-icon" on:click={deleteFile}>
        <DeleteIcon fill="var(--color-red)" />
      </button>
    </div>
  {/if}

  <input
    type="file"
    bind:files
    bind:this={inputRef}
    accept={acceptableExt}
    style:display="none"
    {required}
  />
</div>

<SnackBar text={snackbarText} bind:snackbarRef />

<style lang="scss">
  .container {
    display: flex;
    position: relative;
    width: fit-content;
    height: fit-content;
    align-items: center;
  }
  .image-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 1px solid var(--color-line-400);
    cursor: pointer;
  }
  .camera-icon {
    width: 36px;
    height: 36px;
    padding-bottom: 10px;
  }
  .guide-text {
    color: var(--color-light-40);
    font-size: 0.85rem;
  }
  .delete-icon {
    position: absolute;
    top: -3px;
    right: -26px;
    cursor: pointer;
  }
  *:global(.delete-icon svg) {
    transition: all 0.2s ease;
  }
  *:global(.delete-icon:hover svg) {
    transform: scale(1.03);
  }
</style>
