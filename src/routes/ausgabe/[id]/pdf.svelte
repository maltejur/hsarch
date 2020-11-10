<script context="module" lang="ts">
  export async function preload(page, session) {
    const { id } = page.params;

    const res = await this.fetch("data.json");
    const data = await res.json();
    const baseUrl = data.baseUrl;

    const url = `${baseUrl}hertzschlag/pdf/compressed/${id}.pdf`;

    return { url };
  }
</script>

<script lang="ts">
  export let url;
</script>

<style>
  iframe {
    position: absolute;
    top: 5em;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: calc(100% - 5em);
    z-index: 10;
  }
</style>

<iframe src={url} frameborder="0" />
