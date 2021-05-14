<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';

  const certificates = [
    {
      period: '2016. 01',
      title: 'SQL 개발자 (SQLD)',
      subtitle: '한국데이터베이스진흥원',
      descs: ['데이터 모델링 및 SQL 기본'],
    },
    {
      period: '2019. 12',
      title: 'IPAT(지식재산능력시험) 3급',
      subtitle: '한국발명진흥회',
      descs: [
        '특허·실용신안·상표·디자인·저작권 등 지식재산 관련 자격증',
        '국가공인민간자격 취득',
      ],
    },
  ];
</script>

<Section title="Certificates">
  {#each certificates as { period, title, subtitle, descs }}
    <Content title={period}>
      <Article {title} {subtitle} />
      <List items={descs} />
    </Content>
  {/each}
</Section>
