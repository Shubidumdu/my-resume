<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';

  const activities = [
    {
      period: '2011. 03 ~ 2014. 02',
      title: '영천고등학교',
      subtitle: '졸업',
      descs: [],
      url: 'http://school.gyo6.net/yeungchon/',
    },
    {
      period: '2014. 03 ~ 2020. 02',
      title: '국민대학교',
      subtitle: '학사 졸업 : 3.84 / 4.5',
      descs: ['빅데이터경영통계 심화전공', '소프트웨어 부전공'],
      url: 'https://www.kookmin.ac.kr/user/index.do',
    },
  ];
</script>

<Section title="Education">
  {#each activities as { period, title, subtitle, descs, url }}
    <Content title={period}>
      <Article {title} {subtitle} {url} />
      <List items={descs} />
    </Content>
  {/each}
</Section>
