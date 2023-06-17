<script lang="ts">
  import Select from "$lib/components/UI/Select.svelte";
  import { userSearchQueryState } from "$lib/store/userSearchQueryState";
  import type { TSelectType } from "$lib/types/userSearchQuery";

  type Item = { label: string; value: TSelectType };
  let options: Item[] = [
    { label: "코드로 검색", value: "code" },
    { label: "전화번호로 검색", value: "phoneNumber" },
  ];

  let value: TSelectType = options[0].value;
  $: $userSearchQueryState.selectType = value;
</script>

<Select bind:value {options} />
