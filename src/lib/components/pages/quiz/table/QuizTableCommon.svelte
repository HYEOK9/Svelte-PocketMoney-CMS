<script lang="ts">
  // smui
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  // types
  import type { IQuiz, TSort } from "$lib/types/quiz";
  // lib
  import { dateFormatter } from "$lib/util/common";
  import { isEnd, sortQuizByDate } from "$lib/util/quiz";
  // components
  import CircularLoading from "$lib/components/layout/loading/CircularLoading.svelte";
  import Nodata from "./Nodata.svelte";
  import ErrorData from "./ErrorData.svelte";
  import Switch from "$lib/components/UI/Switch.svelte";
  import EndQuizModal from "../modal/EndQuizModal.svelte";
  import ExposeQuizModal from "../modal/ExposeQuizModal.svelte";
  import Badge from "$lib/components/UI/Badge.svelte";
  import QuizTitle from "./cell/QuizTitle.svelte";
  import HeaderDate from "./HeaderCell/HeaderDate.svelte";
  import HoverImage from "$lib/components/UI/HoverImage.svelte";
  import TablePagination from "$lib/components/common/pagination/TablePagination.svelte";
  import QuizType from "./cell/QuizType.svelte";

  // props
  export let dataList: IQuiz[];
  export let dataState = { isLoading: false, isError: false };
  export let titles: ReadonlyArray<{ key: string; title: string }>;

  export let showPagination: boolean;
  export let showEndDate = true;
  export let showUsedPoint = false;
  // export let showRemainingPoint = true;
  // export let expectedWinner: boolean;
  // export let statistics: boolean;

  const INITIAL_PAGE = 5;

  $: isEmpty = dataList.length === 0;
  $: sortedList = dataList;
  let slice = dataList.slice(0, INITIAL_PAGE);

  let startDateSortValue: TSort = "none";
  let endDateSortValue: TSort = "none";

  let isEndQuizModalOpened = false;
  let isExposeQuizModalOpened = false;

  const reSort = (title: string) => {
    let sortValue;
    let key: "begin" | "end";

    switch (title) {
      case "시작일":
        endDateSortValue = "none";
        key = "begin";
        sortValue = startDateSortValue;
        break;
      default:
        startDateSortValue = "none";
        key = "end";
        sortValue = endDateSortValue;
        break;
    }

    if (sortValue !== "none")
      sortedList = sortQuizByDate(dataList, sortValue, key);
    else sortedList = dataList;
  };
</script>

<div class="container">
  <DataTable>
    <Head>
      <Row>
        {#each titles as { title }}
          <Cell>
            <div class="header-text-wrapper">
              {#if title === "시작일"}
                <HeaderDate
                  {title}
                  bind:sortValue={startDateSortValue}
                  onClick={() => {
                    reSort(title);
                  }}
                />
              {:else if title === "종료일"}
                <HeaderDate
                  {title}
                  bind:sortValue={endDateSortValue}
                  onClick={() => {
                    reSort(title);
                  }}
                />
              {:else}
                <span
                  style:color={title === "퀴즈종료" ? "var(--color-red)" : ""}
                >
                  {title}
                </span>
              {/if}
            </div>
          </Cell>
        {/each}
      </Row>
    </Head>

    <Body>
      <!-- CASE 1 : data Loading -->
      {#if dataState.isLoading}
        <Cell colspan={titles.length}>
          <CircularLoading fullPage />
        </Cell>
        <!-- CASE 2 : fetch Error -->
      {:else if dataState.isError}
        <ErrorData colspan={titles.length} />
        <!-- CASE 3 : empty Data -->
      {:else if isEmpty}
        <Nodata />
        <!-- CASE 4 : common -->
      {:else}
        {#each slice as quiz}
          <Row>
            <Cell>
              {#if isEnd(quiz)}
                <Badge
                  text="종료"
                  bgColor="var(--color-red)"
                  textColor="white"
                  padding="6px 10px"
                />
              {:else}
                <Switch
                  checked
                  persist
                  label="진행중"
                  onClick={() => (isEndQuizModalOpened = true)}
                />
                <EndQuizModal
                  bind:open={isEndQuizModalOpened}
                  quizId={quiz.id}
                />
              {/if}
            </Cell>

            <Cell>
              {#if isEnd(quiz)}
                <Badge
                  text="노출"
                  bgColor="var(--color-blue)"
                  textColor="white"
                  padding="6px 10px"
                />
              {:else}
                <Switch
                  checked
                  persist
                  label="공개됨"
                  onClick={() => (isExposeQuizModalOpened = true)}
                />
                <ExposeQuizModal
                  bind:open={isExposeQuizModalOpened}
                  quizId={quiz.id}
                />
              {/if}
            </Cell>

            <Cell>
              <QuizType type={quiz.type} />
            </Cell>

            <Cell style="text-align:center;overflow:visible;">
              {#if quiz.detailImageUrl}
                <div class="thumbnail">
                  <HoverImage
                    src={quiz.detailImageUrl}
                    alt={quiz.title}
                    width={100}
                    bottom="105%"
                    left="calc(50% - 5px)"
                    style="transform:translate(-50%)"
                  />
                </div>
              {:else}
                -
              {/if}
            </Cell>

            <Cell>
              {quiz.vendor}
            </Cell>

            <Cell>
              <QuizTitle {quiz} />
            </Cell>

            <Cell>
              {dateFormatter(quiz.beginDate || "-")}
            </Cell>

            {#if showEndDate}
              <Cell>
                {quiz.endDate ? dateFormatter(quiz.endDate) : "-"}
              </Cell>
            {/if}

            <!-- {#if showRemainingPoint}
              <Cell>
                {quiz.remainingPoint?.toLocaleString() || "-"}
              </Cell>
            {/if} -->

            <Cell>{quiz.totalPoint?.toLocaleString() || "-"}</Cell>

            {#if showUsedPoint}
              <Cell>{quiz.usedPoint?.toLocaleString() || "-"}</Cell>
            {/if}

            <!-- {#if expectedWinner}
            <Cell>예상 당첨자 수</Cell>
          {/if} -->

            <!-- 통계
          {#if statistics}
            <Cell>{quiz.statistics ? "통계확인" : "-"}</Cell>
          {/if} -->
          </Row>
        {/each}
      {/if}
    </Body>
  </DataTable>

  {#if showPagination}
    <TablePagination
      dataList={sortedList}
      bind:slice
      initialPage={INITIAL_PAGE}
    />
  {/if}
</div>

<style lang="scss">
  .container {
    width: 100%;
    align-self: center;
  }
  .header-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    cursor: default;
  }

  .thumbnail {
    display: inline-block;
  }
  *:global(.container .mdc-data-table) {
    display: flex;
    border-style: none;
  }
  *:global(.container .mdc-data-table__table-container) {
    overflow: visible;
  }
  *:global(.container .mdc-data-table__table) {
    background-color: #fff;
  }
  *:global(.container .mdc-data-table__header-cell) {
    background-color: var(--color-light-70);
    border-bottom: none;
  }
  *:global(.container .mdc-data-table__header-cell:not(:last-child)) {
    border-right: 1px solid var(--color-deep-blue);
  }
  *:global(.container .mdc-data-table__cell) {
    padding: 12px 8px;
  }
  *:global(.container .mdc-data-table__row:hover) {
    background-color: var(--color-blue-faint);
  }
</style>
