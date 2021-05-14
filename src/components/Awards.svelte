<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';

  const awards = [
    {
      period: '2019. 10',
      title: '19년 삼성SDS Brightics Academy 공모전',
      subtitle: '데이터사업기획부문 3위',
      descs: [
        'MBTI 데이터 분석을 기반으로 한 서비스 사업 기획',
        '서비스 프로토타입 구현하는 포지션 맡았음',
      ],
    },
  ];
</script>

<Section title="Awards">
  {#each awards as { period, title, subtitle, descs }}
    <Content title={period}>
      <Article {title} {subtitle} />
      <List items={descs} />
    </Content>
  {/each}
</Section>
