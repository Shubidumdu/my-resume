<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';
  import Tags from './Tags.svelte';

  const projects = [
    {
      period: '2020',
      title: '인간안면보고서 : 얼굴 이미지 분석 웹 앱',
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
        '업로드한 얼굴 이미지를 Naver Clova API를 통해 분석 후 닮은꼴, 나이, 성별, 표정에 대한 결과를 제공',
      ],
      url: 'https://github.com/Shubidumdu/human-face',
    },
    {
      period: '2020',
      title: '절대집중시간 : 반복 집중/휴식 웹 타이머',
      tags: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
      descs: [
        '꼬모도로 기법 적용을 위한 반복 집중/휴식 타이머',
        'Custom Element + Shadow DOM를 통한 웹 컴포넌트 단위 개발',
      ],
      url: 'https://github.com/Shubidumdu/hyper-focus-time',
    },
    {
      period: '2020',
      title: '오깔라 : 옷 색깔 조합 추천 PWA',
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
        'Colormind API를 활용한 Color scheme generation을 통해 이용자가 지정한 특정 색과 어울리는 5색 조합을 추천',
        'ETRI API를 활용한 Human Parsing으로, 입은 옷 색깔을 추출',
      ],
      url: 'https://github.com/Shubidumdu/5-colors',
    },
    {
      period: '2021',
      title: "Conway's game of life in 3D",
      tags: [
        'JavaScript',
        'WebAssembly',
        'Rust',
        'Three.js',
        'Webpack',
        'Github Pages',
      ],
      descs: [
        '"콘웨이의 생명게임"을 Rust 기반의 Web Assembly로 구현',
        'Three.js를 통한 canvas 3D 그래픽 작업',
      ],
      url: 'https://shubidumdu.github.io/game-of-life-client/',
    },
    {
      period: '2021',
      title: 'Astroach',
      tags: [
        'JavaScript',
        'Canvas API',
        'SASS',
        'ZzFXM',
        'Webpack',
        'Github Pages',
      ],
      descs: [
        'HTML5 Canvas API 기반의 4x4 타일 액션게임',
        '2021년도 JS 13K Games의 Desktop / Mobile 부문 참가',
      ],
      url: 'https://js13kgames.com/entries/astroach',
    },
    {
      period: '2022',
      title: 'Finn: the Little Collector',
      tags: [
        'TypeScript',
        'Canvas API',
        'SASS',
        'ZzFXM',
        'Webpack',
        'Github Pages',
      ],
      descs: [
        'HTML5 Canvas API 기반 "월리를 찾아라" 컨셉의 캐주얼 게임',
        '2022년도 JS 13K Games 32위 수상',
      ],
      url: 'https://js13kgames.com/entries/finn-the-little-collector',
    },
  ].reverse();
</script>

<Section title="Side Projects">
  {#each projects as { period, title, tags, descs, url }}
    <Content title={period}>
      <Article {title} {url}>
        <Tags {tags} />
        <List items={descs} />
      </Article>
    </Content>
  {/each}
</Section>
