<script lang="ts">
  export let color: undefined | false | string;
  export let width = "36px";
  export let height = "36px";
</script>

<svg viewBox="0 0 36 36" {width} {height} xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path d="M0 0h36v36H0z" />
    <path
      stroke={color || "#2E2E2E"}
      stroke-width="4"
      d="M26.485 23 18 14.515 9.515 23"
    />
  </g>
</svg>
