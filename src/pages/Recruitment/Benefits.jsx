import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { GraduationCap, HeartPulse, Coins, Handshake, Dumbbell, BookOpen, Gift, Clock, Plane } from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '직무소개', path: '/recruitment/jobs' },
  { label: '인사제도', path: '/recruitment/system' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const BENEFITS = [
  { icon: <GraduationCap size={40} strokeWidth={1} />, title: '자녀 장학금', desc: '임직원 자녀 교육비 지원 (초·중·고·대학교)', category: '교육' },
  { icon: <HeartPulse size={40} strokeWidth={1} />, title: '건강검진', desc: '연 1회 전 임직원 종합건강검진 지원', category: '건강' },
  { icon: <Coins size={40} strokeWidth={1} />, title: '성과 인센티브', desc: '반기별 성과에 따른 인센티브 지급', category: '보상' },
  { icon: <Handshake size={40} strokeWidth={1} />, title: '경조사 지원', desc: '결혼·출산·상조 등 경조금 및 경조휴가 지원', category: '복지' },
  { icon: <Dumbbell size={40} strokeWidth={1} />, title: '동호회 지원', desc: '사내 동호회 활동비 지원 (스포츠, 문화 등)', category: '문화' },
  { icon: <BookOpen size={40} strokeWidth={1} />, title: '자기계발 지원', desc: '외부교육·자격증 취득비용 전액 지원', category: '교육' },
  { icon: <Gift size={40} strokeWidth={1} />, title: '명절 선물', desc: '설·추석 명절 선물 및 상여금 지급', category: '복지' },
  { icon: <Clock size={40} strokeWidth={1} />, title: '유연근무제', desc: '탄력근무시간제 도입으로 일·가정 균형 지원', category: '근무' },
  { icon: <Plane size={40} strokeWidth={1} />, title: '장기 근속 포상', desc: '5·10·15·20년 장기근속자 해외여행 또는 포상금 지급', category: '보상' },
];

export default function Benefits() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '복리후생' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">EMPLOYEE BENEFITS</p>
        <h2 className="section-title">풍성한 복리후생 제도</h2>
        <p className="section-subtitle">
          태일씨앤티는 임직원의 행복한 삶을 위해 다양한 복리후생 제도를 운영합니다.
        </p>
      </AnimatedSection>

      <div className="benefits-grid">
        {BENEFITS.map((b, idx) => (
          <AnimatedSection key={idx} delay={idx * 60} direction="up">
            <div className="benefit-card">
              <div className="benefit-icon">{b.icon}</div>
              <span className="benefit-category">{b.category}</span>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
