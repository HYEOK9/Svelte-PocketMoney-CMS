<script lang="ts">
  // components
  import LogoIcon from "$lib/imgs/logo/ic-logo-color-en@2x.png";
  import ArrowLeft from "$lib/components/UI/icon/ArrowLeftDouble.svelte";
  // props
  export let open: boolean;
  export let showArrow: boolean;
</script>

<div class="container">
  <a href="/" class="logo-wrapper">
    <img class="logo" src={LogoIcon} alt="캐시닥" />
  </a>

  <button
    class="close-button"
    on:click={() => (open = false)}
    data-show={showArrow}
  >
    <ArrowLeft />
  </button>
</div>

<style lang="scss">
  .container {
    position: relative;
    padding: 35px 0px 30px 0;
    border-top: 5px solid var(--color-primary);
  }
  .logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 150px;
  }
  .close-button {
    position: absolute;
    top: 50%;
    right: 0;
    cursor: pointer;
    padding: 0 10px;
    &[data-show="false"] {
      display: none;
    }
  }
  *:global(.close-button:hover svg) {
    fill: var(--color-dark-35);
    transform: translateX(-2px);
    transition: all 0.2s ease-out;
  }
  *:global(.close-button:not(:hover) svg) {
    transform: translateX(0);
    transition: all 0.2s ease-out;
  }
</style>
