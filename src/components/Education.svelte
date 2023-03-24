<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';

  const activities = [
    {
      period: '2014. 03 ~ 2020. 02',
      title: '국민대학교',
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
