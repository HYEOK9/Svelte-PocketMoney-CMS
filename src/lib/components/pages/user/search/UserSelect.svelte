<script lang="ts">
  import { userSearchState } from "$lib/store/userSearchState";
  import { UserCard } from "./UserSelect";

  $: userInfo = $userSearchState.userInfo ?? [];
</script>

{#if userInfo.length > 1}
  <div class="user-select">
    {#each userInfo as user}
      <UserCard {user} />
    {/each}
  </div>
{/if}

<style lang="scss">
  .user-select {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-around;
  }
</style>
