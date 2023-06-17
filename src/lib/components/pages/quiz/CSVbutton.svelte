<script lang="ts">
  // types
  import type { IQuiz } from "$lib/types/quiz";
  // components
  import Button from "$lib/components/UI/Button.svelte";
  import CSVmodal from "./modal/CSVmodal.svelte";

  export let data: IQuiz[];

  let open = false;
</script>

<div class="container">
  <Button
    text="↓ CSV"
    --background-color="white"
    style="border:1px solid var(--color-line-500);height:30px;"
    onClick={() => (open = true)}
  />

  <CSVmodal bind:open {data} />
</div>

<style lang="scss">
  .container {
    align-self: flex-end;
  }
</style>
