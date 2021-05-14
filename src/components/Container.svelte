<article class="container">
  <slot />
</article>

<style lang="scss">
  .container {
    padding: 2rem 4rem;
    width: calc(100% - 8rem);
    max-width: 920px;
    margin: 0 auto;
    background: $light;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      width: calc(100% - 4rem);
      padding: 1rem 2rem;
    }
  }
</style>
