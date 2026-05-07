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

const TECH_PROCESS = [
  { step: '01', title: 'Pre-Con', desc: '도면, 물량, 공정 리스크를 착공 전에 정리합니다.' },
  { step: '02', title: 'Rebar', desc: '철근 배근 품질과 구조 안전 기준을 관리합니다.' },
  { step: '03', title: 'Form', desc: '거푸집, 동바리, 수직도 등 구조체 형상 조건을 점검합니다.' },
  { step: '04', title: 'Concrete', desc: '콘크리트 타설 순서와 현장 품질 상태를 관리합니다.' },
  { step: '05', title: 'Check', desc: '품질·안전 검측 결과를 다음 공정의 기준으로 연결합니다.' },
];

const METHOD_MATRIX = [
  { method: 'RC', desc: '철근콘크리트 구조체 공사의 기본 수행 역량' },
  { method: 'OPEN-CUT', desc: '지하 구조물과 굴착 공정에 대응하는 현장 경험' },
  { method: 'TOP-DOWN', desc: '복합 공정과 도심지 현장 조건에 대응하는 공법 경험' },
  { method: 'SRC', desc: '철골철근콘크리트 구조 공사 수행 경험' },
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
                <h3>계획부터 준공까지, 골조 공정의 흐름을 관리합니다.</h3>
                <p>
                  공정 계획, 철근 배근, 거푸집, 콘크리트 타설, 품질·안전 검측을 하나의 실행 체계로 연결합니다.
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

          <AnimatedSection delay={120} direction="up">
            <section className="tech-process-map">
              <div className="tech-process-heading">
                <p className="section-eyebrow">RC PROCESS MAP</p>
                <h3>철근콘크리트 공정을 한눈에 이해하는 기술 흐름</h3>
              </div>
              <div className="tech-process-rail">
                {TECH_PROCESS.map((item) => (
                  <article key={item.step} className="tech-process-node">
                    <span>{item.step}</span>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={140} direction="up">
            <section className="method-matrix">
              <div className="method-matrix-copy">
                <p className="section-eyebrow">CONSTRUCTION METHOD</p>
                <h3>현장 조건에 맞는 공법 경험</h3>
                <p>RC, OPEN-CUT, TOP-DOWN, SRC 등 현장 조건에 맞는 공법 경험을 바탕으로 구조체 시공 품질을 높입니다.</p>
              </div>
              <div className="method-matrix-grid">
                {METHOD_MATRIX.map((item) => (
                  <article key={item.method}>
                    <strong>{item.method}</strong>
                    <p>{item.desc}</p>
                  </article>
                ))}
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
