<script>
  import Content from './Content.svelte';
  import Section from './Section.svelte';
  import Article from './Article.svelte';
  import List from './List.svelte';
  const contents = [
    {
      period: '2021. 10 ~',
      title: "그렙",
      position: '프론트엔드 개발',
      desc: [
        '프로그래머스 채용플랫폼팀 프론트엔드 개발'
      ],
      url: 'https://www.grepp.co/'
    },
    {
      period: '2020. 05 ~ 2021. 05',
      title: '더몽',
      position: '웹 풀스택 개발',
      desc: [
        '1인 개발자로서 프로젝트 개발, 배포 및 유지보수를 총괄적으로 담당',
        "쉐어하우스 플랫폼 '밍글타운' 개발",
        '자사 웹사이트 리뉴얼',
        "신규 여가 서비스 '시골하루' 예약 사이트 개발",
        "영어회화 스터디 '데이브레이크랩' 웹사이트 개발",
      ],
      url: 'https://themong.kr/',
    },
    {
      period: '2019. 06 ~ 2019. 08',
      title: '애드캡슐소프트',
      position: 'UI 개발 인턴',
      desc: ['롯데뮤지엄 웹 퍼블리싱', '코롱몰 웹 퍼블리싱'],
      url: 'https://www.adcapsule.kr/',
    },
  ];
</script>

<Section title="Work Experiences">
  {#each contents as { period, title, position, desc, url }}
    <Content title={period}>
      <Article {title} subtitle={position} {url}>
        <List items={desc} />
      </Article>
    </Content>
  {/each}
</Section>
