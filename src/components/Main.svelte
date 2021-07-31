<script>
  import Activities from './Activities.svelte';
  import Awards from './Awards.svelte';
  import Certificates from './Certificates.svelte';
  import Education from './Education.svelte';
  import Objective from './Objective.svelte';
  import Profile from './Profile.svelte';
  import Projects from './Projects.svelte';
  import WorkExperiences from './WorkExperiences.svelte';
</script>

<main>
  <Profile />
  <Objective />
  <WorkExperiences />
  <Projects />
  <Activities />
  <Awards />
  <Certificates />
  <Education />
</main>

<style>
  main {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media print {
    main::before {
      content: "해당 이력서는 'https://shubidumdu.github.io/my-resume/'에서 더 원활하게 보실 수 있습니다.";
      text-align: center;
      color: #9c9ca9;
      margin-left: 1rem;
      margin-bottom: 2rem;
    }
  }
</style>
