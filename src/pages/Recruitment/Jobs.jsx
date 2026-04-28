import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { TrendingUp, MessageSquare, Globe, Rocket, HardHat, ShieldCheck, Briefcase } from 'lucide-react';
import './Recruitment.css';

const talentImg = './assets/images/recruitment/talent.jpg';

const SUB_NAV = [
  { label: '직무소개', path: '/recruitment/jobs' },
  { label: '인사제도', path: '/recruitment/system' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const VALUES = [
  { icon: <TrendingUp size={36} strokeWidth={1.5} />, title: '책임과 성장', desc: '맡은 일에 책임을 다하며, 지속적인 자기 계발을 통해 함께 성장하는 인재', color: '#1B3A5C' },
  { icon: <MessageSquare size={36} strokeWidth={1.5} />, title: '정직과 소통', desc: '정직한 자세로 동료와의 원활한 소통을 통해 신뢰를 쌓아가는 인재', color: '#2E8B4A' },
  { icon: <Globe size={36} strokeWidth={1.5} />, title: '공동체 의식', desc: '개인의 성과를 넘어 조직과 사회의 발전을 위해 함께 노력하는 인재', color: '#C9A84C' },
  { icon: <Rocket size={36} strokeWidth={1.5} />, title: '더 나은 방식', desc: '현상에 안주하지 않고 더 좋은 방법을 끊임없이 탐구하는 창의적 인재', color: '#2A5580' },
];

const JOB_CATEGORIES = [
  {
    category: '현장 시공',
    icon: <HardHat size={22} />,
    jobs: [
      { title: '철근콘크리트 기술자', desc: '철근콘크리트 설계 및 현장 시공', required: '관련 학과 졸업 또는 경력 3년 이상' },
      { title: '현장 소장', desc: '공사 현장 전반 관리 및 운영', required: '건설 관련 학과 + 경력 7년 이상' },
    ],
  },
  {
    category: '안전·품질',
    icon: <ShieldCheck size={22} />,
    jobs: [
      { title: '안전관리자', desc: '건설 현장 안전 시스템 수립 및 관리', required: '산업안전기사 이상 + 경력 2년 이상' },
      { title: '품질관리자', desc: '시공 품질 검사 및 품질 관리 시스템 운영', required: '건축·토목 관련 자격증 + 경력 2년 이상' },
    ],
  },
  {
    category: '경영 지원',
    icon: <Briefcase size={22} />,
    jobs: [
      { title: '경영기획', desc: '사업 계획 수립 및 경영 성과 관리', required: '경영학 관련 학과 졸업 이상' },
      { title: 'IT/BIM 담당', desc: 'BIM 모델링 및 스마트 건설 기술 도입', required: 'BIM 관련 자격증 또는 경험자 우대' },
    ],
  },
];

export default function Jobs() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '직무소개' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">TALENT RECRUITMENT</p>
        <h2 className="section-title">태일씨앤티가 찾는 인재상</h2>
        <p className="section-subtitle">
          태일씨앤티와 함께 대한민국 건설의 미래를 만들어 갈 열정적인 인재를 기다립니다.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={100} direction="up">
        <div className="talent-img-banner">
          <img src={talentImg} alt="태일씨앤티 인재상" className="talent-banner-img"
            onError={e => e.currentTarget.style.display='none'} />
          <div className="talent-banner-overlay">
            <h3>함께 성장할 <span>인재</span>를 찾습니다</h3>
            <p>책임 · 정직 · 공동체 · 혁신</p>
          </div>
        </div>
      </AnimatedSection>

      <div className="talent-values-grid">
        {VALUES.map((v, idx) => (
          <AnimatedSection key={idx} delay={idx * 80} direction="up">
            <div className="talent-value-card" style={{ '--tv-color': v.color }}>
              <div className="talent-value-num">0{idx + 1}</div>
              <div className="talent-value-icon">{v.icon}</div>
              <h3 className="talent-value-title">{v.title}</h3>
              <p className="talent-value-desc">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={200} className="job-categories-section">
        <h3 className="jobs-section-title">모집 직무</h3>
        {JOB_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="job-category-block">
            <div className="job-category-header">
              <span className="job-cat-icon">{cat.icon}</span>
              <h4>{cat.category}</h4>
            </div>
            <div className="job-list">
              {cat.jobs.map((job, jobIdx) => (
                <div key={jobIdx} className="job-item">
                  <div className="job-item-info">
                    <h5 className="job-title">{job.title}</h5>
                    <p className="job-desc">{job.desc}</p>
                    <p className="job-required">
                      <span className="required-label">자격요건:</span> {job.required}
                    </p>
                  </div>
                  <button className="btn btn-outline job-apply-btn">지원하기</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </AnimatedSection>
    </PageLayout>
  );
}
