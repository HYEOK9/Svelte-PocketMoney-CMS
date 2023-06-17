<script lang="ts">
  // types
  import type { IQuizInfo } from "$lib/types/quiz";
  // components
  import Input from "$lib/components/UI/Input.svelte";
  import DeleteIcon from "$lib/components/UI/icon/DeleteIcon.svelte";

  export let quizInfo: IQuizInfo;
  export let quizList: IQuizInfo[];
  export let quizNo = 1;

  const onDelete = () =>
    (quizList = quizList.filter((_, i) => i + 1 !== quizNo));
</script>

<div
  class="container"
  style={quizNo !== 1
    ? "border-top:2px solid var(--color-line-500);"
    : "margin-top:-20px;"}
>
  <Input
    bind:value={quizInfo.maxPrice}
    --width="300px"
    --height="35px"
    prefix="최대 금액"
    unit="원"
    style="margin:20px 0;"
  />

  <div class="quiz-info">
    <Input
      bind:value={quizInfo.question}
      --width="200px"
      --height="200px"
      placeHolder="질문{quizNo}"
      style="margin-right:10px;"
    />
    <Input
      bind:value={quizInfo.description}
      --width="200px"
      --height="200px"
      placeHolder="설명{quizNo}"
      style="margin-right:10px;"
    />
    <Input
      bind:value={quizInfo.hint}
      --width="200px"
      --height="200px"
      placeHolder="힌트{quizNo}"
      style="margin-right:10px;"
    />
    <Input
      bind:value={quizInfo.answer}
      --width="200px"
      --height="200px"
      placeHolder="정답{quizNo}"
    />

    {#if quizNo !== 1}
      <button class="delete-icon" on:click={onDelete}>
        <DeleteIcon />
      </button>
    {/if}
  </div>

  <span class="title">힌트 리다이렉트 URL :</span>
  <Input
    bind:value={quizInfo.hintRedirectUrl}
    --width="50%"
    --height="35px"
    placeHolder="연결URL을 입력하세요."
    style="margin:10px 0"
    deleteIcon
  />

  <span class="title">힌트 버튼 텍스트 :</span>
  <Input
    bind:value={quizInfo.searchBtnText}
    --width="50%"
    --height="35px"
    placeHolder="버튼 텍스트를 입력하세요."
    style="margin:10px 0 20px 0"
    deleteIcon
  />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }
  .quiz-info {
    display: flex;
    margin-bottom: 10px;
  }
  .title {
    font-size: 0.875rem;
    color: var(--color-dark-40);
  }
  .delete-icon {
    width: fit-content;
    margin-left: 20px;
    cursor: pointer;
  }
  *:global(.delete-icon svg) {
    transition: all 0.2s ease;
  }
  *:global(.delete-icon:hover svg) {
    transform: scale(1.05);
  }
</style>
