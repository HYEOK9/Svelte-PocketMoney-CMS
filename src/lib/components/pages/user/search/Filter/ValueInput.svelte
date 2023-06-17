<script lang="ts">
  import Input from "$lib/components/UI/Input.svelte";
  import { userSearchQueryState } from "$lib/store/userSearchQueryState";

  let value = "";
  let placeHolder = "";

  $: placeHolder =
    $userSearchQueryState.selectType == "code"
      ? "값을 입력해주세요"
      : "휴대폰 번호를 입력해주세요";
  $: $userSearchQueryState.value = value;
</script>

<Input {placeHolder} bind:value />
