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
    category: '철근콘크리트공사',
    icon: <HardHat size={22} />,
    jobs: [
      { title: '현장 시공 관리', desc: '철근콘크리트공사 수행과 현장 운영에 관련된 직무 영역입니다.' },
      { title: '공사 관리', desc: '공정, 자재, 협력사와의 현장 운영을 지원하는 직무 영역입니다.' },
    ],
  },
  {
    category: '품질·안전 관리',
    icon: <ShieldCheck size={22} />,
    jobs: [
      { title: '품질 관리', desc: '품질안전 관리 기준을 현장에 적용하는 직무 영역입니다.' },
      { title: '안전 관리', desc: '안전 제일주의와 현장 안전관리에 관련된 직무 영역입니다.' },
    ],
  },
  {
    category: '경영·지원',
    icon: <Briefcase size={22} />,
    jobs: [
      { title: '경영 지원', desc: '회사 운영과 현장 업무가 원활히 이어지도록 지원하는 직무 영역입니다.' },
      { title: '기술·관리 지원', desc: '자재기술 및 관리 혁신을 지원하는 직무 영역입니다.' },
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
          태일씨앤티는 책임과 성장, 정직과 소통, 더 나은 방식, 공동체 의식을 갖춘 인재를 기다립니다.
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
        <h3 className="jobs-section-title">주요 직무 영역</h3>
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
                  </div>
                  <span className="job-required">모집 공고 확인</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </AnimatedSection>
    </PageLayout>
  );
}
