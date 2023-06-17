<script lang="ts">
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import Input from "$lib/components/UI/Input.svelte";
</script>

<div class="container">
  <ComponentWithTitle title="정답 메시지">
    <Input
      --width="50%"
      --height="35px"
      placeHolder="12자 이내 정답 메시지를 입력하세요."
      maxLength={12}
      deleteIcon
    />
  </ComponentWithTitle>
</div>

<style lang="scss">
</style>
