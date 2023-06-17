<script lang="ts">
  import Spacer from "$lib/components/UI/modal/Spacer.svelte";
  import {
    CodeTypeSelect,
    SearchButton,
    SearchMethodSelect,
    UserTypeSelect,
    ValueInput,
  } from "./Filter";
  import TempSearchButton from "./Filter/TempSearchButton.svelte";
</script>

<div class="filters">
  <Spacer
    x="0.3rem"
    components={[
      UserTypeSelect,
      SearchMethodSelect,
      CodeTypeSelect,
      ValueInput,
      SearchButton,
    ]}
  />
</div>
<TempSearchButton />

<style lang="scss">
  .filters {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
</style>
