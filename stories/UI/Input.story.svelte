<script lang="ts">
  import type { Hst as THst } from "@histoire/plugin-svelte";
  import Input from "$lib/components/UI/Input.svelte";

  export let Hst: THst;
</script>

<Hst.Story group="UI">
  <div class="container">
    <Input placeHolder="내용을 입력해 주세요" deleteIcon />
  </div>
</Hst.Story>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
</style>
