<script lang="ts">
  import Select from "$lib/components/UI/Select.svelte";
  import { userSearchQueryState } from "$lib/store/userSearchQueryState";
  import type { TCodeType } from "$lib/types/userSearchQuery";

  type Item = { label: string; value: TCodeType };
  let options: Item[] = [
    { label: "추천인코드", value: "code" },
    { label: "ID(owner)", value: "owner" },
    { label: "KaKao", value: "kakao" },
    { label: "Facebook", value: "facebook" },
    { label: "APPLE", value: "apple" },
    { label: "캐시워치 MAC 주소", value: "watch" },
    { label: "제휴코드", value: "partner" },
    { label: "모비게임", value: "movigame" },
  ];

  let value: TCodeType = options[0].value;
  $: $userSearchQueryState.type = value;
</script>

{#if $userSearchQueryState.selectType == "code"}
  <Select bind:value {options} />
{/if}
