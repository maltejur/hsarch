<script lang="ts">
  import type { HsAusgabe } from "../models";

  export let data: HsAusgabe[];
  export let baseUrl: string;
</script>

<style>
  .grid {
    display: grid;
    overflow-x: hidden;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 0;
  }

  .module {
    height: 100%;
    background-color: black;
    position: relative;
    margin: 0;
  }

  .moduleImg {
    width: 100%;
    height: 100%;
    transition: opacity 0.1s ease;
  }

  .module:hover .moduleImg {
    opacity: 0.5;
  }

  .moduleLabel {
    opacity: 0;
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    padding-left: 1em;
    padding-right: 1em;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .module:hover .moduleLabel {
    opacity: 1;
    transform: translateY(-4px);
  }
</style>

<div class="grid">
  {#each data as item (item.Ausgabe)}
    <a class="module" href="ausgabe/{item.Ausgabe}">
      <img
        src="{baseUrl}hertzschlag/images/{item.Ausgabe}.jpg"
        class="moduleImg"
        alt={item.Thema} />
      <div class="moduleLabel">
        <h3>HS {item.Ausgabe}</h3>
        <h2>{item.Thema}</h2>
      </div>
    </a>
  {/each}
</div>
