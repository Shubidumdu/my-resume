<script>
  import 'normalize.css';
  import Main from './components/Main.svelte';
</script>

<Main />

<style lang="scss">
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :global(body) {
    font-family: GmarketSansMedium, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    word-break: keep-all;
  }
</style>
