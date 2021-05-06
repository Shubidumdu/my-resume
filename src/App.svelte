<script>
  import 'normalize.css';
  import Content from './components/Content.svelte';
  import Profile from './components/Profile.svelte';
  import Section from './components/Section.svelte';
</script>

<Profile />
<Section title="제목">
  <Content title="소제목">내용</Content>
</Section>

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
