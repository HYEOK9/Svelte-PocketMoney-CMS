<script lang="ts">
  import Select from "$lib/components/UI/Select.svelte";
  import { userSearchQueryState } from "$lib/store/userSearchQueryState";

  type Item = { label: string; value: boolean };
  let options: Item[] = [
    { label: "일반유저", value: false },
    { label: "탈퇴유저", value: true },
  ];

  let value: boolean = options[0].value;
  $: $userSearchQueryState.isQuit = value;
</script>

<Select bind:value {options} />
