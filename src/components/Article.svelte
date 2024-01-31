<script>
  import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';

  export let url = '';
  export let title = '';
  export let subtitle = '';
</script>

<article>
  <header>
    <div class="title">
      {#if url.length}
        <a class="link-wrap" target="_blank" rel="noopener noreferrer" href={url}>
          <span>{title}</span>
          <span class="link-icon"><FaExternalLinkAlt /></span>
        </a>
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

    @media print {
      font-size: 1.25rem;
    }
  }

  .sub-title {
    color: $main;
    margin-top: 0.5rem;
  }

  .link-wrap {
    display: inline-flex;
    flex-wrap: wrap;
    gap: .75rem;
  }

  .link-icon {
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
