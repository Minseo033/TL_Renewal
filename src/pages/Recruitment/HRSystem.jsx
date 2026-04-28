import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { BarChart3, Coins, TrendingUp, GraduationCap } from 'lucide-react';
import './Recruitment.css';

const SYSTEM_IMGS = {
  '평가 제도': './assets/images/recruitment/evaluation.jpg',
  '보상 제도': './assets/images/recruitment/compensation.jpg',
};

const SUB_NAV = [
  { label: '직무소개', path: '/recruitment/jobs' },
  { label: '인사제도', path: '/recruitment/system' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const SYSTEMS = [
  { title: '평가 제도', icon: <BarChart3 size={40} strokeWidth={1} />, items: ['반기별 성과 평가 (KPI 기반)', '역량 평가 (기술·리더십·소통)', '360도 다면평가 도입', '공정하고 투명한 평가 기준'] },
  { title: '보상 제도', icon: <Coins size={40} strokeWidth={1} />, items: ['업계 상위 수준 급여 지급', '성과 인센티브 (연 2회)', '장기 근속 포상금', '우수 성과자 특별 보너스'] },
  { title: '승진 제도', icon: <TrendingUp size={40} strokeWidth={1} />, items: ['사원 → 대리 → 과장 → 차장 → 부장', '능력 중심 발탁 승진 가능', '연 1회 정기 승진심사', '임원 育成 로드맵'] },
  { title: '교육 제도', icon: <GraduationCap size={40} strokeWidth={1} />, items: ['신입 OJT 교육 (3개월)', '직무별 전문 교육 지원', '외부 자격증 취득 지원', 'BIM·스마트건설 교육'] },
];

export default function HRSystem() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '인사제도' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">HR SYSTEM</p>
        <h2 className="section-title">공정한 인사 제도</h2>
        <p className="section-subtitle">
          능력과 성과 중심의 공정한 인사 시스템으로 임직원의 성장을 지원합니다.
        </p>
      </AnimatedSection>

      <div className="hr-system-grid">
        {SYSTEMS.map((sys, idx) => (
          <AnimatedSection key={idx} delay={idx * 80} direction="up">
            <div className="hr-system-card">
              {SYSTEM_IMGS[sys.title] && (
                <div className="hr-system-card-img">
                  <img src={SYSTEM_IMGS[sys.title]} alt={sys.title}
                    onError={e => e.currentTarget.parentElement.style.display='none'} />
                </div>
              )}
              <div className="hr-system-icon">{sys.icon}</div>
              <h3 className="hr-system-title">{sys.title}</h3>
              <ul className="hr-system-list">
                {sys.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
