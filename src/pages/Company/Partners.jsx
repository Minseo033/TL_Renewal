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

const PARTNERS = [
  { name: '삼성물산', note: '공사 수주 이력' },
  { name: '삼성엔지니어링', note: '공사 수주 이력' },
  { name: '한라 / HL 디앤아이한라', note: '공사 수주 이력' },
  { name: '현대엔지니어링', note: '공사 수주 이력' },
  { name: 'GS건설', note: '공사 수주 이력' },
  { name: '대우건설', note: '공사 수주 이력' },
  { name: 'KCC건설', note: '공사 수주 이력' },
  { name: 'DL이앤씨 / DL건설', note: '공사 수주 이력' },
  { name: 'CJ대한통운 / CJ건설', note: '공사 수주 이력' },
  { name: 'SK에코플랜트', note: '공사 수주 이력' },
  { name: '삼성중공업', note: '공사 수주 이력' },
  { name: '신세계건설', note: '공사 수주 이력' },
];

export default function Partners() {
  return (
    <PageLayout
      title="주거래 시공사"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '주거래 시공사' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">OUR PARTNERS</p>
        <h2 className="section-title">대한민국 최고 건설사와 함께합니다</h2>
        <p className="section-subtitle">
          주요 건설사와 함께 축적한 프로젝트 수행 이력입니다.
        </p>
      </AnimatedSection>

      <div className="partners-grid-page">
        {PARTNERS.map((p, idx) => (
          <AnimatedSection key={idx} delay={idx * 50} className="partner-card-page">
            <div className="partner-tier">{p.note}</div>
            <div className="partner-name">{p.name}</div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
