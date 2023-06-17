<script lang="ts">
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import ImageUpload from "$lib/components/UI/ImageUpload.svelte";
</script>

<div class="container">
  <ComponentWithTitle title="아이콘 이미지">
    <ImageUpload bind:file={$createQuizState.iconImage} />
  </ComponentWithTitle>

  <ComponentWithTitle title="상세화면 이미지" required>
    <ImageUpload bind:file={$createQuizState.detailImage} required />
  </ComponentWithTitle>

  <ComponentWithTitle title="유튜브 url">
    <Input
      bind:value={$createQuizState.youtubeUrl}
      --width="50%"
      --height="35px"
      placeHolder="유튜브 주소 또는 키를 입력하세요."
      deleteIcon
    />
  </ComponentWithTitle>
</div>

<style lang="scss">
</style>
