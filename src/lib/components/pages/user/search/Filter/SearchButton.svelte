<script lang="ts">
  import { userSearchQueryState } from "$lib/store/userSearchQueryState";
  import { userSearchState } from "$lib/store/userSearchState";
  import Button from "$lib/components/UI/Button.svelte";

  const onClick = () => {
    $userSearchState.searched = true;
    $userSearchState.userInfo = undefined;
    $userSearchState.selectedUser = undefined;
  };
</script>

<Button text="검색" {onClick} --background-color="#1890ff" --color="white" />
