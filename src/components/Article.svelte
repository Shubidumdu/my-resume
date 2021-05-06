<script>
  export let title = '';
  export let subtitle = '';
</script>

<article>
  <header>
    <div class="title">{title}</div>
    <div class="sub-title">{subtitle}</div>
  </header>
  <section>
    <slot />
  </section>
</article>

<style lang="scss">
  .title {
    font-size: 1.5rem;
  }

  .sub-title {
    color: $main;
    margin-top: 0.5rem;
  }
</style>
