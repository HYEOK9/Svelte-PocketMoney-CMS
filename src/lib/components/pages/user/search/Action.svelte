<script lang="ts">
  import Spacer from "$lib/components/UI/modal/Spacer.svelte";
  import {
    DeletePhoneNumber,
    MoveAccount,
    MovePoint,
    ResetAuth,
  } from "./Action";
</script>

<div class="actions">
  <Spacer
    x="1rem"
    components={[MoveAccount, MovePoint, DeletePhoneNumber, ResetAuth]}
  />
</div>

<style lang="scss">
  .actions {
    display: flex;
    margin-bottom: 0.5rem;
  }
</style>
