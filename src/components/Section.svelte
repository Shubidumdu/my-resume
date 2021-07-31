<script>
  import Container from './Container.svelte';
  import Grid from './Grid.svelte';

  export let title;
</script>

<Container>
  <Grid>
    <header>{title}</header>
  </Grid>
  <slot />
</Container>

<style lang="scss">
  header {
    color: $accent;
    font-size: 2rem;
    text-align: right;

    @media (max-width: 768px) {
      text-align: left;
    }

    @media print {
      font-size: 1.5rem;
    }
  }
</style>
