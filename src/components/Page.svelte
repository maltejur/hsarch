<script>
  import { fly } from "svelte/transition";
</script>

<style>
  .page {
    position: absolute;
    top: 8em;
    left: 0;
    right: 0;
    max-width: 50em;
    margin-left: auto;
    margin-right: auto;
    padding: 2em 2em 2em 3em;
    background-color: white;
    min-height: 31em;
    max-height: calc(100% - 8em);
    overflow: auto;
    overflow-x: hidden;
    border-radius: 1em;
    z-index: 10;
  }

  .page .back {
    display: block;
    cursor: pointer;
    color: #969696;
    margin-top: -0.5em;
    margin-bottom: 1em;
  }
</style>

<div class="page" transition:fly={{ y: 10, duration: 500 }}>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="back" onclick="window.history.back()">
    <i class="fas fa-arrow-left" />
  </a>
  <slot />
</div>
