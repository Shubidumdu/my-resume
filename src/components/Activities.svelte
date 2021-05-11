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
      descs: [
        '대학교 별 교육 진행을 통한 웹 개발 입문',
        'HTML / CSS / JavaScript / Ruby / Ruby on Rails',
        '수 차례 해커톤 경험',
        '주로 프론트엔드 포지션을 담당',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails'],
    },
    {
      period: '2019. 07 ~ 2019. 12',
      title: '멋쟁이 사자처럼 크리에이티브',
      subtitle: '1기',
      descs: [
        'Adobe 디자인 툴에 관한 교육 이수',
        '그 중에서도 주로 Adobe XD를 통한 프로토타이핑에 대해 배웠음',
        '국민대 / 숙명여대 / 성균관대 연합의 Adobe XD 디자인 세미나 주최',
      ],
      tags: [
        'Adobe XD',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere',
      ],
    },
    {
      period: '2019. 07 ~ 2019. 12',
      title: 'D&A : 국민대학교 데이터 분석 학회',
      subtitle: 'ML Session',
      descs: [
        'R 기반의 머신러닝 교육 이수 및 과제 수행',
        '데이터 예측 컴피티션 참여',
      ],
      tags: [],
    },
  ];
</script>

<Section title="Activities">
  {#each activities as { period, title, subtitle, descs, tags }}
    <Content title={period}>
      <Article {title} {subtitle}>
        <List items={descs} />
      </Article>
    </Content>
  {/each}
</Section>
