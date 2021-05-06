<script>
  import Container from './Container.svelte';
  import Grid from './Grid.svelte';

  export let title;
  export let contents;
</script>

<Container>
  <Grid>
    <header class="title">{title}</header>
  </Grid>
  {#each contents as { title, content }}
    <section class="item">
      <Grid>
        <header>{title}</header>
        <section>
          {content}
        </section>
      </Grid>
    </section>
  {/each}
</Container>

<style lang="scss">
  .title {
    color: $accent;
    font-size: 2rem;
  }

  header {
    text-align: right;
  }

  .item {
    margin-top: 2rem;
  }
</style>
