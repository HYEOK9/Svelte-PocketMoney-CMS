<script lang="ts">
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // components
  import Input from "$lib/components/UI/Input.svelte";

  let p1 = String($createQuizState.eventPoint[0]["point"]);
  let p2 = String($createQuizState.eventPoint[1]["point"]);

  let q1 = String($createQuizState.eventPoint[0]["quantity"] || "");
  let q2 = String($createQuizState.eventPoint[1]["quantity"] || "");

  $: $createQuizState.eventPoint = [
    { point: Number(p1), quantity: Number(q1) },
    { point: Number(p2), quantity: Number(q2) },
  ];
</script>

<div class="container">
  <Input
    bind:value={q1}
    --width="250px"
    --height="35px"
    prefix="{p1} 포인트"
    unit="명"
    type="number"
  />

  &nbsp; &nbsp;&nbsp;

  <Input
    bind:value={q2}
    --width="250px"
    --height="35px"
    prefix="{p2} 포인트"
    unit="명"
    type="number"
    style="margin-left:20px;"
  />
</div>

<style lang="scss">
  .container {
    display: flex;
  }
</style>
