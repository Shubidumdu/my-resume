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

    @media (max-width: 768px) {
      color: $main;
      text-align: left;
    }
  }

  .content {
    margin-top: 2rem;
    line-height: 150%;

    @media (max-width: 768px) {
      text-align: left;
    }
  }
</style>
