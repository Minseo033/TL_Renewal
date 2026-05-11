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

export default function HRSystem() {
  // public 폴더 내 이미지 경로
  const imgPath = "/assets/images/recruitment";

  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '인사제도' }]}
      subNav={SUB_NAV}
    >
      <div className="hr-system-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-eyebrow">HUMAN RESOURCES</p>
            <h2 className="section-title">인사제도</h2>
            <p className="section-subtitle">사람의 가치를 세우고, 함께 나아갈 내일을 건설합니다.</p>
          </div>
        </AnimatedSection>

        {/* 1. 인재상 카드 */}
        <AnimatedSection delay={100} direction="up">
          <div className="hr-card-wrapper">
            <div className="hr-section-row">
              <div className="hr-sticky-title">
                <div className="side-bar"></div>
                <h3>Core<br />Values</h3>
                <span className="side-eng">우리가 찾는 인재</span>
              </div>
              <div className="hr-content-img-wrapper">
                <img src={`${imgPath}/talent.jpg`} alt="인재상" className="hr-system-img" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2. 평가제도 카드 */}
        <AnimatedSection delay={200} direction="up">
          <div className="hr-card-wrapper">
            <div className="hr-section-row">
              <div className="hr-sticky-title">
                <div className="side-bar"></div>
                <h3>Evaluation</h3>
                <span className="side-eng">공정한 성과 관리</span>
              </div>
              <div className="hr-content-img-wrapper">
                <img src={`${imgPath}/evaluation.jpg`} alt="평가제도" className="hr-system-img" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. 보상제도 카드 */}
        <AnimatedSection delay={300} direction="up">
          <div className="hr-card-wrapper">
            <div className="hr-section-row">
              <div className="hr-sticky-title">
                <div className="side-bar"></div>
                <h3>Rewards</h3>
                <span className="side-eng">최고의 대우와 보상</span>
              </div>
              <div className="hr-content-img-wrapper">
                <img src={`${imgPath}/compensation.jpg`} alt="보상제도" className="hr-system-img" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}