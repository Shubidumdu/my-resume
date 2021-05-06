<script>
  import Grid from './Grid.svelte';
  export let title = '';
</script>

<section class="content">
  <Grid>
    <header>{title}</header>
    <section>
      <slot />
    </section>
  </Grid>
</section>

<style lang="scss">
  header {
    text-align: right;
  }

  .content {
    margin-top: 2rem;
  }
</style>
