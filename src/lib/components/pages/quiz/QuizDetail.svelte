<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  // end points
  import { GET_QUIZ_DETAIL } from "$lib/endpoints/quiz";
  // constants
  import { QUIZ_DETAIL_TABLE_TITLES } from "$lib/constants/quizDetail";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  import type { IGetQuizDetail } from "$lib/types/data/get";
  // util
  import { get } from "$lib/util/request";
  import { isInProgress } from "$lib/util/quiz";
  // components
  import CircularLoading from "$lib/components/layout/loading/CircularLoading.svelte";
  import Button from "$lib/components/UI/Button.svelte";
  import Badge from "$lib/components/UI/Badge.svelte";

  export let open: boolean;
  export let quiz: IQuiz;

  const { title, id } = quiz;

  let data: undefined | IGetQuizDetail = undefined;

  const fetchQuizDetail = async () => {
    const res = await get<IGetQuizDetail>(GET_QUIZ_DETAIL(id));
    return res;
  };

  $: if (open) {
    (async () => {
      data = await fetchQuizDetail();
    })();
  }
</script>

<div class="container">
  <div class="header">
    {title}
    &nbsp;
    <span class="quiz-id">quiz ID: {id}</span>
    &nbsp; - 퀴즈 목록
    <!-- FIXME  - 퀴즈 갯수로 -->
    <span class="sub-number">1</span>
  </div>

  <div class="content">
    <DataTable>
      <Head>
        <Row>
          {#each QUIZ_DETAIL_TABLE_TITLES as title}
            <Cell>
              <span class="header-title">
                {title}
              </span>
            </Cell>
          {/each}
        </Row>
      </Head>

      <Body>
        {#if !data}
          <Cell colspan={QUIZ_DETAIL_TABLE_TITLES.length}>
            <CircularLoading fullPage />
          </Cell>
        {:else}
          <Cell>
            {#if isInProgress(data)}
              <Badge
                text="진행중"
                bgColor="var(--color-blue)"
                textColor="white"
                padding="6px 10px"
              />
            {:else}
              <Badge
                text="종료"
                bgColor="var(--color-red)"
                textColor="white"
                padding="6px 10px"
              />
            {/if}
          </Cell>

          <Cell>
            {data.question}
          </Cell>

          <Cell>
            {data.hint}
          </Cell>

          <Cell>
            {data.answer}
          </Cell>

          <Cell>
            {data.totalPoint.toLocaleString()}
          </Cell>

          <Cell>
            {data.usedPoint}
          </Cell>
        {/if}
      </Body>
    </DataTable>
  </div>

  <div class="button-area">
    <Button
      text="확인"
      --color="white"
      --background-color="var(--color-blue)"
      style="padding:6px 20px;border-radius:3px;"
      onClick={() => (open = false)}
    />
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-top: 5px solid var(--color-primary);
  }
  .header {
    display: flex;
    align-items: center;
    padding: 12px 24px;
    font-weight: 500;
    font-size: 1.125rem;
    word-wrap: break-word;
    border-bottom: 1px solid var(--color-line-400);
    cursor: default;
  }
  .header-title {
    font-weight: 600;
  }
  .quiz-id {
    font-size: 1rem;
    padding: 3px 6px;
    border: 1px solid var(--color-line-500);
    border-radius: 4px;
    background-color: var(--color-label-background);
  }
  .sub-number {
    margin-left: 5px;
    padding: 1px 8px;
    background-color: var(--color-red);
    color: white;
    border-radius: 100px;
    font-size: 0.875rem;
  }
  .content {
    display: flex;
    padding: 24px;
    min-height: 200px;
    cursor: default;
  }
  .button-area {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid var(--color-line-400);
    padding: 10px 16px;
  }
  *:global(.content .mdc-data-table) {
    width: 100%;
  }
  *:global(.container .mdc-data-table__header-cell) {
    background-color: var(--color-light-70);
    border-bottom: none;
  }
  *:global(.container .mdc-data-table__header-cell:not(:last-child)) {
    border-right: 1px solid var(--color-deep-blue);
  }
</style>
