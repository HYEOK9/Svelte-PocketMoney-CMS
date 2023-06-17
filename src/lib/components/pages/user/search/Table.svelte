<script lang="ts">
  import { userSearchState } from "$lib/store/userSearchState";
  import UserDetailInfo from "./Table/UserDetailInfo.svelte";

  $: userInfo = $userSearchState.selectedUser;
</script>

{#if userInfo}
  <div class="table">
    <div>이미지</div>
    <UserDetailInfo />
    <div>메모</div>
  </div>
{/if}

<style lang="scss">
  .table {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    background: #ffffff;
    padding: 2em;
  }
</style>
