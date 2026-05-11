import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { 
  GraduationCap, 
  PiggyBank, 
  HeartHandshake, 
  Palmtree, 
  Plane, 
  Users, 
  Sparkles, 
  Clock, 
  Gift 
} from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const BENEFITS = [
  {
    icon: <GraduationCap size={36} strokeWidth={1.2} />,
    title: '자녀학자금 및 교육지원',
    category: '성장',
    items: [
      '자녀 학자금 지원',
      '아주대 경영대학원 교육 지원',
      '직무/직급/리더십 교육 및 워크샵 지원',
      '건설기술인 연회비 및 승급교육 일체 지원'
    ],
  },
  {
    icon: <PiggyBank size={36} strokeWidth={1.2} />,
    title: '연금 및 상조',
    category: '안정',
    items: ['퇴직연금(DB형) 가입', '태일 상조회 운영'],
  },
  {
    icon: <Palmtree size={36} strokeWidth={1.2} />,
    title: '휴양시설 운영',
    category: '여가',
    items: ['전국 소노호텔앤리조트(구 대명리조트) 회원권 보유'],
  },
  {
    icon: <Plane size={36} strokeWidth={1.2} />,
    title: '해외연수',
    category: '보상',
    items: ['태일인 연수', '우수사원 연수', '최우수현장 연수'],
  },
  {
    icon: <Users size={36} strokeWidth={1.2} />,
    title: '사내동아리 지원',
    category: '문화',
    items: ['직급별 모임 지원', '동아리 활동 지원'],
  },
  {
    icon: <Sparkles size={36} strokeWidth={1.2} />,
    title: '청년지원',
    category: '지원',
    items: ['청년재직자 내일채움공제 운영'],
  },
  {
    icon: <Clock size={36} strokeWidth={1.2} />,
    title: '연차제도',
    category: '휴가',
    items: ['연차 운영', '반차 / 반반차 제도 운영'],
  },
  {
    icon: <Gift size={36} strokeWidth={1.2} />,
    title: '기념품 지급',
    category: '복지',
    items: ['근로자의 날 기념품', '창립기념일 선물'],
  },
];

export default function Benefits() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '복리후생' }]}
      subNav={SUB_NAV}
    >
      <div className="benefits-container">
        <AnimatedSection>
          <p className="section-eyebrow">EMPLOYEE BENEFITS</p>
          <h2 className="section-title">복리후생 제도</h2>
          <p className="section-subtitle single-line">
            태일씨앤티는 임직원의 안정적인 삶과 자기계발을 위해 다양한 복지 프로그램을 운영하고 있습니다.
          </p>
        </AnimatedSection>

        <div className="benefits-grid">
          {BENEFITS.map((b, idx) => (
            <AnimatedSection key={idx} delay={idx * 60} direction="up">
              <div className="benefit-card">
                <span className="benefit-category">{b.category}</span>
                <div className="benefit-header">
                  <div className="benefit-icon">{b.icon}</div>
                  <h3 className="benefit-title">{b.title}</h3>
                </div>
                <ul className="benefit-list">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
