import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Award, BarChart3, CheckCircle2, HardHat, ShieldCheck, TrendingUp } from 'lucide-react';
import './Projects.css';

const SUB_NAV = [
  { label: '공사수주 현황', path: '/projects/orders' },
  { label: '시공능력/품질·안전', path: '/projects/capability' },
  { label: '주택', path: '/projects/housing' },
  { label: '업무시설', path: '/projects/office' },
  { label: '교육/의료', path: '/projects/education' },
  { label: '플랜트', path: '/projects/plant' },
  { label: '초고층', path: '/projects/highrise' },
  { label: '판매시설', path: '/projects/retail' },
  { label: '기타', path: '/projects/others' },
];

const CAPABILITY_ITEMS = [
  { icon: <TrendingUp size={26} />, label: '철근콘크리트 전문 순위', value: '전국 61위', desc: '전문건설 시공능력 평가 기준의 신뢰도 강조' },
  { icon: <Award size={26} />, label: '주요 원청 파트너', value: '25개사+', desc: '삼성물산, 현대건설, GS건설 등 대형 건설사 협업' },
  { icon: <BarChart3 size={26} />, label: '프로젝트 포트폴리오', value: '85건+', desc: '주택·업무·플랜트·초고층 등 다양한 수행 경험' },
];

const SYSTEM_ITEMS = [
  { icon: <CheckCircle2 size={24} />, title: '품질경영', desc: '착공 전 품질 계획, 주요 공정 검측, 하자 예방 점검을 표준 프로세스로 운영합니다.' },
  { icon: <ShieldCheck size={24} />, title: '안전경영', desc: '위험성 평가와 현장 교육, 일일 안전점검으로 중대재해 예방 문화를 정착시킵니다.' },
  { icon: <HardHat size={24} />, title: '현장 실행력', desc: '전문 인력과 협력사 네트워크를 기반으로 공정 준수와 현장 대응 속도를 높입니다.' },
];

export default function Capability() {
  return (
    <PageLayout
      title="사업실적"
      breadcrumb={[{ label: '사업실적', path: '/projects/orders' }, { label: '시공능력/품질·안전' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">CAPABILITY & MANAGEMENT</p>
        <h2 className="section-title">시공능력과 품질·안전경영</h2>
        <p className="section-subtitle">
          기존 홈페이지의 시공능력, 품질경영, 안전경영 메뉴를 하나의 정적 페이지로 재구성해 사업 신뢰도를 빠르게 확인할 수 있도록 정리했습니다.
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
            {SYSTEM_ITEMS.map(item => (
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
