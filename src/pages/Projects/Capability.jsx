import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Award, BarChart3, CheckCircle2, HardHat, ShieldCheck, TrendingUp } from 'lucide-react';
import './Projects.css';

const SUB_NAV = [
  { label: '공사수주 현황', path: '/projects/orders' },
  { label: '건설시공능력', path: '/projects/capability' },
  { label: '품질경영', path: '/projects/quality' },
  { label: '안전경영', path: '/projects/safety' },
  { label: '주택', path: '/projects/housing' },
  { label: '업무시설', path: '/projects/office' },
  { label: '교육/의료', path: '/projects/education' },
  { label: '플랜트', path: '/projects/plant' },
  { label: '초고층', path: '/projects/highrise' },
  { label: '판매시설', path: '/projects/retail' },
  { label: '기타', path: '/projects/others' },
];

const CAPABILITY_ITEMS = [
  { icon: <TrendingUp size={26} />, label: '철근콘크리트공사 도급순위', value: '55위', desc: '철근콘크리트공사 전문 역량 지표' },
  { icon: <Award size={26} />, label: '시공능력평가액', value: '978억', desc: '철근콘크리트공사 시공능력평가액' },
  { icon: <BarChart3 size={26} />, label: '동종업계 순위', value: '61위', desc: '동종업계 내 경쟁력 지표' },
];

const SYSTEM_ITEMS = [
  { icon: <CheckCircle2 size={24} />, title: 'KS Q ISO 9001:2015', desc: '품질경영시스템 기반의 현장 관리' },
  { icon: <ShieldCheck size={24} />, title: 'OHSAS 18001:2017', desc: '안전보건경영 체계 기반의 현장 운영' },
  { icon: <HardHat size={24} />, title: '철근콘크리트공사', desc: '주력 사업으로 축적한 현장 수행 역량' },
];

const PAGE_META = {
  capability: {
    label: '건설시공능력',
    eyebrow: 'CONSTRUCTION CAPABILITY',
    title: '건설시공능력',
    subtitle: '철근콘크리트공사 전문 역량과 주요 실적을 한눈에 확인할 수 있습니다.',
  },
  quality: {
    label: '품질경영',
    eyebrow: 'QUALITY MANAGEMENT',
    title: '품질경영',
    subtitle: '품질경영시스템과 현장 관리 원칙으로 안정적인 시공 품질을 만듭니다.',
  },
  safety: {
    label: '안전경영',
    eyebrow: 'SAFETY MANAGEMENT',
    title: '안전경영',
    subtitle: '오늘의 안전은 어제로부터, 내일의 안전은 오늘로부터라는 마음으로 안전 문화를 지킵니다.',
  },
};

export default function Capability({ mode = 'capability' }) {
  const meta = PAGE_META[mode] || PAGE_META.capability;

  return (
    <PageLayout
      title="사업실적"
      breadcrumb={[{ label: '사업실적', path: '/projects/orders' }, { label: meta.label }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">{meta.eyebrow}</p>
        <h2 className="section-title">{meta.title}</h2>
        <p className="section-subtitle">
          {meta.subtitle}
        </p>
      </AnimatedSection>

      <div className="capability-grid">
        {CAPABILITY_ITEMS.map((item, idx) => (
          <AnimatedSection key={item.label} delay={idx * 80} direction="up">
            <article className="capability-card">
              <div className="capability-icon">{item.icon}</div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.desc}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={140}>
        <section className="management-panel">
          <div className="management-panel-heading">
            <p className="section-eyebrow">QUALITY · SAFETY</p>
            <h3>현장의 기본을 지키는 관리 체계</h3>
          </div>
          <div className="management-list">
            {SYSTEM_ITEMS.map((item) => (
              <article key={item.title} className="management-item">
                <div className="management-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </PageLayout>
  );
}
