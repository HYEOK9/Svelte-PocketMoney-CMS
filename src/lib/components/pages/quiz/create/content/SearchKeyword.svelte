<script lang="ts">
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import ImageUpload from "$lib/components/UI/ImageUpload.svelte";

  let image: File;
</script>

<div class="container">
  <ComponentWithTitle title="키워드">
    <Input --width="100%" --height="35px" placeHolder="키워드를 입력하세요." />
  </ComponentWithTitle>

  <ComponentWithTitle title="키워드 이미지">
    <ImageUpload bind:file={image} />
  </ComponentWithTitle>
</div>

<style lang="scss">
</style>
