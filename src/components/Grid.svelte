<section class="grid">
  <slot />
</section>

<style lang="scss">
  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: 25% auto;
    grid-column-gap: 2rem;
  }
</style>
