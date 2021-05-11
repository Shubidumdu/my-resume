<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';
  import Tags from './Tags.svelte';

  const projects = [
    {
      period: '2020',
      title: '절대집중시간 : 반복 집중/휴식 웹 타이머',
      subtitle: '개인',
      tags: ['HTML', 'CSS', 'JavaScript'],
      descs: ['반복 집중 / 휴식 웹 타이머', 'VanillaJS 기반 개발'],
    },
    {
      period: '2020',
      title: '인간안면보고서 : 얼굴 이미지 분석 웹 앱',
      subtitle: '개인',
      tags: [
        'TypeScript',
        'ReactJS',
        'Node.js',
        'Redux',
        'redux-thunk',
        'styled-components',
        'ExpressJS',
        'Naver Clova API',
        'Heroku',
      ],
      descs: ['얼굴 이미지 분석 웹 앱'],
    },
    {
      period: '2020',
      title: '밍글타운 : 쉐어하우스 플랫폼',
      subtitle: '(주)더몽',
      tags: [
        'TypeScript',
        'ReactJS',
        'Redux',
        'styled-components',
        'NodeJS',
        'ExpressJS',
        'socket.io',
        'Jest',
        'testing-libary/react',
        'AWS S3',
        'AWS EB',
        'AWS Cloudfront',
      ],
      descs: ['(주)더몽에서 개발한 쉐어하우스 플랫폼'],
    },
    {
      period: '2020',
      title: '오깔라 : 옷 색깔 조합 추천 PWA',
      subtitle: '개인',
      tags: [
        'JavaScript',
        'ReactJS',
        'Node.js',
        'react-router',
        'redux',
        'redux-thunk',
        'styled-components',
        'bulma',
        'AWS S3',
        'AWS Cloudfront',
        'AWS API Gateway',
        'AWS Lambda',
      ],
      descs: ['얼굴 이미지 분석 웹 앱'],
    },
    {
      period: '2021',
      title: '(주)더몽 웹사이트 리뉴얼',
      subtitle: '(주)더몽',
      tags: [],
      descs: ['얼굴 이미지 분석 웹 앱'],
    },
    {
      period: '2021',
      title: '데이브레이크랩 : 온라인 영어회화 새벽 스터디',
      subtitle: '(주)더몽',
      tags: [],
      descs: [
        '이른 새벽시간에 진행되는 온라인 영어회화 스터디 서비스',
        '랜딩 페이지 및 임시적인 스터디 신청 페이지 개발 및 배포',
      ],
    },
    {
      period: '2021',
      title: '시골하루 임시 예약 웹사이트',
      subtitle: '(주)더몽',
      tags: [],
      descs: [
        '크라우드 펀딩에 따라 제공될 리워드를 임시적으로 쿠폰 형태로 전달',
        '쿠폰번호와 유저 정보를 매칭하여 여가 서비스를 예약 및 제공',
      ],
    },
  ];
</script>

<Section title="Projects">
  {#each projects as { period, title, subtitle, tags, descs }}
    <Content title={period}>
      <Article {title} {subtitle}>
        <Tags {tags} />
        <List items={descs} />
      </Article>
    </Content>
  {/each}
</Section>
