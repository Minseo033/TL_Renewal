import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Banknote, BriefcaseBusiness, Coffee, Gift, Handshake, Home, ShieldCheck, Umbrella, Users } from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '직무소개', path: '/recruitment/jobs' },
  { label: '인사제도', path: '/recruitment/system' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const BENEFITS = [
  {
    icon: <ShieldCheck size={36} strokeWidth={1.2} />,
    title: '지원금·보험',
    category: '지원',
    items: ['각종 경조사 지원', '단체 상해보험', '본인학자금', '업무활동비 지급', '문화생활비', '선택적복리후생', '내일채움공제'],
  },
  {
    icon: <Banknote size={36} strokeWidth={1.2} />,
    title: '급여 제도',
    category: '보상',
    items: ['퇴직연금', '상여금', '장기근속자 포상', '우수사원포상', '성과급', '야근수당', '직책수당', '자격증수당', '4대 보험'],
  },
  {
    icon: <Gift size={36} strokeWidth={1.2} />,
    title: '선물',
    category: '복지',
    items: ['명절선물/귀향비', '창립일 선물', '생일선물/파티', '결혼기념일 선물', '웰컴키트 지급', '장기근속 선물'],
  },
  {
    icon: <Coffee size={36} strokeWidth={1.2} />,
    title: '교육·생활',
    category: '생활',
    items: ['신규 입사자 교육(OJT)', '자격증 취득 지원', '교육비 지원', '점심식사 제공', '저녁식사 제공', '간식·음료 제공', '사내동호회 운영'],
  },
  {
    icon: <BriefcaseBusiness size={36} strokeWidth={1.2} />,
    title: '근무 환경',
    category: '환경',
    items: ['휴게실', '회의실', '유니폼 지급', '노트북', '사무용품 지급'],
  },
  {
    icon: <Users size={36} strokeWidth={1.2} />,
    title: '조직 문화',
    category: '문화',
    items: ['노사협의회', '회식 강요 안함', '야근 강요 안함', '자유복장', '자유로운 연차 사용', '칼퇴근 보장'],
  },
  {
    icon: <Home size={36} strokeWidth={1.2} />,
    title: '출퇴근',
    category: '지원',
    items: ['사택 제공', '회사 차량 있음'],
  },
  {
    icon: <Umbrella size={36} strokeWidth={1.2} />,
    title: '리프레시',
    category: '휴가',
    items: ['연차', '여름휴가', '경조휴가제', '반차'],
  },
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
        <h2 className="section-title">복리후생 제도</h2>
        <p className="section-subtitle">
          임직원의 안정적인 근무와 생활을 돕는 복리후생 제도입니다.
        </p>
      </AnimatedSection>

      <div className="benefits-grid">
        {BENEFITS.map((b, idx) => (
          <AnimatedSection key={idx} delay={idx * 60} direction="up">
            <div className="benefit-card">
              <div className="benefit-icon">{b.icon}</div>
              <span className="benefit-category">{b.category}</span>
              <h3 className="benefit-title">{b.title}</h3>
              <ul className="benefit-list">
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
