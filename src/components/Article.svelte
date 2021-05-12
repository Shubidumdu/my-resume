<script>
  export let url = '';
  export let title = '';
  export let subtitle = '';
</script>

<article>
  <header>
    <div class="title">
      {#if url.length}
        <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
      {:else}
        {title}
      {/if}
    </div>
    <div class="sub-title">{subtitle}</div>
  </header>
  <section>
    <slot />
  </section>
</article>

<style lang="scss">
  .title {
    font-size: 1.5rem;
    > a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

      &:hover {
        color: $accent;
      }
    }
  }

  .sub-title {
    color: $main;
    margin-top: 0.5rem;
  }
</style>
