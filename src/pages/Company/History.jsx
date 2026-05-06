import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Company.css';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '기구조직도', path: '/company/organization' },
  { label: '주거래 시공사', path: '/company/partners' },
  { label: '업·면허/인증', path: '/company/certifications' },
  { label: '찾아오시는 길', path: '/company/location' },
];

const HISTORY = [
  {
    year: '2025',
    items: [
      'Westin Seoul Parnas 리모델링공사 수주',
      '용인 Cluster 1기 OBL 수주',
      '다이소 세종 온라인센터 수주',
    ],
  },
  {
    year: '2023~2024',
    items: [
      '엔씨소프트 글로벌 RDI센터 수주',
      '한국일보용산사옥 신축공사 수주',
      '용인 Cluster 1기 공동구 수주',
    ],
  },
  {
    year: '2022',
    items: [
      '평택 P4 RC공사 1공구 수주',
      '판교 G2 업무시설 신축공사 수주',
      '비상교육 사옥 신축공사 수주',
    ],
  },
  {
    year: '2020',
    items: [
      '판교 알파돔 6-1블럭 수주',
      'P2-PJT 철근콘크리트 공사 수주',
      '브라이튼 여의도 복합시설 신축공사 수주',
    ],
  },
  {
    year: '2018',
    items: [
      '기술보증기금 벤처기업 인증',
      '국세청장 모범납세자 표창',
      '국토교통부장관 건설기능인의 날 표창',
    ],
  },
  {
    year: '2017',
    items: [
      'KS Q ISO 9001:2015 인증',
      'KS I ISO 14001:2015 인증',
      'OHSAS 18001:2017 인증',
    ],
  },
  {
    year: '2015',
    items: [
      '벤처기업 등록',
      '한라 안전부문 우수협력업체 선정',
    ],
  },
  {
    year: '2013',
    items: [
      '(주)태일씨앤티로 사명 변경',
      '김경수 대표이사 취임',
      'ISO 9001 인증 갱신',
    ],
  },
  {
    year: '1994',
    items: [
      '지인개발 설립',
      '철근콘크리트공사업 면허 양수',
    ],
  },
];

export default function History() {
  return (
    <PageLayout
      title="회사연혁"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '회사연혁' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection className="history-header">
        <p className="section-eyebrow">OUR HISTORY</p>
        <h2 className="section-title">30년의 역사, 무한한 도전</h2>
        <p className="section-subtitle">1994년 설립 이후 태일씨앤티가 걸어온 주요 이력입니다.</p>
      </AnimatedSection>

      <div className="history-timeline">
        {HISTORY.map((item, idx) => (
          <AnimatedSection
            key={idx}
            delay={idx * 80}
            direction={idx % 2 === 0 ? 'left' : 'right'}
            className={`timeline-row ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-year-wrap">
              <div className="timeline-year">{item.year}</div>
            </div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <ul>
                {item.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
        <div className="timeline-line" />
      </div>
    </PageLayout>
  );
}
