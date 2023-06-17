<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // components
  import CircularLoading from "$lib/components/layout/loading/CircularLoading.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import QuizCreate from "$lib/components/pages/quiz/create/QuizCreate.svelte";
  import QuizDeleteModal from "$lib/components/pages/quiz/modal/DeleteQuizModal.svelte";
  import Button from "$lib/components/UI/Button.svelte";

  export let data: PageData;
  let isLoading = true;

  const { quizDetail, isError } = data;

  onMount(() => (isLoading = !(quizDetail || isError)));

  let open = false;
</script>

<Header
  path="퀴즈관리 > 퀴즈 설정 > 퀴즈 수정"
  title="퀴즈 수정"
  description="퀴즈를 수정하실 수 있습니다."
/>

{#if isLoading}
  <CircularLoading fullPage />
{:else if !isError}
  <div class="delete-button-area">
    <Button
      text="삭제"
      onClick={() => (open = true)}
      --color="white"
      --background-color="var(--color-red)"
      style="padding: 8px 40px;font-weight: 600;"
    />
  </div>

  <QuizCreate />

  <QuizDeleteModal bind:open />
{/if}

<style lang="scss">
  .delete-button-area {
    display: flex;
    padding: 10px 0;
    justify-content: flex-end;
  }
</style>
