<article class="container">
  <slot />
</article>

<style lang="scss">
  .container {
    padding: 2rem 4rem;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    background: $light;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }
  }
</style>
