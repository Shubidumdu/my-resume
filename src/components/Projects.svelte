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
        'Naver Clova API 를 통해 닮은꼴 / 나이 / 성별 / 표정 분석 결과를 제공',
        'expressJS를 통한 프록시 서버 구성',
        'React Hooks + Redux + redux-thunk 기반의 상태 관리',
        'styled-components로 컴포넌트 스타일링',
        'Heroku를 통해 서버 배포',
      ],
      url: 'https://human-face-report.herokuapp.com/',
    },
    {
      period: '2020. 03',
      title: '절대집중시간 : 반복 집중/휴식 웹 타이머',
      subtitle: '개인',
      tags: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
      descs: [
        'VanillaJS만 사용',
        'Custom Element + Shadow DOM를 통한 웹 컴포넌트 단위 개발',
        'Github Pages를 통해 서버 배포',
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
        '이용자 위치 기반의 쉐어하우스 플랫폼',
        'React Hooks + Redux + redux-thunk 기반의 상태 관리',
        'react-router로 클라이언트 측 페이지 라우팅',
        'Ant Design과 styled-components를 연동하여 컴포넌트 스타일링',
        '카카오 지도 API를 활용한 위치 데이터 핸들링',
        '@hapi/joi를 통한 서버사이드 Validation',
        'passport를 통해 JWT 기반의 인증 구현',
        'AWS RDS로 postgreSQL 엔진 기반의 DB 서버 구축',
        'AWS Route53으로 커스텀 도메인 적용',
        'socket.io를 활용하여 게스트/호스트 간의 실시간 채팅 구현',
        'react-testing-library로 컴포넌트 테스트 / supertest로 API 테스트',
        'AWS S3 + CloudFront로 클라이언트 배포 및 CDN 적용 / AWS EB로 서버 배포',
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
        'AWS Route53',
        'AWS Cloudfront',
        'AWS API Gateway',
        'AWS Lambda',
      ],
      descs: [
        'ETRI API를 활용한 Human Parsing 진행',
        'Colormind API를 활용한 Color scheme generation 진행',
        'React Hooks + Redux + redux-thunk 기반의 상태 관리',
        'react-router로 클라이언트 측 페이지 라우팅',
        '새롭게 등장한 CSS 프레임워크인 Bulma를 경험해보고자 스택으로 활용',
        'react-testing-library로 컴포넌트 테스트',
        'AWS Lambda + API Gateway를 통한 프록시 서버 구축 및 배포',
        'AWS S3 + CloudFront로 클라이언트 배포 및 CDN 적용',
        'AWS Route53으로 커스텀 도메인 적용',
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
        '컴포넌트 스타일링을 위해 CSS-in-JS 라이브러리인 emotion 활용',
        'AWS S3 + CloudFront로 클라이언트 배포 및 CDN 적용',
        'AWS Route53으로 커스텀 도메인 적용',
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
        '엄마와 아이가 함께하는 시골 한옥에서의 여가 서비스',
        '크라우드 펀딩을 통해 제공되는 리워드가 쿠폰 형태로 전달',
        '해당 쿠폰을 통해 여가 서비스를 예약하기 위한 임시 웹사이트',
        'react-router로 클라이언트 측 페이지 라우팅',
        'AWS RDS로 postgreSQL 엔진 기반의 DB 서버 구축',
        'React Hooks를 통한 상태 관리',
        'material-ui와 emotion을 통한 컴포넌트 스타일링',
        'AWS S3 + CloudFront로 클라이언트 배포 및 CDN 적용',
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
        'SASS/SCSS를 통한 컴포넌트 스타일링',
        'react-router로 클라이언트 측 페이지 라우팅',
        'AWS S3 + CloudFront로 클라이언트 배포 및 CDN 적용',
      ],
      url: 'https://www.daybreaklab.com/',
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
