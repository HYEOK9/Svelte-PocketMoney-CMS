<script lang="ts">
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import SetEventPoint from "./SetEventPoint.svelte";

  let totalPoint = String($createQuizState.totalPoint || "");
  let minPoint = String($createQuizState.pointRange[0] || "");
  let maxPoint = String($createQuizState.pointRange[1] || "");

  $: $createQuizState.totalPoint = Number(totalPoint);
  $: $createQuizState.pointRange = [Number(minPoint), Number(maxPoint)];
</script>

<div class="container">
  <ComponentWithTitle title="총 포인트" required>
    <div class="input-area">
      <Input
        bind:value={totalPoint}
        --width="250px"
        --height="35px"
        unit="원"
        type="number"
      />
    </div>
  </ComponentWithTitle>

  <ComponentWithTitle title="포인트 범위" required>
    <div class="input-area">
      <Input
        bind:value={minPoint}
        --width="250px"
        --height="35px"
        prefix="최소"
        unit="원"
        type="number"
        style="margin-right:10px;"
      />

      <span style="cursor:default">&nbsp;~&nbsp;</span>
      <Input
        bind:value={maxPoint}
        --width="250px"
        --height="35px"
        prefix="최대"
        unit="원"
        type="number"
        style="margin-left:10px;"
      />
    </div>
  </ComponentWithTitle>

  <ComponentWithTitle title="이벤트 포인트" required>
    <SetEventPoint />
  </ComponentWithTitle>
</div>

<style lang="scss">
  .container {
    overflow-x: scroll;
  }
  .input-area {
    display: flex;
    align-items: center;
  }
</style>
