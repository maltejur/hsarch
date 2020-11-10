<script context="module" lang="ts">
  export async function preload(page, session) {
    const { id } = page.params;

    const res = await this.fetch("data.json");
    const data = await res.json();
    const baseUrl = data.baseUrl;
    const ausgabe: HsAusgabe = data.hs.find((item) => item.Ausgabe == id);

    return { baseUrl, ausgabe };
  }
</script>

<script lang="ts">
  import Page from "../../../components/Page.svelte";
  import type { HsAusgabe } from "../../../../../models";
  import Button from "../../../components/Button.svelte";

  export let baseUrl;
  export let ausgabe;
</script>

<style>
  img {
    float: left;
    max-width: 40%;
    margin-right: 2em;
    box-shadow: 2px 2px 8px #6b6b6b;
  }
</style>

<Page>
  <img
    src="{baseUrl}hertzschlag/images/{ausgabe.Ausgabe}.jpg"
    alt=""
    srcset="" />
  <h2>HertzSCHLAG {ausgabe.Ausgabe}</h2>
  <h1>{ausgabe.Thema}</h1>
  {#each Object.keys(ausgabe) as key (key)}
    {#if key != 'Ausgabe' && key != 'Thema' && ausgabe[key] != null}
      <p><b>{key}</b>: {ausgabe[key]}</p>
    {/if}
  {/each}
  <Button href="ausgabe/{ausgabe.Ausgabe}/pdf" icon="fas fa-file-pdf">
    PDF Anzeigen
  </Button>
</Page>
