<script>
  import Activities from './Activities.svelte';
  import Awards from './Awards.svelte';
  import Certificates from './Certificates.svelte';
  import Education from './Education.svelte';
  import Profile from './Profile.svelte';
  import Projects from './Projects.svelte';
  import WorkExperiences from './WorkExperiences.svelte';
</script>

<main>
  <Profile />
  <WorkExperiences />
  <Projects />
  <Activities />
  <Certificates />
  <Awards />
  <Education />
</main>

<style>
  main {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
</style>
