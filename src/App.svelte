<script>
  import Test from './components/Test.svelte';
  import 'normalize.css';
</script>

<h1>Hello, Svelte!</h1>
<Test />

<style lang="scss">
  @font-face {
    font-family: 'IBM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :global(body) {
    font-family: 'IBM';
  }
</style>
