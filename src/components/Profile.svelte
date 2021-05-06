<script>
  import MdEmail from 'svelte-icons/md/MdEmail.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaStackOverflow from 'svelte-icons/fa/FaStackOverflow.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
  import Grid from './Grid.svelte';
  import Container from './Container.svelte';
</script>

<Container>
  <Grid>
    <div class="image">
      <img alt="서원교" src="https://www.w3schools.com/w3css/img_avatar3.png" />
    </div>
    <div class="info">
      <header class="name">
        <span class="ko">서원교</span>
        <span class="en">SEO WON GYO</span>
      </header>
      <section class="contact">
        <div class="item">
          <div class="icon"><MdEmail /></div>
          skaty4870@naver.com
        </div>
        <div class="item">
          <div class="icon"><FaGithub /></div>
          Shubidumdu
        </div>
        <div class="item">
          <div class="icon"><FaStackOverflow /></div>
          user:14672911
        </div>
        <div class="item">
          <div class="icon"><FaLinkedin /></div>
          서원교
        </div>
        <div class="item">
          <div class="icon"><FaInstagram /></div>
          wongyosuh
        </div>
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

      .item {
        display: flex;
        align-items: center;
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
