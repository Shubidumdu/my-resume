<script>
  export let tags = [];
</script>

<div>
  {#each tags as tag}
    <span>{tag}</span>
  {/each}
</div>

<style lang="scss">
  span {
    display: inline-block;
    color: $main;
    padding: 0.25rem;
    font-size: 0.75rem;
  }
</style>
