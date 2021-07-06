<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';
  import Tags from './Tags.svelte';

  const projects = [
    {
      period: '2020. 01 ~ 2020. 02',
      title: '인간안면보고서 : 얼굴 이미지 분석 웹 앱',
      subtitle: '개인',
      tags: [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Redux',
        'redux-thunk',
        'styled-components',
        'ExpressJS',
        'Heroku',
      ],
      descs: [
        'Naver Clova API를 통해 닮은꼴 / 나이 / 성별 / 표정 분석 결과를 제공',
      ],
      url: 'https://human-face-report.herokuapp.com/',
    },
    {
      period: '2020. 03',
      title: '절대집중시간 : 반복 집중/휴식 웹 타이머',
      subtitle: '개인',
      tags: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
      descs: [
        '추가적인 라이브러리 및 번들러 없이 VanillaJS만 사용',
        'Custom Element + Shadow DOM를 통한 웹 컴포넌트 단위 개발',
      ],
      url: 'https://shubidumdu.github.io/hyper-focus-time/',
    },
    {
      period: '2020. 05 ~ 2021. 01',
      title: '밍글타운 : 쉐어하우스 플랫폼',
      subtitle: '(주)더몽',
      tags: [
        'TypeScript',
        'ReactJS',
        'react-router',
        'Redux',
        'redux-thunk',
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
        'AWS RDS',
        'AWS S3',
        'AWS EB',
        'AWS Route53',
        'AWS Cloudfront',
      ],
      descs: [
        '이용자의 위치를 기반으로 근처의 쉐어하우스들을 카드 리스트 형태로 제공',
        '카카오 지도 API를 활용한 위치 데이터 핸들링',
      ],
      url: 'https://www.mingletown.co.kr/',
    },
    {
      period: '2020. 11',
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
        'Jest',
        'testing-library/react',
        'AWS S3',
        'AWS Cloudfront',
        'AWS API Gateway',
        'AWS Lambda',
      ],
      descs: [
        'ETRI API를 활용한 Human Parsing',
        'Colormind API를 활용한 Color scheme generation',
        '새롭게 등장한 CSS 프레임워크인 Bulma를 경험해보고자 스택으로 활용',
      ],
      url: 'https://d1ys81f4zruh8t.cloudfront.net/',
    },
    {
      period: '2021. 01 ~ 2021. 02',
      title: '(주)더몽 웹사이트 리뉴얼',
      subtitle: '(주)더몽',
      tags: [
        'TypeScript',
        'React',
        'emotion',
        'AWS S3',
        'AWS Route53',
        'AWS Cloudfront',
      ],
      descs: [
        '기존에 워드프레스로 구현되어있던 자사 웹사이트를 모던한 형태로 리뉴얼',
        '별도로 동적인 컨텐츠를 요구하는 부분이 크게 없어 클라이언트만으로 처리',
      ],
      url: 'https://themong.kr/',
    },
    {
      period: '2021. 02 ~ 2021. 04',
      title: '시골하루 예약 웹사이트',
      subtitle: '(주)더몽',
      tags: [
        'TypeScript',
        'React',
        'react-router',
        'emotion',
        'material-ui',
        'expressJS',
        'postgreSQL',
        'AWS S3',
        'AWS Cloudfront',
        'serverless-framework',
      ],
      descs: [
        '부모와 아이가 함께하는 시골 한옥에서의 여가 서비스',
        '크라우드 펀딩을 통해 제공되는 리워드가 쿠폰 형태로 전달',
        '해당 쿠폰을 통해 여가 서비스를 예약하기 위한 임시 웹사이트',
        'serverless 프레임워크로 AWS 기반의 서버리스 아키텍처 구축 / 배포',
      ],
      url: 'https://d22p0rwzk85ukz.cloudfront.net/',
    },
    {
      period: '2021. 04',
      title: '데이브레이크랩 : 온라인 영어회화 새벽 스터디',
      subtitle: '(주)더몽',
      tags: [
        'JavaScript',
        'React',
        'react-router',
        'SASS/SCSS',
        'AWS S3',
        'AWS Cloudfront',
      ],
      descs: [
        '이른 새벽시간에 진행되는 온라인 영어회화 스터디 서비스',
        '랜딩 페이지 및 스터디 신청 페이지 작업',
      ],
      url: 'https://www.daybreaklab.com/',
    },
    {
      period: '2021. 05',
      title: "Conway's game of life in 3D",
      subtitle: '개인',
      tags: [
        'JavaScript',
        'WebAssembly',
        'Rust',
        'Three.js',
        'Webpack',
        'Github Pages',
      ],
      descs: [
        '개인적인 학습 목적으로 진행한 토이 프로젝트',
        '"콘웨이의 생명게임"을 Rust 기반의 Web Assembly로 구현',
        'Three.js를 통한 canvas 3D 그래픽 작업',
      ],
      url: 'https://shubidumdu.github.io/game-of-life-client/',
    },
  ];
</script>

<Section title="Projects">
  {#each projects as { period, title, subtitle, tags, descs, url }}
    <Content title={period}>
      <Article {title} {subtitle} {url}>
        <Tags {tags} />
        <List items={descs} />
      </Article>
    </Content>
  {/each}
</Section>
