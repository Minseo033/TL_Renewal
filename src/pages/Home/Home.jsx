import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  HardHat,
  MapPinned,
  Ruler,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { RECENT_PROJECTS } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import './Home.css';

const BUSINESS_LINKS = [
  { label: '주택', path: '/projects/housing', desc: '공동주택·주상복합' },
  { label: '업무시설', path: '/projects/office', desc: '오피스·R&D·데이터센터' },
  { label: '초고층', path: '/projects/highrise', desc: '고난도 구조체' },
  { label: '플랜트', path: '/projects/plant', desc: '산업·반도체 인프라' },
  { label: '판매시설', path: '/projects/retail', desc: '리테일·물류센터' },
  { label: '교육/의료', path: '/projects/education', desc: '학교·병원·공공시설' },
];

const FIELD_PROCESS = [
  { code: '01', title: '도면·물량 검토', text: '착공 전 구조, 공정, 물량 리스크를 먼저 정리합니다.' },
  { code: '02', title: '철근 배근', text: '구조 안전의 기준이 되는 철근 배근 품질을 관리합니다.' },
  { code: '03', title: '거푸집·동바리', text: '형상, 수직도, 지지 조건을 현장 기준에 맞춰 점검합니다.' },
  { code: '04', title: '콘크리트 타설', text: '타설 순서와 품질 상태를 공정 흐름 안에서 통제합니다.' },
  { code: '05', title: '품질·안전 검측', text: '위험성 평가와 검측을 반복 가능한 운영 체계로 연결합니다.' },
];

const CORE_STRENGTHS = [
  {
    icon: <HardHat size={22} />,
    title: '골조 공사 집중력',
    text: '철근콘크리트공사를 중심으로 프로젝트의 구조체 품질을 책임집니다.',
  },
  {
    icon: <Ruler size={22} />,
    title: '공법 적용 경험',
    text: 'RC, OPEN-CUT, TOP-DOWN, SRC 등 현장 조건에 맞는 공법 경험을 쌓아왔습니다.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: '품질·안전 체계',
    text: '품질·환경·안전보건 인증 체계를 바탕으로 현장 관리 기준을 지킵니다.',
  },
];

const TRUST_METRICS = [
  { label: '공사수주 데이터', value: `${RECENT_PROJECTS.length}건`, note: '주요 프로젝트' },
  { label: '도급순위', value: '55위', note: '철근콘크리트공사' },
  { label: '시공능력평가액', value: '978억', note: '2025년' },
  { label: '매출액', value: '700억', note: '2024년' },
];

const FEATURED_PROJECTS = RECENT_PROJECTS.slice(0, 4);
const FEATURED_NEWS = NEWS_DATA.slice(0, 3);
const MAX_CATEGORY_COUNT = Math.max(
  ...BUSINESS_LINKS.map((item) => RECENT_PROJECTS.filter((project) => project.categories?.includes(item.label)).length)
);

const CATEGORY_DASHBOARD = BUSINESS_LINKS.map((item) => ({
  ...item,
  count: RECENT_PROJECTS.filter((project) => project.categories?.includes(item.label)).length,
}));

const TOP_PARTNERS = Array.from(
  RECENT_PROJECTS.reduce((acc, project) => {
    if (project.partner && project.partner !== '.') {
      acc.set(project.partner, (acc.get(project.partner) || 0) + 1);
    }
    return acc;
  }, new Map())
)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6);

export default function Home() {
  return (
    <div className="home">
      <section className="hero renewal-hero">
        <div className="hero-bg">
          <video
            className="hero-video-bg"
            autoPlay
            muted
            loop
            playsInline
            poster="./assets/images/esg/esg-main.png"
          >
            <source src="./assets/videos/intro.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>

        <div className="hero-content renewal-hero-content">
          <div className="hero-copy">
            <span className="hero-badge">REINFORCED CONCRETE SPECIALIST</span>
            <h1 className="hero-title">
              건물의 겉보다 먼저,<br />
              골조의 기준을 세웁니다
            </h1>
            <p className="hero-subtitle">
              태일씨앤티는 철근콘크리트 구조체 공사를 중심으로 도면 검토부터 타설,
              검측, 안전관리까지 현장의 핵심 공정을 수행하는 전문 건설회사입니다.
            </p>
            <div className="hero-actions">
              <Link to="/projects/orders" className="btn btn-brand hero-btn-main">
                실적 대시보드 보기 <ArrowRight size={17} />
              </Link>
              <Link to="/technology/overview" className="btn btn-outline-white hero-btn-sub">
                공정 흐름 보기
              </Link>
            </div>
          </div>

          <div className="hero-command-panel" aria-label="태일씨앤티 현장 지휘판">
            <div className="command-panel-head">
              <span>SITE COMMAND BOARD</span>
              <strong>RC FRAME WORK</strong>
            </div>
            <div className="command-metric-large">
              <span>{RECENT_PROJECTS.length}</span>
              <p>등록 프로젝트</p>
            </div>
            <div className="command-process-mini">
              {FIELD_PROCESS.slice(0, 4).map((step) => (
                <div key={step.code}>
                  <span>{step.code}</span>
                  <p>{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="decision-strip" aria-label="빠른 이동">
        <Link to="/company/greeting">
          <Building2 size={20} />
          <span>어떤 회사인가요?</span>
        </Link>
        <Link to="/projects/orders">
          <BadgeCheck size={20} />
          <span>실적 대시보드</span>
        </Link>
        <Link to="/recruitment/jobs">
          <BriefcaseBusiness size={20} />
          <span>입사 지원 정보</span>
        </Link>
        <Link to="/pr/news">
          <Sparkles size={20} />
          <span>뉴스·사회공헌</span>
        </Link>
      </section>

      <section className="trust-metric-strip" aria-label="태일씨앤티 주요 지표">
        <div className="container">
          <div className="trust-metric-grid">
            {TRUST_METRICS.map((metric) => (
              <div className="trust-metric-item" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <p>{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section field-system-section">
        <div className="container">
          <div className="field-system-grid">
            <AnimatedSection direction="left">
              <div className="field-system-copy">
                <p className="section-eyebrow">WHAT TAEIL BUILDS</p>
                <h2 className="section-title">골조 공정으로 증명하는 태일씨앤티의 경쟁력</h2>
                <p className="section-subtitle">
                  태일씨앤티는 도면 검토, 철근 배근, 거푸집, 콘크리트 타설, 품질·안전 검측까지
                  구조체 공사의 핵심 공정을 책임 있게 수행합니다.
                </p>
                <div className="strength-list">
                  {CORE_STRENGTHS.map((item) => (
                    <div className="strength-item" key={item.title}>
                      <div className="strength-icon">{item.icon}</div>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={120}>
              <div className="field-process-board">
                {FIELD_PROCESS.map((step) => (
                  <div className="field-process-step" key={step.code}>
                    <span>{step.code}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <AnimatedSection className="dashboard-heading">
            <div>
              <p className="section-eyebrow">PROJECT DASHBOARD</p>
              <h2 className="section-title">공사수주 현황을 한눈에 보는 실적 지도</h2>
            </div>
            <Link to="/projects/orders" className="btn btn-primary">
              전체 실적 보기 <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <div className="portfolio-dashboard-grid">
            <AnimatedSection className="category-dashboard" direction="up">
              <div className="dashboard-card-head">
                <BarChart3 size={20} />
                <strong>공사 유형별 등록 실적</strong>
              </div>
              <div className="category-bars">
                {CATEGORY_DASHBOARD.map((item) => (
                  <Link to={item.path} className="category-bar-row" key={item.label}>
                    <span>{item.label}</span>
                    <div>
                      <i style={{ width: `${Math.max(12, (item.count / MAX_CATEGORY_COUNT) * 100)}%` }} />
                    </div>
                    <strong>{item.count}</strong>
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="partner-dashboard" delay={100} direction="up">
              <div className="dashboard-card-head">
                <Users size={20} />
                <strong>주요 시공사 협업 이력</strong>
              </div>
              <div className="partner-rank-list">
                {TOP_PARTNERS.map(([partner, count], index) => (
                  <div key={partner} className="partner-rank-item">
                    <span>0{index + 1}</span>
                    <p>{partner}</p>
                    <strong>{count}건</strong>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="featured-project-grid">
            {FEATURED_PROJECTS.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 80} direction="up">
                <Link to="/projects/orders" className="featured-project-card">
                  <img src={project.image} alt={project.name} />
                  <div className="featured-project-body">
                    <span>{project.categories?.[0] || 'Project'}</span>
                    <h3>{project.name}</h3>
                    <p><MapPinned size={14} />{project.address}</p>
                    <p><CalendarCheck size={14} />{project.period}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="mobile-scroll-cue" aria-hidden="true" />
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <AnimatedSection className="method-panel">
            <div className="method-copy">
              <p className="section-eyebrow">SITE METHOD</p>
              <h2>RC, OPEN-CUT, TOP-DOWN, SRC까지 현장 조건에 맞게 적용합니다</h2>
              <p>
                현장마다 다른 구조, 지반, 공정 조건에 맞춰 품질과 안전을 함께 고려한 시공 방식을 적용합니다.
              </p>
            </div>
            <div className="method-chip-grid">
              {['RC', 'OPEN-CUT', 'TOP-DOWN', 'SRC', '품질검측', '안전관리'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="recruit-focus-section">
        <div className="container">
          <AnimatedSection className="recruit-focus-card">
            <div>
              <span className="recruit-badge">FOR APPLICANTS</span>
              <h2>지원자가 자주 찾는 정보를 홈에서 바로 연결합니다</h2>
              <p>
                회사 정체성, 직무, 인사제도, 복리후생, FAQ까지 지원자가 궁금해하는 정보를 빠르게 확인할 수 있습니다.
              </p>
            </div>
            <div className="recruit-links">
              <Link to="/recruitment/jobs">직무소개</Link>
              <Link to="/recruitment/system">인사제도</Link>
              <Link to="/recruitment/benefits">복리후생</Link>
              <Link to="/recruitment/faq">채용FAQ</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          <div className="news-inner renewal-news-inner">
            <AnimatedSection direction="left" className="news-header">
              <p className="section-eyebrow">NEWS & CONTRIBUTION</p>
              <h2 className="section-title">수상과 사회공헌을 한 화면에서</h2>
              <p className="section-subtitle">
                안전 수상, 사회공헌, 현장 소식으로 태일씨앤티의 신뢰 활동을 전합니다.
              </p>
              <Link to="/pr/news" className="btn btn-outline news-more-btn">전체 보기</Link>
            </AnimatedSection>
            <div className="news-highlight-list">
              {FEATURED_NEWS.map((item, idx) => (
                <AnimatedSection key={item.id} delay={idx * 80} direction="right">
                  <Link to="/pr/news" className="news-highlight-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.date}</p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <div className="mobile-scroll-cue" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section media-section">
        <div className="container">
          <AnimatedSection className="media-panel">
            <video controls poster="./assets/images/esg/esg-main.png" preload="metadata">
              <source src="./assets/videos/intro.mp4" type="video/mp4" />
              브라우저가 동영상을 지원하지 않습니다.
            </video>
            <div className="media-summary">
              <strong>현장과 사람, 품질·안전을 영상으로 만나다</strong>
              <p>철근콘크리트 전문 시공 현장과 태일씨앤티가 지켜온 품질·안전의 기준을 확인할 수 있습니다.</p>
              <Link to="/company/greeting" className="btn btn-primary">
                회사소개로 이동 <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
