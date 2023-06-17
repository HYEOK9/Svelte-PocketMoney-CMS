<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  // components
  import QuizManagementTable from "$lib/components/pages/quiz/QuizManagementTable.svelte";

  export let data: PageData;
  let isLoading = true;

  const { quizData, isError } = data;

  onMount(() => {
    if (quizData?.items || isError) isLoading = false;
  });
</script>

<QuizManagementTable
  quizList={quizData?.items}
  dataState={{ isLoading, isError }}
/>
