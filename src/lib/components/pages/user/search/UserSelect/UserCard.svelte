<script lang="ts">
  import { userSearchState } from "$lib/store/userSearchState";
  import type { UserInfo } from "$lib/types/userSearch";

  export let user: UserInfo;

  const onClick = () => {
    $userSearchState.selectedUser = user;
  };
</script>

<div class="wrapper">
  <button class="user-card" on:click={onClick}>
    <img src={user.profileUrl} alt="프로필 사진" width="50" height="50" />
    <div class="user-info">
      <div class="nickname">{user.nickname}</div>
      <div class="phone">{user.phone}</div>
    </div>
  </button>
</div>

<style lang="scss">
  .wrapper {
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
    justify-content: center;
  }
  .user-card {
    display: flex;
    height: fit-content;
    align-items: center;
    padding: 5rem;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;

    &:hover {
      background-color: #fafafa;
    }

    .user-info {
      margin-left: 1rem;

      .nickname {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .phone {
        font-size: 1rem;
        color: #999;
      }
    }
  }
</style>
