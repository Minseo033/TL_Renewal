import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Recruitment.css';

const SUB_NAV = [
  { label: '직무소개', path: '/recruitment/jobs' },
  { label: '인사제도', path: '/recruitment/system' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const PROCESS = [
  { step: '01', title: '채용 공고 확인', desc: '모집 공고에서 직무와 지원 조건을 확인합니다.', icon: '01' },
  { step: '02', title: '지원 서류 제출', desc: '공고에서 안내하는 방식에 따라 이력서와 관련 서류를 제출합니다.', icon: '02' },
  { step: '03', title: '전형 진행', desc: '직무 적합성과 현장 이해도를 중심으로 전형을 진행합니다.', icon: '03' },
  { step: '04', title: '결과 안내', desc: '전형 결과와 입사 관련 사항을 개별 안내합니다.', icon: '04' },
];

export default function Guide() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '채용가이드' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">RECRUITMENT GUIDE</p>
        <h2 className="section-title">채용 절차 안내</h2>
        <p className="section-subtitle">지원자는 모집 공고에 안내된 절차에 따라 전형을 진행합니다.</p>
      </AnimatedSection>

      <div className="process-flow">
        {PROCESS.map((p, idx) => (
          <AnimatedSection key={idx} delay={idx * 100} direction="up" className="process-step-wrap">
            <div className="process-step">
              <div className="process-step-icon">{p.icon}</div>
              <div className="process-step-num">{p.step}</div>
              <h3 className="process-step-title">{p.title}</h3>
              <p className="process-step-desc">{p.desc}</p>
              <span className="process-step-duration">진행 단계</span>
            </div>
            {idx < PROCESS.length - 1 && <div className="process-arrow">→</div>}
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={300} className="guide-tips">
        <h3>지원 시 유의사항</h3>
        <ul>
          <li>서류 제출 방식과 제출처는 채용 공고의 안내를 따라 주세요.</li>
          <li>허위 기재 사항 발견 시 합격이 취소될 수 있습니다.</li>
          <li>채용 관련 문의는 대표번호 070-8897-0761로 연락해 주세요.</li>
        </ul>
      </AnimatedSection>
    </PageLayout>
  );
}
