<script>
  export let items;
</script>

{#if items.length}
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
{/if}
