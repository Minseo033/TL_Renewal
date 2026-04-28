import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { BookOpen, Newspaper, Cpu, HardHat, ShieldCheck, Ruler, FileCheck2, ArrowRight } from 'lucide-react';
import './Technology.css';

const SUB_NAV = [
  { label: '기술자료 안내', path: '/technology/overview' },
  { label: '기술자료 News', path: '/technology/news' },
];

const TECH_CARDS = [
  {
    icon: <Cpu size={28} />,
    title: 'BIM 기반 시공 검토',
    desc: '간섭 검토와 물량 산출을 사전에 정교화해 현장 리스크를 낮춥니다.',
  },
  {
    icon: <Ruler size={28} />,
    title: '철근콘크리트 정밀 시공',
    desc: '초고층·대형 현장 경험을 기반으로 구조 안전성과 품질을 확보합니다.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: '품질·안전 표준화',
    desc: 'ISO 인증 체계와 현장 체크리스트로 반복 가능한 품질을 만듭니다.',
  },
  {
    icon: <HardHat size={28} />,
    title: '현장 중심 개선 활동',
    desc: '협력사와 함께 공정, 안전, 생산성을 지속적으로 개선합니다.',
  },
];

const TECH_NEWS = [
  { tag: '품질', title: '콘크리트 타설 전·중·후 품질관리 체크포인트', date: '2026.03' },
  { tag: '안전', title: '동절기 골조공사 안전관리 핵심 기준', date: '2026.01' },
  { tag: 'BIM', title: '철근 배근 간섭 검토 프로세스 표준화', date: '2025.11' },
];

export default function Technology({ mode = 'overview' }) {
  const isNews = mode === 'news';

  return (
    <PageLayout
      title="기술자료"
      breadcrumb={[{ label: '기술자료', path: '/technology/overview' }, { label: isNews ? '기술자료 News' : '기술자료 안내' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">TECHNICAL RESOURCES</p>
        <h2 className="section-title">{isNews ? '기술자료 News' : '현장에서 검증된 기술 경쟁력'}</h2>
        <p className="section-subtitle">
          기존 홈페이지의 기술자료 메뉴를 정적 사이트 구조에 맞춰 재구성했습니다. 태일씨앤티의 철근콘크리트 시공 역량, 품질·안전 기준, BIM 기반 기술 개선 활동을 한눈에 보여줍니다.
        </p>
      </AnimatedSection>

      {!isNews ? (
        <>
          <AnimatedSection direction="up" delay={80}>
            <section className="tech-hero-card">
              <div>
                <span className="tech-kicker"><BookOpen size={16} /> TAEIL C&T METHOD</span>
                <h3>계획부터 준공까지, 기술로 현장을 안정화합니다.</h3>
                <p>
                  대형 건설사와의 협업 경험을 바탕으로 공정 계획, 품질 검측, 안전관리, 기술 개선을 하나의 실행 체계로 연결합니다.
                </p>
              </div>
              <div className="tech-hero-metrics" aria-label="기술 경쟁력 지표">
                <strong>30년+</strong>
                <span>철근콘크리트 전문 경험</span>
                <strong>ISO</strong>
                <span>품질·환경·안전보건 인증</span>
              </div>
            </section>
          </AnimatedSection>

          <div className="tech-card-grid">
            {TECH_CARDS.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 70} direction="up">
                <article className="tech-card">
                  <div className="tech-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </>
      ) : (
        <div className="tech-news-list">
          {TECH_NEWS.map((item, idx) => (
            <AnimatedSection key={item.title} delay={idx * 70} direction="up">
              <article className="tech-news-item">
                <span className="tech-news-tag"><Newspaper size={14} />{item.tag}</span>
                <h3>{item.title}</h3>
                <time>{item.date}</time>
                <FileCheck2 className="tech-news-mark" size={28} />
              </article>
            </AnimatedSection>
          ))}
        </div>
      )}

      <AnimatedSection delay={180}>
        <div className="tech-cta">
          <div>
            <strong>시공 역량과 품질·안전 체계가 궁금하신가요?</strong>
            <p>사업실적 메뉴에서 주요 수주 현황과 관리 체계를 함께 확인할 수 있습니다.</p>
          </div>
          <a href="#/projects/capability" className="btn btn-primary">시공능력 보기 <ArrowRight size={16} /></a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
