import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { BarChart3, GraduationCap, HeartHandshake, MessageSquare } from 'lucide-react';
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
  { title: '인재 운영 방향', icon: <MessageSquare size={40} strokeWidth={1} />, items: ['책임과 성장', '정직과 소통', '더 나은 방식', '공동체 의식'] },
  { title: '성과 관리', icon: <BarChart3 size={40} strokeWidth={1} />, items: ['투명한 성과관리 지향', '전략적 인적자원관리 운영', '기본과 원칙에 충실한 조직 운영'] },
  { title: '교육 프로그램', icon: <GraduationCap size={40} strokeWidth={1} />, items: ['임직원 교육 프로그램 운영', '신규 입사자 교육(OJT)', '자격증 취득 지원', '교육비 지원'] },
  { title: '복리후생 연계', icon: <HeartHandshake size={40} strokeWidth={1} />, items: ['각종 경조사 지원', '단체 상해보험', '선택적복리후생', '자유로운 연차 사용'] },
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
        <h2 className="section-title">인사제도</h2>
        <p className="section-subtitle">
          책임과 성장, 정직과 소통, 더 나은 방식, 공동체 의식을 바탕으로 인재 성장을 지원합니다.
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
