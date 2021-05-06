<script>
  import Container from './Container.svelte';
  import Grid from './Grid.svelte';
</script>

<Container>
  <Grid>
    <header class="title">Title</header>
  </Grid>
  <section class="item">
    <Grid>
      <header>SubTitle</header>
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus
        consectetur augue et vestibulum. Sed euismod lacinia libero, id tempus
        risus posuere et. Nullam pulvinar posuere turpis, ac scelerisque arcu
        congue nec. Donec nec feugiat elit. Nam at risus interdum nisi lobortis
        aliquam. Aenean ac dolor ultrices libero rutrum egestas a in ligula.
        Maecenas posuere volutpat congue. Vivamus vestibulum mi sit amet ante
        convallis pretium..
      </section>
    </Grid>
  </section>
  <section class="item">
    <Grid>
      <header>SubTitle</header>
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus
        consectetur augue et vestibulum. Sed euismod lacinia libero, id tempus
        risus posuere et. Nullam pulvinar posuere turpis, ac scelerisque arcu
        congue nec. Donec nec feugiat elit. Nam at risus interdum nisi lobortis
        aliquam. Aenean ac dolor ultrices libero rutrum egestas a in ligula.
        Maecenas posuere volutpat congue. Vivamus vestibulum mi sit amet ante
        convallis pretium..
      </section>
    </Grid>
  </section>
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
