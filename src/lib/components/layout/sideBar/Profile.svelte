<script lang="ts">
  import Badge from "$lib/components/UI/Badge.svelte";
</script>

<div class="container">
  <div class="badge-wrapper">
    <span class="menu-title"> ROLE </span>

    <div class="badges">
      <Badge bgColor="#ffd200" text="leejaehyuck9@khu.ac.kr" />
    </div>

    <div class="badges">
      <Badge bgColor="var(--color-green)" textColor="white" text="개발 3팀" />
      <Badge bgColor="#fafafa" text="이재혁" />
    </div>
  </div>

  <div class="badge-wrapper">
    <span class="menu-title"> ADD ROLE </span>

    <div class="badges">
      <Badge bgColor="#fafafa" text="엑셀 다운로드" />
      <Badge bgColor="#fafafa" text="탈퇴회원검색" />
    </div>

    <div class="badges">
      <Badge bgColor="#fafafa" text="포인트지급" />
      <Badge bgColor="#fafafa" text="유저정보수정" />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    padding: 0 24px 24px 24px;
  }
  .badge-wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
  }
  .menu-title {
    font-size: 0.7125rem;
    color: var(--color-text-secondary);
    margin-bottom: 5px;
  }
  .badges {
    margin: 3px 0;
  }
</style>
