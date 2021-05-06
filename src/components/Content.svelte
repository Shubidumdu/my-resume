<script>
  import Grid from './Grid.svelte';
  export let title = '';
</script>

<section class="content">
  {#if title}
    <Grid>
      <header>{title}</header>
      <section>
        <slot />
      </section>
    </Grid>
  {:else}
    <section>
      <slot />
    </section>
  {/if}
</section>

<style lang="scss">
  header {
    text-align: right;
  }

  .content {
    margin-top: 2rem;
    line-height: 150%;
  }
</style>
