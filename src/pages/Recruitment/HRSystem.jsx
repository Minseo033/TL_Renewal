import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const imgPath = './assets/images/recruitment';

export default function HRSystem() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '인사제도' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <div className="hr-page-header">
          <p className="section-eyebrow">HR SYSTEM</p>
          <h2 className="section-title">인사제도</h2>
          <p className="section-subtitle">사람의 가치를 세우고, 함께 나아갈 내일을 건설합니다.</p>
        </div>
      </AnimatedSection>

      <div className="hr-content-container">
        <AnimatedSection delay={100} direction="up">
          <div className="hr-card-wrapper">
            <div className="hr-white-card">
              <div className="hr-card-side">
                <div className="title-deco-line"></div>
                <h3 className="card-side-title">Core<br/>Values</h3>
                <p className="card-side-sub">인재상</p>
              </div>
              <div className="hr-card-content">
                <img src={`${imgPath}/talent.jpg`} alt="인재상" className="hr-system-img" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} direction="up">
          <div className="hr-card-wrapper">
            <div className="hr-white-card">
              <div className="hr-card-side">
                <div className="title-deco-line"></div>
                <h3 className="card-side-title">Evaluation</h3>
                <p className="card-side-sub">평가제도</p>
              </div>
              <div className="hr-card-content">
                <img src={`${imgPath}/evaluation.jpg`} alt="평가제도" className="hr-system-img" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} direction="up">
          <div className="hr-card-wrapper">
            <div className="hr-white-card">
              <div className="hr-card-side">
                <div className="title-deco-line"></div>
                <h3 className="card-side-title">Rewards</h3>
                <p className="card-side-sub">보상 제도</p>
              </div>
              <div className="hr-card-content">
                <img src={`${imgPath}/compensation.jpg`} alt="보상제도" className="hr-system-img" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
