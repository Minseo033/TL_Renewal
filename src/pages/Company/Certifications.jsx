import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Award, Leaf, ShieldCheck, HardHat, Paintbrush, Wrench, Laptop, BarChart2, ClipboardList } from 'lucide-react';
import './Company.css';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '주거래 시공사', path: '/company/partners' },
  { label: '업·면허/인증', path: '/company/certifications' },
  { label: '찾아오시는 길', path: '/company/location' },
];

const CERTS = [
  { title: 'ISO 9001', sub: '품질경영시스템', org: '국제표준화기구', year: '2015', color: '#1B3A5C', icon: <Award size={36} strokeWidth={1.5} /> },
  { title: 'ISO 14001', sub: '환경경영시스템', org: '국제표준화기구', year: '2018', color: '#2E8B4A', icon: <Leaf size={36} strokeWidth={1.5} /> },
  { title: 'ISO 45001', sub: '안전보건경영시스템', org: '국제표준화기구', year: '2023', color: '#C9A84C', icon: <ShieldCheck size={36} strokeWidth={1.5} /> },
];

const LICENSES = [
  { title: '철근콘크리트공사업', desc: '전문건설업 면허 (주력 분야)', icon: <HardHat size={22} /> },
  { title: '도장·방수공사업', desc: '전문건설업 면허', icon: <Paintbrush size={22} /> },
  { title: '구조물해체·비계공사업', desc: '전문건설업 면허', icon: <Wrench size={22} /> },
  { title: 'K-BIM 우수기업', desc: '스마트건설 기술 인증', icon: <Laptop size={22} /> },
  { title: '철근콘크리트 전국 61위', desc: '2024년 시공능력평가', icon: <BarChart2 size={22} /> },
  { title: '비계 전국 216위', desc: '2024년 시공능력평가', icon: <ClipboardList size={22} /> },
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
          엄격한 국제 인증과 전문 면허를 통해 품질·환경·안전을 체계적으로 관리합니다.
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
        <h3 className="license-section-title">면허 및 실적</h3>
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
