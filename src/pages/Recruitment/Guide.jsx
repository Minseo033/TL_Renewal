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
  { step: '01', title: '서류 전형', desc: '이력서 · 자기소개서 검토', icon: '📄', duration: '1-2주' },
  { step: '02', title: '1차 면접', desc: '직무 역량 · 실무 면접', icon: '💼', duration: '1주' },
  { step: '03', title: '인성 검사', desc: '온라인 인성·적성 평가', icon: '🧠', duration: '1일' },
  { step: '04', title: '2차 면접', desc: '임원 면접 · 최종 심층 평가', icon: '👔', duration: '1주' },
  { step: '05', title: '최종 합격', desc: '처우 협의 및 합격 통보', icon: '🎉', duration: '-' },
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
        <p className="section-subtitle">태일씨앤티의 채용 프로세스를 안내해 드립니다.</p>
      </AnimatedSection>

      <div className="process-flow">
        {PROCESS.map((p, idx) => (
          <AnimatedSection key={idx} delay={idx * 100} direction="up" className="process-step-wrap">
            <div className="process-step">
              <div className="process-step-icon">{p.icon}</div>
              <div className="process-step-num">{p.step}</div>
              <h3 className="process-step-title">{p.title}</h3>
              <p className="process-step-desc">{p.desc}</p>
              <span className="process-step-duration">{p.duration !== '-' ? `소요: ${p.duration}` : '최종합격'}</span>
            </div>
            {idx < PROCESS.length - 1 && <div className="process-arrow">→</div>}
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={300} className="guide-tips">
        <h3>지원 시 유의사항</h3>
        <ul>
          <li>📌 서류 제출은 이메일(recruit@taeilcnt.co.kr) 또는 온라인 채용 시스템을 이용해 주세요.</li>
          <li>📌 허위 기재 사항 발견 시 합격이 취소될 수 있습니다.</li>
          <li>📌 장애인·국가유공자는 관계 법령에 따라 우대합니다.</li>
          <li>📌 채용 과정에서 어려운 점이 있으면 인사팀(070-8897-0761)으로 문의해 주세요.</li>
        </ul>
      </AnimatedSection>
    </PageLayout>
  );
}
