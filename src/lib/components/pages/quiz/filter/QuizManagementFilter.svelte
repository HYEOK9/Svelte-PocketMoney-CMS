<script lang="ts">
  // smui
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  import type Textfield from "@smui/textfield/Textfield.svelte";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // constant
  import { QUIZ_SERVICE_LIST, SEARCH_FILTER_LIST } from "$lib/constants/quiz";
  // lib
  import {
    searchQuizByKeyword,
    searchQuizByService,
    searchQuizByTime,
  } from "$lib/util/quiz";
  import { pipe } from "$lib/util/common";
  // components
  import Input from "$lib/components/UI/Input.svelte";
  import Select from "$lib/components/UI/Select.svelte";
  import DatePicker from "$lib/components/UI/DatePicker.svelte";
  import Reset from "$lib/components/UI/icon/Reset.svelte";
  // props
  export let quizList: IQuiz[];
  export let filteredQuizList: IQuiz[];

  const EXPOSE_SERVICES = QUIZ_SERVICE_LIST.slice(1);

  let serviceType: typeof EXPOSE_SERVICES = [];
  let filterKeyword: (typeof SEARCH_FILTER_LIST)[number] =
    SEARCH_FILTER_LIST[0];
  let searchKeyword = "";
  let dateValue = "";

  let inputElement: Textfield;

  const reset = () => {
    serviceType = [];
    filterKeyword = SEARCH_FILTER_LIST[0];
    searchKeyword = "";
    dateValue = "";
  };

  $: filteredQuizList = pipe(
    quizList,
    searchQuizByKeyword(filterKeyword, searchKeyword),
    searchQuizByService(serviceType),
    searchQuizByTime(dateValue)
  );
</script>

<div class="container">
  <div class="select-wrapper top">
    {#each EXPOSE_SERVICES as option}
      <FormField>
        <Checkbox bind:group={serviceType} value={option} />
        <span class="option" slot="label">{option}</span>
      </FormField>
    {/each}
  </div>

  <div class="select-wrapper bottom">
    <Select
      bind:value={filterKeyword}
      options={SEARCH_FILTER_LIST}
      --width="130px"
      --height="30px"
    />

    <Input
      bind:value={searchKeyword}
      placeHolder="검색어를 입력하세요"
      bind:inputElement
      --width="160px"
      --height="30px"
      style="margin-left:5px;"
    />

    <DatePicker
      bind:value={dateValue}
      placeholder="Select Time"
      noCalendar
      --width="130px"
      --height="30px"
      style="margin-left:5px;"
      deleteIcon
    />

    <button class="reset" on:click={reset}>
      <Reset color="var(--color-light-60)" />
    </button>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
  }
  .select-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .top {
    margin-left: -5px;
  }
  .option {
    margin-left: -5px;
    cursor: pointer;
  }
  .bottom {
    margin-bottom: 30px;
  }
  .reset {
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }
  *:global(
      .select-wrapper
        .mdc-checkbox:not(.mdc-checkbox--selected)
        .mdc-checkbox__background
    ) {
    border-color: var(--color-light-65) !important;
  }
  :global(.reset:hover g) {
    stroke: var(--color-blue);
    stroke-width: 1.3px;
  }
</style>
