<script>
  import 'normalize.css';
  import Profile from './components/Profile.svelte';
  import Section from './components/Section.svelte';
</script>

<Profile />
<Section />
<Section />
<Section />

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
    background: $main;
  }
</style>
