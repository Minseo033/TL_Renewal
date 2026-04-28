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

const PARTNERS = [
  { name: '삼성물산', tier: '1군' },
  { name: 'GS건설', tier: '1군' },
  { name: '현대건설', tier: '1군' },
  { name: '대우건설', tier: '1군' },
  { name: '한라', tier: '1군' },
  { name: 'SK에코플랜트', tier: '1군' },
  { name: '롯데건설', tier: '1군' },
  { name: '포스코건설', tier: '1군' },
  { name: '현대산업개발', tier: '1군' },
  { name: '두산건설', tier: '협력사' },
  { name: '금호건설', tier: '협력사' },
  { name: '반도건설', tier: '협력사' },
  { name: 'DL이앤씨', tier: '1군' },
  { name: '코오롱글로벌', tier: '협력사' },
  { name: 'HDC현대산업개발', tier: '1군' },
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
          태일씨앤티는 국내 주요 건설사들과 오랜 신뢰 관계를 바탕으로 협력하고 있습니다.
        </p>
      </AnimatedSection>

      <div className="partners-grid-page">
        {PARTNERS.map((p, idx) => (
          <AnimatedSection key={idx} delay={idx * 50} className="partner-card-page">
            <div className="partner-tier">{p.tier}</div>
            <div className="partner-name">{p.name}</div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
