<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';
  import Tags from './Tags.svelte';

  const activities = [
    {
      period: '2018. 03 ~ 2018. 12',
      title: '멋쟁이 사자처럼',
      subtitle: '6기',
      descs: ['대학교 별 교육 진행을 통한 웹 개발 입문', '수 차례 해커톤 경험'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    },
  ];
</script>

<Section title="Activities">
  {#each activities as { period, title, subtitle, descs, tags }}
    <Content title={period}>
      <Article {title} {subtitle}>
        <Tags {tags} />
        <List items={descs} />
      </Article>
    </Content>
  {/each}
</Section>
