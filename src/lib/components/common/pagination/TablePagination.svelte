<script lang="ts">
  // smui
  import { Pagination } from "@smui/data-table";
  import Select, { Option } from "@smui/select";
  import IconButton from "@smui/icon-button";
  import { Label } from "@smui/common";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // props
  export let dataList: IQuiz[];
  export let slice: IQuiz[];
  export let initialPage: number;

  let rowsPerPage = initialPage;
  let currentPage = 0;
  let pageNationElement: HTMLDivElement;

  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, dataList.length);
  $: slice = dataList.slice(start, end);
  $: lastPage = Math.max(Math.ceil(dataList.length / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }

  const setScrollBottom = () => pageNationElement.scrollIntoView();

  const goFirstPage = () => (currentPage = 0);
  const goPrevPage = () => currentPage--;
  const goNextPage = () => currentPage++;
  const goLastPage = () => (currentPage = lastPage);
</script>

{#if dataList.length > initialPage}
  <div class="container" bind:this={pageNationElement}>
    <Pagination slot="paginate">
      <svelte:fragment slot="rowsPerPage">
        <Select variant="outlined" bind:value={rowsPerPage} noLabel>
          {#each [initialPage, initialPage * 2, initialPage * 10, initialPage * 20] as page}
            <Option value={page} on:click={setScrollBottom}>{page}</Option>
          {/each}
        </Select>

        <Label style="margin-left:5px;">개씩 보기</Label>
      </svelte:fragment>

      <svelte:fragment slot="total">
        {start + 1}-{end} of {dataList.length}
      </svelte:fragment>

      <IconButton
        class="material-icons"
        action="first-page"
        title="First page"
        on:click={goFirstPage}
        disabled={currentPage === 0}
      >
        first_page
      </IconButton>

      <IconButton
        class="material-icons"
        action="prev-page"
        title="Prev page"
        on:click={goPrevPage}
        disabled={currentPage === 0}
        >chevron_left
      </IconButton>

      <IconButton
        class="material-icons"
        action="next-page"
        title="Next page"
        on:click={goNextPage}
        disabled={currentPage === lastPage}
      >
        chevron_right
      </IconButton>

      <IconButton
        class="material-icons"
        action="last-page"
        title="Last page"
        on:click={goLastPage}
        disabled={currentPage === lastPage}
      >
        last_page
      </IconButton>
    </Pagination>
  </div>
{/if}

<style lang="scss">
  *:global(.container .mdc-data-table__pagination) {
    border: none;
  }
  *:global(
      .container
        .mdc-select--outlined.mdc-select--focused
        .mdc-notched-outline__leading
    ) {
    border-color: var(--color-blue) !important;
  }
  *:global(
      .container
        .mdc-select--outlined.mdc-select--focused
        .mdc-notched-outline__trailing
    ) {
    border-color: var(--color-blue) !important;
  }
  *:global(
      .container .mdc-select.mdc-select--focused .mdc-select__dropdown-icon
    ) {
    fill: var(--color-blue);
  }
  *:global(.container .mdc-select__anchor:hover div) {
    border-color: var(--color-blue-hover) !important;
  }
  *:global(.container .mdc-deprecated-list) {
    padding: 0;
  }
  *:global(.container .mdc-ripple-upgraded:hover) {
    background-color: var(--color-blue-light);
  }
</style>
