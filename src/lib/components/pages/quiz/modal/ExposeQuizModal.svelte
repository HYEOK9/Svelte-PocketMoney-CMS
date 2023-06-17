<script lang="ts">
  // smui
  import type Snackbar from "@smui/snackbar";
  // components
  import ModalParent from "$lib/components/UI/modal/ModalParent.svelte";
  import Button from "$lib/components/UI/Button.svelte";
  import SnackBar from "$lib/components/UI/SnackBar.svelte";
  import ErrorIcon from "$lib/components/UI/icon/ErrorIcon.svelte";

  export let open: boolean;
  export let quizId: string;

  let snackbarRef: Snackbar;
  let snackbarMessage = "";

  const setQuizNoExpose = () => {
    snackbarRef.open();
    snackbarMessage = "TODO : API연결";
    open = false;
  };

  const buttonStyle =
    "padding:5px 20px;border:1px solid var(--color-line-400);border-radius:3px;";
</script>

<ModalParent
  bind:open
  width="350px"
  --dialog-box-shadow="none"
  --dialog-opacity="rgba(0,0,0,0.15)"
>
  <div class="modal-content">
    <div class="description">
      <ErrorIcon width="20px" height="20px" fill="var(--color-secondary)" />
      &nbsp; 퀴즈 공개여부를 변경하시겠습니까?
    </div>

    <div class="modal-button-area">
      <Button
        text="취소"
        onClick={() => (open = false)}
        --color="var(--color-light-40)"
        --background-color="white"
        style="{buttonStyle}margin-right:5px;"
      />
      <Button
        text="확인"
        onClick={setQuizNoExpose}
        --color="white"
        --background-color="var(--color-blue)"
        style="{buttonStyle}margin-left:5px;"
      />
    </div>
  </div>
</ModalParent>

<SnackBar bind:snackbarRef text={snackbarMessage} />

<style lang="scss">
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  .modal-button-area {
    display: flex;
  }
  .description {
    display: flex;
    align-items: center;
    cursor: default;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 40px 0;
  }
</style>
