<script>
  import Content from './Content.svelte';
  import Section from './Section.svelte';
  import Article from './Article.svelte';
  import List from './List.svelte';
  import Tags from './Tags.svelte';

  const contents = [
    {
      period: '2023. 11 ~',
      title: '마이다스아이티',
      position: '프론트엔드 개발',
      desc: [
        '온라인 사업 환경 구축을 위한 백오피스 내 기능 개발 및 이슈 대처'
      ],
      tags: [
        'TypeScript',
        'React',
        'NextJS',
        'React Query',
        'Jest',
        'Storybook',
        'Node.js',
        'Bitbucket',
      ],
      url: 'https://www.midasit.com/',
    },
    {
      period: '2021. 10 ~ 2023. 04',
      title: '그렙',
      position: '채용플랫폼개발팀 프론트엔드',
      desc: [
        '프로그래머스 커리어 플랫폼 유지 보수, 이슈 대처 및 신규 기능 개발',
      ],
      tags: [
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'Emotion',
        'React Query',
        'React Helmet',
        'Testing Library',
        'Jest',
        'MSW',
        'Storybook',
        'Playwright',
        'Webpack',
        'Babel',
        'Node.js',
        'Ruby on Rails',
        'Google Tag Manager',
        'Github Actions',
        'AWS Lambda',
        'AWS S3',
      ],
      url: 'https://www.grepp.co/',
    },
    {
      period: '2020. 05 ~ 2021. 05',
      title: '더몽',
      position: '웹 풀스택 개발',
      desc: [
        '각종 프로젝트 개발, 배포 및 유지보수 총괄',
        '자사 웹사이트 리뉴얼',
      ],
      tags: [
        'TypeScript',
        'React',
        'Redux',
        'Ant Design',
        'styled-components',
        'NodeJS',
        'expressJS',
        'socket.io',
        'Jest',
        'supertest',
        'testing-libary/react',
        'postgreSQL',
        '@hapi/joi',
        'passport',
        'AWS EC2',
        'AWS RDS',
        'AWS S3',
        'AWS EB',
        'AWS Route53',
        'AWS Cloudfront',
        'AWS Lambda'
      ],
      url: 'https://themong.kr/',
    },
    {
      period: '2019. 06 ~ 2019. 08',
      title: '애드캡슐소프트',
      position: 'UI 개발 인턴',
      desc: ['롯데뮤지엄 / 코롱몰 웹 퍼블리싱'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://www.adcapsule.kr/',
    },
  ];
</script>

<Section title="Work Experiences">
  {#each contents as { period, title, position, tags, desc, url }}
    <Content title={period}>
      <Article {title} subtitle={position} {url}>
        <Tags {tags} />
        <List items={desc} />
      </Article>
    </Content>
  {/each}
</Section>
