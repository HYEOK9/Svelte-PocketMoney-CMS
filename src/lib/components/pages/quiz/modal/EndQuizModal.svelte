<script lang="ts">
  // types
  import type Snackbar from "@smui/snackbar";
  import type { ICommonState } from "$lib/types/data/get";
  // end points
  import { PATCH_TERMINATE_QUIZ } from "$lib/endpoints/quiz";
  // lib
  import { patch } from "$lib/util/request";
  // components
  import ModalParent from "$lib/components/UI/modal/ModalParent.svelte";
  import Button from "$lib/components/UI/Button.svelte";
  import SnackBar from "$lib/components/UI/SnackBar.svelte";
  import ErrorIcon from "$lib/components/UI/icon/ErrorIcon.svelte";

  export let open: boolean;
  export let quizId: string;

  let snackbarRef: Snackbar;
  let snackbarMessage = "";

  const setQuizEnd = async () => {
    const res = await patch<ICommonState>(PATCH_TERMINATE_QUIZ(quizId));

    if (200 <= res.statusCode && res.statusCode < 400) {
      snackbarMessage = "퀴즈가 종료되었습니다.";
      window.location.reload();
    } else {
      snackbarMessage = res.message;
    }
    snackbarRef.open();
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
      &nbsp; 퀴즈를 종료 시키시겠습니까?
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
        text="종료"
        onClick={setQuizEnd}
        --color="white"
        --background-color="var(--color-red)"
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
