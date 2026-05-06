import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Award, Building2, FlaskConical, HardHat, Leaf, Medal, ShieldCheck, Wrench } from 'lucide-react';
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

const CERTS = [
  { title: 'KS Q ISO 9001:2015', sub: '품질경영시스템', org: '건연인증원', year: '2017', color: '#1B3A5C', icon: <Award size={36} strokeWidth={1.5} /> },
  { title: 'KS I ISO 14001:2015', sub: '환경경영시스템', org: '건연인증원', year: '2017', color: '#2E8B4A', icon: <Leaf size={36} strokeWidth={1.5} /> },
  { title: 'OHSAS 18001:2017', sub: '안전보건경영시스템', org: '건연인증원', year: '2017', color: '#C9A84C', icon: <ShieldCheck size={36} strokeWidth={1.5} /> },
];

const LICENSES = [
  { title: '철근콘크리트공사업', desc: '전문건설업 면허 / 주력 분야', icon: <HardHat size={22} /> },
  { title: '습식·방수공사업', desc: '전문건설업 면허', icon: <Building2 size={22} /> },
  { title: '구조물해체·비계공사업', desc: '전문건설업 면허', icon: <Wrench size={22} /> },
  { title: '기업부설연구소', desc: '2014년 인정 승인 이력', icon: <FlaskConical size={22} /> },
  { title: '벤처기업', desc: '2015년, 2018년 인증 이력', icon: <Medal size={22} /> },
  { title: 'MAIN-BIZ', desc: '경영혁신형 중소기업 인증 이력', icon: <Award size={22} /> },
];

export default function Certifications() {
  return (
    <PageLayout
      title="업·면허/인증"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '업·면허/인증' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">CERTIFICATIONS & LICENSES</p>
        <h2 className="section-title">국제 인증 및 면허 현황</h2>
        <p className="section-subtitle">
          전문 면허와 품질·환경·안전 인증을 바탕으로 체계적인 현장 관리를 이어갑니다.
        </p>
      </AnimatedSection>

      <div className="cert-grid">
        {CERTS.map((c, idx) => (
          <AnimatedSection key={idx} delay={idx * 100} direction="up">
            <div className="cert-card" style={{ '--cert-color': c.color }}>
              <div className="cert-icon-wrap">{c.icon}</div>
              <div className="cert-title">{c.title}</div>
              <div className="cert-sub">{c.sub}</div>
              <div className="cert-detail">
                <span>{c.org}</span>
                <span>취득: {c.year}년</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={200} className="license-section">
        <h3 className="license-section-title">면허 및 인증 이력</h3>
        <div className="license-grid">
          {LICENSES.map((l, idx) => (
            <div key={idx} className="license-item">
              <span className="license-icon">{l.icon}</span>
              <div>
                <strong>{l.title}</strong>
                <p>{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
