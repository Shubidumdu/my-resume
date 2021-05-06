<script>
  import Article from './Article.svelte';
  import Content from './Content.svelte';
  import List from './List.svelte';
  import Section from './Section.svelte';
  import Tags from './Tags.svelte';

  const projects = [
    {
      period: '2020',
      title: '밍글타운 : 쉐어하우스 플랫폼',
      subtitle: '(주)더몽',
      tags: [
        'TypeScript',
        'ReactJS',
        'Redux',
        'styled-components',
        'NodeJS',
        'ExpressJS',
        'socket.io',
        'Jest',
        'testing-libary/react',
        'AWS S3',
        'AWS EB',
        'AWS Cloudfront',
      ],
      descs: ['(주)더몽에서 개발한 쉐어하우스 플랫폼'],
    },
  ];
</script>

<Section title="Projects">
  {#each projects as { period, title, subtitle, tags, descs }}
    <Content title={period}>
      <Article {title} {subtitle}>
        <Tags {tags} />
        <List items={descs} />
      </Article>
    </Content>
  {/each}
</Section>
