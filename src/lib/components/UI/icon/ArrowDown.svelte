<script lang="ts">
  export let color: undefined | false | string = undefined;
  export let width = "36px";
  export let height = "36px";
  export let strokeWidth = "4";
</script>

<svg viewBox="0 0 36 36" {width} {height} xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path d="M36.3 36H.3V0h36z" />
    <path
      stroke={color || "#2E2E2E"}
      stroke-width={strokeWidth}
      d="m9.815 15 8.485 8.485L26.785 15"
    />
  </g>
</svg>
