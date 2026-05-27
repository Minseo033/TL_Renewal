import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Building,
  Calendar,
  CalendarCheck,
  HardHat,
  MapPin,
  MapPinned,
  Ruler,
  ShieldCheck,
  Users,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../../components/ui/AnimatedSection';
import NewsModal from '../../components/ui/NewsModal';
import { RECENT_PROJECTS } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import { HOME_DISPLAY } from '../../data/homeDisplayData';
import { FALLBACK_NEWS_IMAGE, cleanText, getNewsCoverImage } from '../../utils/newsUtils';
import './Home.css';
import '../Projects/Projects.css';

// --- 데이터 로직 ---
const BUSINESS_LINKS = [
  { label: '주택', path: '/projects/housing', desc: '공동주택·주상복합' },
  { label: '업무시설', path: '/projects/office', desc: '오피스·R&D·데이터센터' },
  { label: '초고층', path: '/projects/highrise', desc: '고난도 구조체' },
  { label: '플랜트', path: '/projects/plant', desc: '산업·반도체 인프라' },
  { label: '판매시설', path: '/projects/retail', desc: '리테일·물류센터' },
  { label: '교육/의료', path: '/projects/education', desc: '학교·병원·공공시설' },
];

const FIELD_PROCESS = [
  { code: '01', title: '도면·물량 검토', text: '착공 전 구조, 공정, 물량 리스크를 먼저 정리합니다.', image: './assets/images/home/home_01.avif' },
  { code: '02', title: '철근 배근', text: '구조 안전의 기준이 되는 철근 배근 품질을 관리합니다.', image: './assets/images/home/home_02.avif' },
  { code: '03', title: '거푸집·동바리', text: '형상, 수직도, 지지 조건을 현장 기준에 맞춰 점검합니다.', image: './assets/images/home/home_03.avif' },
  { code: '04', title: '콘크리트 타설', text: '타설 순서와 품질 상태를 공정 흐름 안에서 통제합니다.', image: './assets/images/home/home_04.jpeg' },
  { code: '05', title: '품질·안전 검측', text: '위험성 평가와 검측을 반복 가능한 운영 체계로 연결합니다.', image: './assets/images/home/home_05.jpeg' },
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
  { label: '설립', value: '1994', note: '지인개발 설립' },
  { label: '도급순위', value: '55위', note: '철근콘크리트공사' },
  { label: '시공능력평가액', value: '978억', note: '2025년' },
  { label: '매출액', value: '840억', note: '2025년' },
];

const HOME_COMPANY_FILM_URL = 'https://www.youtube.com/embed/5Z3fGjtwe4Y';

const pickDisplayItems = (items, ids, limit) => {
  const selected = ids.map((id) => items.find((item) => item.id === id)).filter(Boolean);
  const fallback = items.filter((item) => !ids.includes(item.id));
  return [...selected, ...fallback].slice(0, limit);
};

const FEATURED_PROJECTS = pickDisplayItems(RECENT_PROJECTS, HOME_DISPLAY.featuredProjectIds, 4);
const FEATURED_NEWS = pickDisplayItems(NEWS_DATA, HOME_DISPLAY.featuredNewsIds, 3);
const CATEGORY_DASHBOARD = BUSINESS_LINKS.map((item) => ({
  ...item, count: RECENT_PROJECTS.filter((project) => project.categories?.includes(item.label)).length,
}));
const MAX_CATEGORY_COUNT = Math.max(1, ...CATEGORY_DASHBOARD.map((item) => item.count));
const TOP_PARTNERS = Array.from(
  RECENT_PROJECTS.reduce((acc, project) => {
    if (project.partner && project.partner !== '.') {
      acc.set(project.partner, (acc.get(project.partner) || 0) + 1);
    }
    return acc;
  }, new Map())
).sort((a, b) => b[1] - a[1]).slice(0, 6);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(false);
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);
  const [animateTrustMetrics, setAnimateTrustMetrics] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const trustMetricRef = useRef(null);
  const categoryRef = useRef(null);
  const [trustCounts, setTrustCounts] = useState(TRUST_METRICS.map(() => 0));
  const [countValues, setCountValues] = useState(CATEGORY_DASHBOARD.map(() => 0));
  const progressRef = useRef(null);

  // 슬라이더 상태 및 타이머
  const [activeStep, setActiveStep] = useState(0);
  const stepTimerRef = useRef(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setHeroVideoEnabled(true), 900);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [selectedProject]);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      if (!progressRef.current) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressRef.current.style.width = `${scrollPercent}%`;
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = trustMetricRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setAnimateTrustMetrics(true); obs.disconnect(); }
      });
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = categoryRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setAnimateBars(true); obs.disconnect(); }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 자동 재생 스크립트 (4초 주기)
  const startStepTimer = () => {
    clearInterval(stepTimerRef.current);
    stepTimerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % FIELD_PROCESS.length);
    }, 4000);
  };

  useEffect(() => {
    startStepTimer();
    return () => clearInterval(stepTimerRef.current);
  }, []);

  const handlePrevStep = (e) => {
    e.stopPropagation();
    setActiveStep((prev) => (prev === 0 ? FIELD_PROCESS.length - 1 : prev - 1));
    startStepTimer();
  };

  const handleNextStep = (e) => {
    e.stopPropagation();
    setActiveStep((prev) => (prev + 1) % FIELD_PROCESS.length);
    startStepTimer();
  };

  useEffect(() => {
    if (!animateTrustMetrics) return;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const handles = TRUST_METRICS.map((metric, idx) => {
      const raw = String(metric.value || '');
      const numStr = raw.replace(/[^0-9]/g, '');
      const target = numStr ? parseInt(numStr, 10) : 0;
      if (!target) return { timeoutId: null, rafId: null };

      const duration = 2000;
      const delay = idx * 180;
      let rafId = null;
      let startTime = null;

      const start = () => {
        const step = (now) => {
          if (!startTime) startTime = now;
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const eased = easeOutCubic(progress);
          const value = Math.max(1, Math.round(target * eased));
          setTrustCounts((prev) => {
            const next = [...prev]; next[idx] = value; return next;
          });
          if (progress < 1) rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
      };
      const timeoutId = setTimeout(start, delay);
      return { timeoutId, rafIdRef: () => rafId };
    });
    return () => {
      handles.forEach((h) => {
        if (h.timeoutId) clearTimeout(h.timeoutId);
        const id = h.rafIdRef && h.rafIdRef();
        if (id) cancelAnimationFrame(id);
      });
    };
  }, [animateTrustMetrics]);

  useEffect(() => {
    if (!animateBars) return;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const handles = CATEGORY_DASHBOARD.map((item, idx) => {
      const target = item.count || 0;
      const delay = idx * 140;
      const duration = 1200;
      let rafId = null;
      let startTime = null;

      const start = () => {
        const step = (now) => {
          if (!startTime) startTime = now;
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const eased = easeOutCubic(progress);
          const value = Math.round(target * eased);
          setCountValues((prev) => {
            const next = [...prev]; next[idx] = value; return next;
          });
          if (progress < 1) rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
      };
      const t = setTimeout(start, delay);
      return { rafIdRef: () => rafId, timeoutId: t };
    });
    return () => {
      handles.forEach((h) => {
        clearTimeout(h.timeoutId);
        const id = h.rafIdRef && h.rafIdRef();
        if (id) cancelAnimationFrame(id);
      });
    };
  }, [animateBars]);

  return (
    <div className="home">
      <div 
        className="scroll-progress-bar" 
        ref={progressRef}
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '0%', height: '4px',
          backgroundColor: '#2E8B4A', zIndex: 99999,
          transition: 'width 0.08s cubic-bezier(0.1, 0.8, 0.3, 1)',
          willChange: 'width'
        }} 
      />

      {/* 1. HERO */}
      <section className="hero renewal-hero">
        <div className="hero-bg">
          <img
            className="hero-poster-bg"
            src="./assets/images/home/hero-poster.jpg"
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
          />
          <video
            className={`hero-video-bg${heroVideoLoaded ? ' is-loaded' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="./assets/images/home/hero-poster.jpg"
            src={heroVideoEnabled ? './assets/videos/intro.mp4' : undefined}
            aria-hidden="true"
            onCanPlay={() => setHeroVideoLoaded(true)}
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content renewal-hero-content">
          <div className="hero-copy">
            <h1 className="hero-title">철근콘크리트로<br/>대한민국의 골조를 세웁니다</h1>
            <p className="hero-subtitle">태일씨앤티는 30년 현장 경험과 품질·안전 실행력으로 대형 건설 프로젝트의 구조체 공사를 책임지는 전문 건설회사입니다.</p>
            <div className="hero-actions">
              <Link to="/projects/orders" className="btn btn-brand hero-btn-main">주요 실적 보기 <ArrowRight size={17} /></Link>
              <Link to="/recruitment/jobs" className="btn btn-outline-white hero-btn-sub">지원자 채용 정보</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint"><span>Scroll</span><div className="hero-scroll-arrow" /></div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="trust-metric-strip" aria-label="태일씨앤티 주요 지표" ref={trustMetricRef}>
        <div className="container">
          <div className="trust-metric-grid">
            {TRUST_METRICS.map((metric, idx) => {
              const raw = String(metric.value || '');
              const suffix = raw.replace(/[0-9,]/g, '').trim();
              const display = typeof trustCounts[idx] === 'number' ? `${trustCounts[idx]}${suffix}` : metric.value;
              return (
                <div className="trust-metric-item" key={metric.label}>
                  <span>{metric.label}</span><strong>{display}</strong><p>{metric.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FIELD SYSTEM (★ 레퍼런스 이미지 레이아웃 100% 매칭 스크린) */}
      <section className="section field-system-section">
        <div className="container">
          <div className="field-system-grid">
            
            {/* 좌측: 고정 텍스트 영역 */}
            <AnimatedSection direction="left">
              <div className="field-system-copy">
                <p className="section-eyebrow">WHAT TAEIL BUILDS</p>
                <h2 className="section-title">골조로 입증된 태일씨앤티의 경쟁력</h2>
                <p className="section-subtitle">태일씨앤티는 도면 검토, 철근 배근, 거푸집, 콘크리트 타설, 품질·안전 검측까지 구조체 공사의 핵심 공정을 책임 있게 수행합니다.</p>
                <div className="strength-list">
                  {CORE_STRENGTHS.map((item) => (
                    <div className="strength-item" key={item.title}>
                      <div className="strength-icon">{item.icon}</div>
                      <div><strong>{item.title}</strong><p>{item.text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* 우측: 레퍼런스 전용 통합 카드 컴포넌트 */}
            <AnimatedSection direction="right" delay={120}>
              <div className="ref-style-board">
                
                {/* 상단 이미지 전시 레이어 */}
                <div className="ref-slider-viewport">
                  <div className="ref-image-track" style={{ transform: `translateX(-${activeStep * 100}%)` }}>
                    {FIELD_PROCESS.map((step) => (
                      <div className="ref-image-slide" key={step.code}>
                        <img src={step.image} alt={step.title} />
                      </div>
                    ))}
                  </div>

                  {/* 우측 하단 슬라이드 컨트롤 */}
                  <div className="ref-overlap-green-box">
                    <div className="green-box-controls">
                      <button type="button" onClick={handlePrevStep} aria-label="이전 공정 이미지 보기"><ChevronLeft size={18} /></button>
                      <button type="button" onClick={handleNextStep} aria-label="다음 공정 이미지 보기"><ChevronRight size={18} /></button>
                    </div>
                  </div>
                </div>

                {/* 하단 설명글 레이어 */}
                <div className="ref-description-bar">
                  <span className="ref-process-code" key={`code-${activeStep}`}>
                    {FIELD_PROCESS[activeStep].code}
                  </span>
                  <div className="ref-process-text" key={`text-${activeStep}`}>
                    <h3>{FIELD_PROCESS[activeStep].title}</h3>
                    <p>{FIELD_PROCESS[activeStep].text}</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO */}
      <section className="section portfolio-section">
        <div className="container">
          <AnimatedSection className="dashboard-heading">
            <div><p className="section-eyebrow">PROJECT DASHBOARD</p><h2 className="section-title">공사수주 현황을 한눈에 보는 실적 지도</h2></div>
            <Link to="/projects/orders" className="btn btn-primary">전체 실적 보기 <ArrowRight size={16} /></Link>
          </AnimatedSection>

          <div className="portfolio-dashboard-grid">
            <AnimatedSection className="category-dashboard" direction="up">
              <div className="dashboard-card-head"><BarChart3 size={20} /><strong>공사 유형별 등록 실적</strong></div>
              <div className="category-bars" ref={categoryRef}>
                {CATEGORY_DASHBOARD.map((item, idx) => (
                  <Link to={item.path} className="category-bar-row" key={item.label}>
                    <span>{item.label}</span>
                    <div>
                      <i
                        style={{
                          width: animateBars ? item.count ? `${Math.max(12, (item.count / MAX_CATEGORY_COUNT) * 100)}%` : '0%' : '0%',
                          transition: `width 1200ms cubic-bezier(0.2,0.8,0.2,1) ${idx * 140}ms`,
                        }}
                      />
                    </div>
                    <strong>{typeof countValues[idx] === 'number' ? countValues[idx] : item.count}</strong>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection className="partner-dashboard" delay={100} direction="up">
              <div className="dashboard-card-head"><Users size={20} /><strong>주요 시공사 협업 이력</strong></div>
              <div className="partner-rank-list">
                {TOP_PARTNERS.map(([partner, count], index) => (
                  <div key={partner} className="partner-rank-item">
                    <span>0{index + 1}</span><p>{partner}</p><strong>{count}건</strong>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="featured-project-grid">
            {FEATURED_PROJECTS.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 80} direction="up">
                <div className="featured-project-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProject(project)}>
                  <div className="featured-project-image">
                    <img src={project.image} alt={project.name} />
                    {project.status && project.status !== '.' && (
                      <span className={`project-status-badge ${project.status === '진행' ? 'is-active' : ''}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="featured-project-body">
                    <span>{project.categories?.[0] || 'Project'}</span>
                    <h3>{project.name}</h3>
                    <p><MapPinned size={14} />{project.address}</p>
                    <p><CalendarCheck size={14} />{project.period}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECRUIT */}
      <section className="recruit-focus-section">
        <div className="container">
          <AnimatedSection className="recruit-focus-card">
            <div>
              <span className="recruit-badge">FOR APPLICANTS</span>
              <h2>내일의 설계, 필요한 것만 단단하게</h2>
              <p>회사 정체성, 직무, 인사제도, 복리후생, FAQ까지 지원자가 궁금해하는 정보를 빠르게 확인할 수 있습니다.</p>
            </div>
            <div className="recruit-links">
              <Link to="/recruitment/system">인사제도</Link>
              <Link to="/recruitment/benefits">복리후생</Link>              
              <Link to="/recruitment/jobs">채용공고</Link>
              <Link to="/recruitment/faq">채용FAQ</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. NEWS */}
      <section className="section news-section">
        <div className="container">
          <div className="news-inner renewal-news-inner">
            <AnimatedSection direction="left" className="news-header">
              <p className="section-eyebrow">NEWS & CONTRIBUTION</p>
              <h2 className="section-title">수상을 넘어 사회적 공헌으로</h2>
              <p className="section-subtitle">안전 성과와 지역사회 나눔, 현장 소식까지 태일씨앤티가 지켜온 책임의 기록을 전합니다.</p>
              <Link to="/pr/news" className="btn btn-outline news-more-btn">전체 보기</Link>
            </AnimatedSection>
            <div className="news-highlight-list">
              {FEATURED_NEWS.map((item, idx) => (
                <AnimatedSection key={item.id} delay={idx * 80} direction="right">
                  <div className="news-highlight-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedNews(item)}>
                    <img src={getNewsCoverImage(item)} alt={cleanText(item.title)} onError={(e) => { e.currentTarget.src = FALLBACK_NEWS_IMAGE; }} />
                    <div className="news-text-wrap"><span>{item.category}</span><h3>{cleanText(item.title)}</h3><p>{item.date}</p></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEDIA */}
      <section className="section media-section">
        <div className="container">
          <AnimatedSection className="section-header center">
            <p className="section-eyebrow">COMPANY FILM</p>
            <h2 className="section-title center">현장과 사람, 기술을 영상으로 만나다</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="media-panel">
              <iframe
                className="media-video-frame"
                src={HOME_COMPANY_FILM_URL}
                title="태일씨앤티 기업 홍보 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="media-summary">
                <strong>태일씨앤티 기업 소개</strong>
                <p>철근콘크리트 전문 시공 현장과 품질·안전을 향한 태일씨앤티의 기준을 영상으로 확인해 보세요.</p>
                <Link to="/company/greeting" className="btn btn-primary">회사소개로 이동 <ArrowRight size={16} /></Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 모달 시스템 */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="닫기"><X size={24} /></button>
            <div className="modal-body">
              <div className="modal-image-wrap">
                <img src={selectedProject.image} alt={selectedProject.name} onError={(e) => { e.currentTarget.src = './assets/images/company/greeting.jpg'; }} />
              </div>
              <div className="modal-info-wrap">
                <p className="modal-eyebrow">PROJECT DETAILS</p>
                <h2 className="modal-title">{selectedProject.name}</h2>
                <div className="modal-details-grid">
                  <DetailItem label="진행상태" value={selectedProject.status} />
                  <DetailItem label="유형" value={selectedProject.type} />
                  <DetailItem label="주소" value={selectedProject.address} icon={<MapPin size={16} />} />
                  <DetailItem label="발주처 / 자" value={selectedProject.client} icon={<Building size={16} />} />
                  <DetailItem label="시공사" value={selectedProject.partner} />
                  <DetailItem label="규모" value={selectedProject.scale} />
                  <DetailItem label="공사기간" value={selectedProject.period} icon={<Calendar size={16} />} />
                  <DetailItem label="공법" value={selectedProject.method} />
                  <DetailItem label="공사범위" value={selectedProject.scope} />
                  <DetailItem label="시공자재" value={selectedProject.material} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
    </div>
  );
}

function DetailItem({ label, value, icon }) {
  if (!value || value === '.') return null;
  return (
    <div className="modal-detail-item">
      <div className="detail-label"><span className="label-text">{label}</span></div>
      <div className="detail-value">
        {icon && <span className="value-icon">{icon}</span>}
        <span className="value-text">{value}</span>
      </div>
    </div>
  );
}
