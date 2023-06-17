<script lang="ts">
  import { onMount } from "svelte";
  // smui
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // lib
  import { urlToFile } from "$lib/util/common";
  // constant
  import { OS_LIST } from "$lib/constants/quiz";
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import ImageUpload from "$lib/components/UI/ImageUpload.svelte";

  let selected = ["iOS", "안드로이드"];

  onMount(() => {
    if ($createQuizState.noticeImageUrl) {
      (async () => {
        $createQuizState.noticeImage = await urlToFile(
          String($createQuizState.noticeImageUrl)
        );
      })();
    }
  });
</script>

<div class="container">
  <ComponentWithTitle title="OS">
    <div class="checkbox-area">
      {#each OS_LIST.slice(1) as option}
        <FormField>
          <Checkbox bind:group={selected} value={option} />
          <span class="option" slot="label">{option}</span>
        </FormField>
      {/each}
    </div>
  </ComponentWithTitle>

  <ComponentWithTitle title="이미지" required>
    <ImageUpload bind:file={$createQuizState.noticeImage} />
  </ComponentWithTitle>
</div>

<style lang="scss">
  .checkbox-area {
    margin-left: -10px;
  }
  .option {
    cursor: pointer;
  }
  *:global(.container .mdc-form-field label) {
    padding: 0;
  }
</style>
