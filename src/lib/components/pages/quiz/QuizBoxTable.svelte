<script lang="ts">
  import { goto } from "$app/navigation";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // constants
  import { OS_LIST } from "$lib/constants/quiz";
  import { TABLE_QUIZ_BOX_TITLES } from "$lib/constants/tableTitles";
  // util
  import {
    getCustomQuizBoxTitles,
    getCustomToBeInProgressQuizBoxTitles,
    getEndQuizBoxTitles,
    getPrivateQuizBoxTitles,
  } from "$lib/util/quiz";
  // components
  import QuizBoxFilter from "./filter/QuizBoxFilter.svelte";
  import TabCommon from "../../common/tab/TabCommon.svelte";
  import QuizTableCommon from "./table/QuizTableCommon.svelte";
  import Button from "../../UI/Button.svelte";

  export let dataList: IQuiz[] = [];

  let active = "커스텀";
  let titles: ReadonlyArray<{ key: string; title: string }> =
    TABLE_QUIZ_BOX_TITLES;
  let osValue = OS_LIST[0];

  $: tabs = [
    { title: "커스텀", count: 0 },
    { title: "커스텀(진행예정)", count: 0 },
    { title: "비공개", count: 0 },
    { title: "종료된 퀴즈상자", count: null },
  ];

  $: {
    switch (active) {
      case "커스텀":
        titles = getCustomQuizBoxTitles;
        break;

      case "커스텀(진행예정)":
        titles = getCustomToBeInProgressQuizBoxTitles;
        break;

      case "비공개":
        titles = getPrivateQuizBoxTitles;
        break;

      case "종료된 퀴즈상자":
        titles = getEndQuizBoxTitles;
        break;

      default:
        break;
    }
  }
</script>

<div class="top-area">
  <QuizBoxFilter bind:osValue />
  <Button
    text="퀴즈상자 등록하기"
    --background-color="var(--color-blue)"
    --color="white"
    style="height:30px;"
    onClick={() => goto("/quiz/quizbox/create")}
  />
</div>

<div class="tab-area">
  <TabCommon {tabs} bind:active />
</div>

<QuizTableCommon
  {dataList}
  {titles}
  showPagination
  showEndDate={false}
  showUsedPoint={false}
/>

<style lang="scss">
  .top-area {
    display: flex;
    justify-content: space-between;
  }
  .tab-area {
    display: flex;
    padding: 0 0 20px 5px;
  }
</style>
