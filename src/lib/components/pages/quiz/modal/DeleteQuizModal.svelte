<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  // types
  import type Snackbar from "@smui/snackbar";
  import type { ICommonState } from "$lib/types/data/get";
  // end points
  import { DELETE_QUIZ } from "$lib/endpoints/quiz";
  // lib
  import { del } from "$lib/util/request";
  // components
  import ModalParent from "$lib/components/UI/modal/ModalParent.svelte";
  import Button from "$lib/components/UI/Button.svelte";
  import SnackBar from "$lib/components/UI/SnackBar.svelte";
  import ErrorIcon from "$lib/components/UI/icon/ErrorIcon.svelte";

  export let open: boolean;
  let snackbarRef: Snackbar;
  let errorMessage = "";

  const onDelete = async () => {
    const res = await del<ICommonState>(DELETE_QUIZ($page.params.quizId));

    if (200 <= res.statusCode && res.statusCode < 400) {
      errorMessage = "퀴즈가 삭제되었습니다.";
      goto("/quiz/quiz-management");
    } else {
      errorMessage = res.message;
    }

    snackbarRef.open();
    open = false;
  };

  const buttonStyle =
    "padding:5px 20px;border:1px solid var(--color-line-400);border-radius:3px;";
</script>

<ModalParent bind:open width="350px">
  <div class="modal-content">
    <div class="description">
      <ErrorIcon width="20px" height="20px" fill="var(--color-secondary)" />
      &nbsp;&nbsp 삭제 하시겠습니까?
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
        text="삭제"
        onClick={onDelete}
        --color="white"
        --background-color="var(--color-red)"
        style="{buttonStyle}margin-left:5px;"
      />
    </div>
  </div>
</ModalParent>

<SnackBar bind:snackbarRef text={errorMessage} />

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
