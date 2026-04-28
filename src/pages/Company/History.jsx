import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Company.css';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '주거래 시공사', path: '/company/partners' },
  { label: '업·면허/인증', path: '/company/certifications' },
  { label: '찾아오시는 길', path: '/company/location' },
];

const HISTORY = [
  {
    year: '2024',
    items: [
      '삼성물산 2024 우수 시공능력 수상',
      '철근콘크리트 전국 61위 달성',
      'BIM 스마트건설 본격 도입',
    ],
  },
  {
    year: '2023',
    items: [
      '창립 30주년 기념행사',
      'ISO 45001 안전보건경영시스템 인증',
      '수주액 역대 최대 달성',
    ],
  },
  {
    year: '2022',
    items: [
      '서울 서초 플랜트 프로젝트 착공',
      'K-BIM 우수기업 선정',
      '사회공헌 장학금 사업 시작',
    ],
  },
  {
    year: '2020',
    items: [
      'SK하이닉스 용인 클러스터 참여',
      '파트너사 15개사 확대',
      '안전경영 무재해 2000일 달성',
    ],
  },
  {
    year: '2018',
    items: [
      'ISO 14001 환경경영시스템 인증',
      '초고층 건물 시공 분야 진출',
      '직원 100명 돌파',
    ],
  },
  {
    year: '2015',
    items: [
      'ISO 9001 품질경영시스템 인증',
      '업무시설·교육시설 분야 확장',
    ],
  },
  {
    year: '2013',
    items: [
      '(주)태일씨앤티로 사명 변경',
      '철근콘크리트 전문 건설업 면허 취득',
      '본사 현 위치(서울 금천구) 이전',
    ],
  },
  {
    year: '1994',
    items: [
      '지인개발(주) 설립 (창업)',
      '건설업 등록',
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
        <p className="section-subtitle">1994년 창립 이래 대한민국 건설 산업과 함께 성장해 왔습니다</p>
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
