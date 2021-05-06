<script>
  import MdEmail from 'svelte-icons/md/MdEmail.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaStackOverflow from 'svelte-icons/fa/FaStackOverflow.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
  import Grid from './Grid.svelte';
  import Container from './Container.svelte';
  import profileImg from '../../assets/profile.jpg';

  const contacts = [
    {
      href: 'mailto:skaty4870@naver.com',
      icon: MdEmail,
      name: 'skaty4870@naver.com',
    },
    {
      href: 'https://github.com/Shubidumdu',
      icon: FaGithub,
      name: 'Shubidumdu',
    },
    {
      href: 'https://stackoverflow.com/users/14672911/won-gyo-seo',
      icon: FaStackOverflow,
      name: 'user:14672911',
    },
    {
      href:
        'https://www.linkedin.com/in/%EC%9B%90%EA%B5%90-%EC%84%9C-a9b7b01ba/',
      icon: FaLinkedin,
      name: '서원교',
    },
    {
      href: 'https://www.instagram.com/wongyosuh/',
      icon: FaInstagram,
      name: 'wongyosuh',
    },
  ];
</script>

<Container>
  <Grid>
    <div class="image">
      <img alt="서원교" src={profileImg} />
    </div>
    <div class="info">
      <header class="name">
        <span class="ko">서원교</span>
        <span class="en">SEO WON GYO</span>
      </header>
      <section class="contact">
        {#each contacts as { href, icon, name }}
          <div class="item">
            <a target="_blank" rel="noopener noreferrer" {href}>
              <div class="icon"><svelte:component this={icon} /></div>
              {name}
            </a>
          </div>
        {/each}
      </section>
    </div>
  </Grid>
</Container>

<style lang="scss">
  .image {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  .info {
    .name {
      .ko {
        font-size: 2rem;
      }

      .en {
        font-size: 1.25rem;
        margin-left: 1rem;
      }
    }

    .contact {
      margin-top: 2rem;

      .item,
      a {
        display: flex;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

        &:hover {
          color: $accent;
        }
      }

      .icon {
        width: 1.875rem;
        height: 1.875rem;
        margin-right: 0.875rem;
      }

      div + div {
        margin-top: 1rem;
      }
    }
  }
</style>
