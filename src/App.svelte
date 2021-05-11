<script>
  import 'normalize.css';
  import Activities from './components/Activities.svelte';
  import Education from './components/Education.svelte';
  import Objective from './components/Objective.svelte';
  import Profile from './components/Profile.svelte';
  import Projects from './components/Projects.svelte';
  import WorkExperiences from './components/WorkExperiences.svelte';
</script>

<Profile />
<Objective />
<WorkExperiences />
<Projects />
<Activities />
<Education />

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
    background: $main;
  }
</style>
