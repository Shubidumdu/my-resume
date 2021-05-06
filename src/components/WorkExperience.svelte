<script>
  import Content from './Content.svelte';
  import Section from './Section.svelte';
  import Article from './Article.svelte';
  import List from './List.svelte';
  const contents = [
    {
      period: '2020. 05 ~ 2021. 04',
      title: '(주)더몽',
      position: '웹 풀스택',
      items: [
        "쉐어하우스 플랫폼 '밍글타운' 개발",
        '자사 웹사이트 리뉴얼 개발',
        '신규 여가 서비스 예약 사이트 개발',
        "영어회화 스터디 '데이브레이크랩' 웹사이트 개발",
      ],
    },
    {
      period: '2019. 06 ~ 2019. 08',
      title: '애드캡슐소프트',
      position: 'UI 개발 인턴',
      items: ['롯데뮤지엄 웹 퍼블리싱', '코롱몰 웹 퍼블리싱', '코드 리뷰'],
    },
  ];
</script>

<Section title="Work Experience">
  {#each contents as { period, title, position, items }}
    <Content title={period}>
      <Article {title} subtitle={position}>
        <List {items} />
      </Article>
    </Content>
  {/each}
</Section>
