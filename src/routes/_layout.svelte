<script lang="ts">
  import Header from "../components/Header.svelte";
  import Tiles from "../components/Tiles.svelte";
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  const { page } = stores();

  import { baseUrl, hs } from "../../static/data.json";

  let open = false;

  page.subscribe((event) => {
    open = event.path != "/";
  });
</script>

<style>
  #home {
    position: fixed;
    padding-top: 5em;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: filter 0.4s ease;
    overflow-x: hidden;
    overflow: auto;
  }

  #home.blur {
    filter: blur(5px) brightness(0.3);
  }

  #content {
    height: calc(100vh - 5em);
    position: relative;
    z-index: 10;
    padding-top: 5em;
  }

  #contentinner {
    height: 100%;
    z-index: 10;
  }

  #back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    cursor: pointer;
  }
</style>

<div id="header">
  <Header />
</div>
<div id="home" class={open ? 'blur' : ''}>
  <Tiles data={hs} {baseUrl} />
</div>
{#if open}
  <div id="content">
    <div id="contentinner">
      <slot />
    </div>
    <!-- svelte-ignore a11y-missing-content -->
    <a href="/" id="back" />
  </div>
{/if}
