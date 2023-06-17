<script lang="ts">
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import Input from "$lib/components/UI/Input.svelte";
</script>

<div class="container">
  <ComponentWithTitle title="문제 안내">
    <Input --width="50%" --height="35px" placeHolder="문제 안내" deleteIcon />
  </ComponentWithTitle>
</div>

<style lang="scss">
</style>
