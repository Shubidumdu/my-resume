<section class="grid">
  <slot />
</section>

<style lang="scss">
  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: 25% auto;
    grid-column-gap: 2rem;

    @media (max-width: 920px) {
      grid-template-columns: 30% auto;
      grid-column-gap: 2rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 100%;
      grid-row-gap: 1rem;
    }
  }
</style>
