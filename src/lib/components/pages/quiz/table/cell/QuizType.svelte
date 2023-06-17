<script lang="ts">
  import CashDocIcon from "$lib/imgs/logo/ic-cashdoc.png";
  import CashWalkIcon from "$lib/imgs/logo/ic-cashwalk.png";
  import TimeSpreadIcon from "$lib/imgs/logo/ic-timespread.png";
  import GenietIcon from "$lib/components/UI/icon/GenietIcon.svelte";
  // props
  export let type: string[];

  let isCashDoc = type.includes("cashdoc");
  let isCashWalk = type.includes("cashwalk");
  let isTimeSpread = type.includes("timespread");
  let isGeniet = type.includes("geniet");
</script>

<div class="container">
  {#if isCashDoc}
    <img class="icon" src={CashDocIcon} alt="캐시닥" />
  {/if}

  {#if isCashWalk}
    <img class="icon" src={CashWalkIcon} alt="캐시워크" />
  {/if}

  {#if isTimeSpread}
    <img class="icon" src={TimeSpreadIcon} alt="타임스프레드" />
  {/if}

  {#if isGeniet}
    <GenietIcon />
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 20px;
    margin-right: 5px;
  }
</style>
