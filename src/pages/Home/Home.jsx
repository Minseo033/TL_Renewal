import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  HardHat,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { RECENT_PROJECTS } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import './Home.css';

const CORE_STRENGTHS = [
  {
    icon: <HardHat size={24} />,
    title: '철근콘크리트 전문 시공',
    text: '주택, 업무시설, 초고층, 플랜트까지 구조체 공사의 핵심 공정을 수행합니다.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: '품질·안전 실행 체계',
    text: '위험성 평가, 검측 기준, ISO 인증 체계를 현장 운영 언어로 연결합니다.',
  },
  {
    icon: <Users size={24} />,
    title: '대형 건설사 파트너십',
    text: '삼성물산, GS건설, KCC건설, SK에코플랜트 등 주요 건설사와 함께 프로젝트를 수행해 왔습니다.',
  },
];

const BUSINESS_LINKS = [
  { label: '주택', path: '/projects/housing', count: '공동주택·주상복합' },
  { label: '업무시설', path: '/projects/office', count: '오피스·R&D·데이터센터' },
  { label: '초고층', path: '/projects/highrise', count: '고난도 구조체' },
  { label: '플랜트', path: '/projects/plant', count: '산업·반도체 인프라' },
  { label: '판매시설', path: '/projects/retail', count: '리테일·물류센터' },
  { label: '교육/의료', path: '/projects/education', count: '학교·병원·공공시설' },
];

const PROCESS_STEPS = [
  { step: '01', title: '착공 전 검토', text: '도면, 물량, 공정 리스크를 사전에 확인합니다.' },
  { step: '02', title: '구조체 시공', text: '철근, 거푸집, 콘크리트 타설 품질을 집중 관리합니다.' },
  { step: '03', title: '품질·안전 검측', text: '현장 기준과 안전 교육을 반복 가능한 운영 체계로 만듭니다.' },
  { step: '04', title: '준공·피드백', text: '프로젝트 데이터를 다음 현장의 표준으로 축적합니다.' },
];

const FEATURED_PROJECTS = RECENT_PROJECTS.slice(0, 3);
const FEATURED_NEWS = NEWS_DATA.slice(0, 3);

const TRUST_METRICS = [
  { label: '설립', value: '1994', note: '지인개발 설립' },
  { label: '도급순위', value: '55위', note: '철근콘크리트공사' },
  { label: '시공능력평가액', value: '978억', note: '2025년' },
  { label: '매출액', value: '700억', note: '2024년' },
];

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
              철근콘크리트로<br />
              대한민국의 골조를 세웁니다
            </h1>
            <p className="hero-subtitle">
              태일씨앤티는 30년 현장 경험과 품질·안전 실행력으로
              대형 건설 프로젝트의 구조체 공사를 책임지는 전문 건설회사입니다.
            </p>
            <div className="hero-actions">
              <Link to="/projects/orders" className="btn btn-brand hero-btn-main">
                주요 실적 보기 <ArrowRight size={17} />
              </Link>
              <Link to="/recruitment/jobs" className="btn btn-outline-white hero-btn-sub">
                지원자 채용 정보
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-arrow" />
        </div>
      </section>

      <section className="decision-strip" aria-label="빠른 이동">
        <Link to="/company/greeting">
          <Building2 size={20} />
          <span>어떤 회사인가요?</span>
        </Link>
        <Link to="/projects/orders">
          <BadgeCheck size={20} />
          <span>실적과 신뢰도</span>
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

      <section className="section identity-section">
        <div className="container">
          <div className="identity-grid">
            <AnimatedSection direction="left">
              <div className="identity-media">
                <img src="./assets/images/company/greeting.jpg" alt="태일씨앤티 현장 이미지" />
                <div className="identity-caption">
                  <span>Concrete Frame Work</span>
                  <strong>구조체 공사의 품질이 건축의 수명을 결정합니다.</strong>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={120}>
              <div className="identity-copy">
                <p className="section-eyebrow">WHAT WE BUILD</p>
                <h2 className="section-title">골조 공사의 기본을 지키는 회사</h2>
                <p className="section-subtitle">
                  태일씨앤티는 철근콘크리트 골조 공사를 중심으로 품질, 안전,
                  공정의 균형을 지키며 프로젝트의 신뢰를 완성합니다.
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
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <AnimatedSection className="section-header center">
            <p className="section-eyebrow">PROJECT PORTFOLIO</p>
            <h2 className="section-title center">실적으로 증명하는 전문성</h2>
            <p className="section-subtitle center">
              다양한 현장에서 축적한 시공 경험과 주요 건설사와의 협업으로
              태일씨앤티의 기술력을 증명합니다.
            </p>
          </AnimatedSection>

          <div className="featured-project-grid">
            {FEATURED_PROJECTS.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
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

          <div className="business-link-grid">
            {BUSINESS_LINKS.map((item) => (
              <Link to={item.path} className="business-link-card" key={item.path}>
                <span>{item.label}</span>
                <p>{item.count}</p>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="process-grid">
            <AnimatedSection direction="left">
              <div className="process-copy">
                <p className="section-eyebrow">SITE OPERATION</p>
                <h2 className="section-title">현장이 납득하는 운영 방식</h2>
                <p className="section-subtitle">
                  착공 전 검토부터 구조체 시공, 품질·안전 점검까지
                  현장의 기준을 세우고 끝까지 지키는 실행력을 추구합니다.
                </p>
                <blockquote className="safety-quote">
                  오늘의 안전은 어제로부터,<br />
                  내일의 안전은 오늘로부터!
                </blockquote>
                <Link to="/technology/overview" className="btn btn-primary">
                  기술자료 보기 <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
            <div className="process-timeline">
              {PROCESS_STEPS.map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 90} direction="right">
                  <div className="process-item">
                    <span>{item.step}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="recruit-focus-section">
        <div className="container">
          <AnimatedSection className="recruit-focus-card">
            <div>
              <span className="recruit-badge">FOR APPLICANTS</span>
              <h2>태일씨앤티와 함께 성장할 인재를 기다립니다</h2>
              <p>
                현장을 이해하고 책임 있게 움직이는 사람,
                더 나은 방식으로 성장하려는 사람에게 태일씨앤티의 문은 열려 있습니다.
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
              <h2 className="section-title">태일씨앤티의 새로운 소식</h2>
              <p className="section-subtitle">
                수상, 사회공헌, 현장 소식까지 태일씨앤티의 활동을 전합니다.
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
          <AnimatedSection className="section-header center">
            <p className="section-eyebrow">COMPANY FILM</p>
            <h2 className="section-title center">현장과 사람, 기술을 영상으로 만나다</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="media-panel">
              <video controls poster="./assets/images/esg/esg-main.png" preload="metadata">
                <source src="./assets/videos/intro.mp4" type="video/mp4" />
                브라우저가 동영상을 지원하지 않습니다.
              </video>
              <div className="media-summary">
                <strong>태일씨앤티 기업 소개</strong>
                <p>철근콘크리트 전문 시공 현장과 품질·안전을 향한 태일씨앤티의 기준을 영상으로 확인해 보세요.</p>
                <Link to="/company/greeting" className="btn btn-primary">
                  회사소개로 이동 <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
