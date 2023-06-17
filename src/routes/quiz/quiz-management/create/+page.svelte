<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import QuizCreate from "$lib/components/pages/quiz/create/QuizCreate.svelte";
</script>

<Header
  path="퀴즈관리 > 퀴즈 설정 > 퀴즈 등록"
  title="퀴즈 등록"
  description="퀴즈를 등록하실 수 있습니다."
/>

<QuizCreate />
