<script lang="ts">
  export let href: string;
  export let icon: string;
</script>

<style>
  .button {
    background-color: rgb(201, 2, 2);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-right: 1em;
    margin-top: 1em;
    transition: background-color 0.2s ease;
    position: relative;
    cursor: pointer;
  }

  .button:hover {
    background-color: darkred;
  }

  .icon {
    margin-right: 0.5em;
  }

  .button .dropdown {
    display: flex;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    flex-direction: column;
    top: 48px;
    left: 0;
    width: 200px;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  :global(.dropdown a) {
    padding: 12px;
    display: block;
    color: black;
    text-decoration: none;
  }

  :global(.dropdown a:hover) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .button:focus .dropdown,
  .dropdown:hover {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
</style>

<a {href}>
  <button class="button" {href}>
    {#if icon}
      <span class="icon"><i class={icon} aria-hidden="true" /></span>
    {/if}
    <slot />
    <div class="dropdown">
      <slot name="dropdown" />
    </div>
  </button>
</a>
