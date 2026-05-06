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

export default function Organization() {
  return (
    <PageLayout
      title="기구조직도"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '기구조직도' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">ORGANIZATION</p>
        <h2 className="section-title">현장 실행 중심의 조직 체계</h2>
        <p className="section-subtitle">
          현장 실행과 경영 지원을 연결하는 태일씨앤티의 조직 체계입니다.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <div className="organization-visual">
          <img src="./assets/images/company/organization.jpg" alt="태일씨앤티 조직도" />
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
