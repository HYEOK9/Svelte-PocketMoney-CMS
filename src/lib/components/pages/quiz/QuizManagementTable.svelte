<script lang="ts">
  import { goto } from "$app/navigation";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // constant
  import { TABLE_QUIZ_TITLES } from "$lib/constants/tableTitles";
  // util
  import {
    getInProgressQuizTitles,
    getToBeInProgressQuizTitles,
    getPrivateQuizTitles,
    getEndQuizTitles,
    getInProgressQuiz,
    getToBeInProgressQuiz,
    getPrivateQuiz,
    getEndedQuiz,
  } from "$lib/util/quiz";
  // components
  import QuizManagementFilter from "./filter/QuizManagementFilter.svelte";
  import TabCommon from "../../common/tab/TabCommon.svelte";
  import CSVbutton from "./CSVbutton.svelte";
  import QuizTableCommon from "./table/QuizTableCommon.svelte";
  import Button from "../../UI/Button.svelte";

  export let quizList: IQuiz[] = [];
  export let dataState: { isLoading: boolean; isError: boolean };

  let titles: ReadonlyArray<{ key: string; title: string }> = TABLE_QUIZ_TITLES;
  let active = "진행중";

  let filteredQuizList = quizList;
  let showingQuizList: IQuiz[];

  let inProgressQuiz: IQuiz[];
  let toBeInProgressQuiz: IQuiz[];
  let privateQuiz: IQuiz[];
  let endedQuiz: IQuiz[];

  $: {
    inProgressQuiz = getInProgressQuiz(filteredQuizList);
    toBeInProgressQuiz = getToBeInProgressQuiz(filteredQuizList);
    privateQuiz = getPrivateQuiz(filteredQuizList);
    endedQuiz = getEndedQuiz(filteredQuizList);
  }

  $: tabs = [
    { title: "진행중", count: inProgressQuiz.length },
    { title: "진행예정", count: toBeInProgressQuiz.length },
    { title: "비공개", count: privateQuiz.length },
    { title: "종료", count: null },
  ];

  $: {
    switch (active) {
      case "진행중":
        titles = getInProgressQuizTitles;
        showingQuizList = inProgressQuiz;
        break;

      case "진행예정":
        titles = getToBeInProgressQuizTitles;
        showingQuizList = toBeInProgressQuiz;
        break;

      case "비공개":
        titles = getPrivateQuizTitles;
        showingQuizList = privateQuiz;
        break;

      case "종료":
        titles = getEndQuizTitles;
        showingQuizList = endedQuiz;
        break;

      default:
        break;
    }
  }
</script>

<div class="filter-area">
  <QuizManagementFilter {quizList} bind:filteredQuizList />
  <Button
    text="퀴즈 등록하기"
    --background-color="var(--color-blue)"
    --color="white"
    style="height:30px;align-self:center;"
    onClick={() => goto("/quiz/quiz-management/create")}
  />
</div>

<div class="tap-area">
  <TabCommon {tabs} bind:active />

  <CSVbutton data={showingQuizList} />
</div>

<QuizTableCommon
  dataList={showingQuizList}
  {dataState}
  {titles}
  showPagination
  showEndDate={active === "종료"}
  showUsedPoint={active !== "진행예정"}
/>

<style lang="scss">
  .filter-area {
    display: flex;
    justify-content: space-between;
  }
  .tap-area {
    display: flex;
    justify-content: space-between;
    padding: 0 0 20px 5px;
  }
</style>
