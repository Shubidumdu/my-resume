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
    {
      period: '2023. 05',
      title: 'AWS Certified Solutions Architect – Associate',
      sutitle: 'Amazon Web Services',
      descs: [
        'AWS 클라우드 기술을 활용한 솔루션 설계 및 구축',
      ],
      url: 'https://www.credly.com/badges/a3a007d3-9007-499d-9970-0b1396fff9d0/public_url'
    }
  ];
</script>

<Section title="Certificates">
  {#each certificates as { period, title, subtitle, descs, url }}
    <Content title={period}>
      <Article {title} {subtitle} {url} />
      <List items={descs} />
    </Content>
  {/each}
</Section>
