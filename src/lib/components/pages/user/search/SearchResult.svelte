<script lang="ts">
  import { userSearchState } from "$lib/store/userSearchState";
  import Table from "./Table.svelte";
  import NoContent from "./NoContent.svelte";
  import NotSearched from "./NotSearched.svelte";
  import UserSelect from "./UserSelect.svelte";

  $: userInfo = $userSearchState.userInfo ?? [];
  $: selectedUser = $userSearchState.selectedUser;
  $: if (
    !$userSearchState.selectedUser &&
    $userSearchState.userInfo?.length == 1
  ) {
    $userSearchState.selectedUser = $userSearchState.userInfo?.[0];
  }
</script>

<div class="search-result">
  {#if selectedUser || userInfo.length == 1}
    <Table />
  {:else if userInfo.length > 1}
    <UserSelect />
  {:else if $userSearchState.searched}
    <NoContent />
  {:else}
    <NotSearched />
  {/if}
</div>

<style lang="scss">
  .search-result {
    display: flex;
    flex: 1;
  }
</style>
