<script lang="ts" context="module">
  // types
  import type { ComponentType, SvelteComponentTyped } from "svelte";
  // component
  import DefaultInfo from "./content/DefaultInfo.svelte";
  import SetQuizBox from "./content/SetQuizBox.svelte";
  import SetNotice from "./content/SetNotice.svelte";
  import PointAndPercentage from "./content/PointAndPercentage.svelte";
  import Image from "./content/Image.svelte";
  import SearchKeyword from "./content/SearchKeyword.svelte";
  import QuizList from "./content/QuizList.svelte";
  import CorrectMessage from "./content/CorrectMessage.svelte";
  import Guide from "./content/Guide.svelte";
  interface IComponentMap {
    title: string;
    component: ComponentType<SvelteComponentTyped<any>>;
  }

  export const componentMap: IComponentMap[] = [
    { title: "기본정보", component: DefaultInfo },
    {
      title: "이미지",
      component: Image,
    },
    {
      title: "퀴즈목록 (정답에 영어를 사용할 경우 대문자로 입력해주세요.)",
      component: QuizList,
    },
    {
      title: "공지사항 설정 (이미지 미등록 시 공지가 노출되지 않습니다.)",
      component: SetNotice,
    },
    {
      title: "포인트 및 확률",
      component: PointAndPercentage,
    },
    // {
    //   title: "검색 키워드",
    //   component: SearchKeyword,
    // },
    // {
    //   title: "퀴즈상자 설정 (이미지 미등록 시 퀴즈상자가 노출되지 않습니다.)",
    //   component: SetQuizBox,
    // },
    {
      title: "문제 안내",
      component: Guide,
    },
    {
      title: "정답 메시지",
      component: CorrectMessage,
    },
  ];
</script>
