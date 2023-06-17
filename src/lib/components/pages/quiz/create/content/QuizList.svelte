<script lang="ts">
  import { slide } from "svelte/transition";
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // types
  import type { IQuizInfo } from "$lib/types/quiz";
  // components
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import SetQuiz from "./SetQuiz.svelte";
  import Button from "$lib/components/UI/Button.svelte";

  const initialInfo: IQuizInfo = {
    maxPrice: "",
    question: "",
    description: "",
    hint: "",
    answer: "",
    hintRedirectUrl: "",
    searchBtnText: "",
  };

  let quizList = $createQuizState.quizList.length
    ? $createQuizState.quizList
    : [{ ...initialInfo }];

  const addQuiz = () => (quizList = [...quizList, { ...initialInfo }]);

  $: $createQuizState.quizList = quizList;
</script>

<div class="container">
  <ComponentWithTitle title="문제" required>
    {#each quizList as quizInfo, i}
      <div in:slide>
        <SetQuiz bind:quizInfo bind:quizList quizNo={i + 1} />
      </div>
    {/each}

    <Button
      text="+ 문제 추가"
      --color="white"
      --background-color="var(--color-blue)"
      style="margin-top:20px;"
      onClick={addQuiz}
    />
  </ComponentWithTitle>
</div>
