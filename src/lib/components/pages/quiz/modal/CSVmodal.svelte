<script lang="ts">
  // smui
  import type Snackbar from "@smui/snackbar/Snackbar.svelte";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // lib
  import { downloadCSV } from "$lib/util/quiz";
  // components
  import ModalParent from "$lib/components/UI/modal/ModalParent.svelte";
  import Button from "$lib/components/UI/Button.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import ErrorIcon from "$lib/components/UI/icon/ErrorIcon.svelte";
  import SnackBar from "$lib/components/UI/SnackBar.svelte";
  // props
  export let open: boolean;
  export let data: IQuiz[] = [];

  let snackbarRef: Snackbar;
  let message = "";

  // TODO : 사유 api post
  let reason = "";
  let password = "";

  const onClick = () => {
    if (!data.length) {
      message = "데이터가 없습니다.";
    } else {
      message = "다운로드 중...";
      downloadCSV(data, password);
    }
    snackbarRef.open();
    open = false;
  };

  const onKeyDown = (event: KeyboardEvent | CustomEvent<any>) => {
    const e = event as KeyboardEvent;
    if (e.key !== "Enter" || e.isComposing) return;

    onClick();
  };

  $: if (!open) {
    reason = "";
    password = "";
  }
  const buttonStyle = "border:1px solid var(--color-line-400);height:30px;";
</script>

<ModalParent bind:open width="450px" height="fit-content">
  <div class="modal-content">
    <div class="input-wrapper">
      <div class="description">
        <ErrorIcon width="20px" height="20px" fill="var(--color-secondary)" />
        &nbsp; 사유 및 비밀번호를 입력해주세요.
      </div>

      <div class="title">사유</div>
      <Input
        bind:value={reason}
        placeHolder="사유를 입력해주세요."
        --width="100%"
        --height="40px"
        {onKeyDown}
      />
    </div>

    <div class="input-wrapper">
      <div class="title">비밀번호</div>
      <Input
        bind:value={password}
        placeHolder="비밀번호를 입력해주세요."
        --width="100%"
        --height="40px"
        type="password"
        {onKeyDown}
      />
    </div>
    <div class="button-area">
      <Button
        text="취소"
        style="{buttonStyle}margin-right:5px;"
        onClick={() => (open = false)}
      />
      <Button
        text="확인"
        {onClick}
        --color="white"
        --background-color="var(--color-blue)"
        style={buttonStyle}
      />
    </div>
  </div>
</ModalParent>

<SnackBar bind:snackbarRef text={message} deleteIcon={!data.length} />

<style lang="scss">
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
  .input-wrapper {
    width: 100%;
    padding-bottom: 15px;
    cursor: default;
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--color-dark-35);
    font-size: 0.9125rem;
    margin: 0 0 20px 3px;
  }
  .title {
    color: var(--color-dark-35);
    font-size: 0.9125rem;
    margin: 0 0 10px 5px;
  }

  .button-area {
    align-self: flex-end;
    margin: 10px 0 -10px 0;
  }
</style>
