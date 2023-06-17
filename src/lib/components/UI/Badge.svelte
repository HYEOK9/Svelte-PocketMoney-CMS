<script lang="ts">
  export let bgColor = "#fff";
  export let textColor = "#000";
  export let text: string;
  export let padding = "3px 6px";
</script>

<span
  class="badge"
  style="color:{textColor};background-color:{bgColor};padding:{padding};"
>
  {text}
</span>

<style lang="scss">
  .badge {
    width: fit-content;
    border-radius: 4px;
    font-size: 0.6875rem;
    border: 1px solid var(--color-line-500);
    cursor: default;
  }
</style>
