import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { BookOpen, Newspaper, HardHat, ShieldCheck, Ruler, FileCheck2, ArrowRight } from 'lucide-react';
import './Technology.css';

const SUB_NAV = [
  { label: '기술자료 안내', path: '/technology/overview' },
  { label: '기술자료 News', path: '/technology/news' },
];

const TECH_CARDS = [
  {
    icon: <HardHat size={28} />,
    title: '철근콘크리트공사',
    desc: '철근콘크리트공사를 중심으로 구조체 시공 역량을 축적해 왔습니다.',
  },
  {
    icon: <Ruler size={28} />,
    title: '현장 공법 이력',
    desc: 'RC, OPEN-CUT, TOP-DOWN, SRC 등 다양한 공법 경험을 현장에 적용합니다.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: '품질·환경·안전 인증',
    desc: '품질·환경·안전보건 인증 체계를 바탕으로 현장 관리 기준을 강화합니다.',
  },
  {
    icon: <HardHat size={28} />,
    title: '자재기술 및 관리 혁신',
    desc: '자재기술과 현장 관리 혁신을 통해 더 안정적인 시공을 추구합니다.',
  },
];

const TECH_NEWS = [
  { tag: '안내', title: '기술자료 업데이트 준비 중', date: '업데이트 예정' },
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
        <h2 className="section-title">{isNews ? '기술자료 News' : '철근콘크리트 기술 역량'}</h2>
        <p className="section-subtitle">
          철근콘크리트공사, 현장 공법, 품질·안전 인증을 중심으로 태일씨앤티의 기술 경쟁력을 소개합니다.
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
                  공정 계획, 품질 검측, 안전관리, 공법 이력을 하나의 실행 체계로 연결합니다.
                </p>
              </div>
              <div className="tech-hero-metrics" aria-label="기술 경쟁력 지표">
                <strong>30년+</strong>
                <span>철근콘크리트 전문 경험</span>
                <strong>ISO</strong>
                <span>품질·환경·안전보건 인증 이력</span>
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
