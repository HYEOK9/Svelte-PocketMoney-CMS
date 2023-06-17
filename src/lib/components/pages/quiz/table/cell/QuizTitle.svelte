<script lang="ts">
  import { goto } from "$app/navigation";
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // components
  import ModalParent from "$lib/components/UI/modal/ModalParent.svelte";
  import QuizDetail from "../../QuizDetail.svelte";
  import WriteIcon from "$lib/imgs/icon/ic-write-orange@2x.png";

  export let quiz: IQuiz;

  let open = false;

  const goModifyPage = () => goto(`/quiz/quiz-management/${quiz.id}`);
</script>

<div class="title-area">
  <button class="title" on:click={() => (open = true)}>
    {quiz.title}
  </button>

  <button class="modify" on:click={goModifyPage}>
    <img class="icon" src={WriteIcon} alt="write-icon" />
  </button>
</div>

<ModalParent bind:open width="calc(100vw - 600px)" height="fit-content">
  <QuizDetail bind:open {quiz} />
</ModalParent>

<style lang="scss">
  .title-area {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .title {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .modify {
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .icon {
    width: 17px;
    &:hover {
      transform: scale(1.05);
    }
  }
</style>
