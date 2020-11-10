<script context="module" lang="ts">
  export async function preload(page, session) {
    const res = await this.fetch("data.json");
    const data = await res.json();
    const hs = data.hs;

    return { hs };
  }
</script>

<script lang="ts">
  import Page from "../components/Page.svelte";
  import { goto } from "@sapper/app";
  import type { HsAusgabe } from "../models";
  export let hs: HsAusgabe[];
</script>

<style>
  th,
  td {
    padding: 0.5em;
  }

  tr {
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.2s ease;
    cursor: pointer;
  }

  tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>

<Page>
  <h1>Ausgabenliste</h1>
  <table>
    <tr>
      <th>Ausgabe</th>
      <th>Thema</th>
    </tr>
    {#each hs as item}
      <tr onclick={(ev, el) => console.log(ev, el)}>
        <td>{item.Ausgabe}</td>
        <td>{item.Thema}</td>
      </tr>
    {/each}
  </table>
</Page>
