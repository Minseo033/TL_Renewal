import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Building, Factory, Hospital, Store, Zap, Handshake, Target, Landmark, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Home.css';

/* ── Stat Counter ── */
function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ── Business Cards data ── */
const BUSINESS_AREAS = [
  { icon: <Building2 className="business-icon-lucide" size={36} />, title: '철근콘크리트', desc: '고품질 철근콘크리트 시공', color: '#1B3A5C', path: '/projects/housing' },
  { icon: <Building className="business-icon-lucide" size={36} />, title: '업무시설', desc: '오피스·상업건물 전문 시공', color: '#2E8B4A', path: '/projects/office' },
  { icon: <Landmark className="business-icon-lucide" size={36} />, title: '초고층건물', desc: '초고층 구조물 전문 시공', color: '#C9A84C', path: '/projects/highrise' },
  { icon: <Factory className="business-icon-lucide" size={36} />, title: '플랜트', desc: '산업설비·플랜트 시공', color: '#2A5580', path: '/projects/plant' },
  { icon: <Hospital className="business-icon-lucide" size={36} />, title: '교육·의료', desc: '학교·병원 건축 전문', color: '#3AA65C', path: '/projects/education' },
  { icon: <Store className="business-icon-lucide" size={36} />, title: '판매시설', desc: '리테일·복합시설 시공', color: '#A68A30', path: '/projects/retail' },
];

/* ── Recent News ── */
const NEWS = [
  { date: '2026.02', title: '삼성물산 2026년 우수 시공 역량 수상', category: '수상' },
  { date: '2025.11', title: '지역 청소년 장학금 전달식 진행', category: '사회공헌' },
  { date: '2025.09', title: 'K-BIM 우수기업 선정', category: '기술혁신' },
  { date: '2025.06', title: '2025 안전경영대상 수상', category: '수상' },
];

/* ── Hero Slides ── */
const HERO_SLIDES = [
  {
    headline: '대한민국을 짓는\n철근콘크리트 전문기업',
    sub: '30년의 신뢰, 기술력으로 더 안전한 내일을 만들어갑니다',
    accent: '태일씨앤티',
  },
  {
    headline: '검증된 기술로 완성하는\n안전한 건설 현장',
    sub: '철근콘크리트 전문성과 현장 관리 역량으로 품질을 지켜갑니다',
    accent: '기술역량',
  },
  {
    headline: '함께 성장하는\n인재를 기다립니다',
    sub: '열정 있는 인재와 함께 도전하고 성장하는 태일씨앤티',
    accent: '인재채용',
  },
];

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx(i => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroIdx]);

  const slide = HERO_SLIDES[heroIdx];

  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
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
          <div className="hero-grid-pattern" />
        </div>

        <div className="hero-content">
          <div key={heroIdx} className="hero-slide">
            <span className="hero-badge">{slide.accent}</span>
            <h1 className="hero-title">
              {slide.headline.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <p className="hero-subtitle">{slide.sub}</p>
            <div className="hero-actions">
              <Link to="/company/greeting" className="btn btn-brand hero-btn-main">
                회사 소개 보기 →
              </Link>
              <Link to="/projects/orders" className="btn btn-outline-white hero-btn-sub">
                사업 실적 보기
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === heroIdx ? 'active' : ''}`}
              onClick={() => setHeroIdx(i)}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-arrow" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <AnimatedSection className="stat-item" delay={0}>
              <span className="stat-number"><Counter target={30} suffix="년+" /></span>
              <span className="stat-label">업계 경력</span>
            </AnimatedSection>
            <div className="stat-divider" />
            <AnimatedSection className="stat-item" delay={100}>
              <span className="stat-number"><Counter target={85} suffix="+" /></span>
              <span className="stat-label">완료 프로젝트</span>
            </AnimatedSection>
            <div className="stat-divider" />
            <AnimatedSection className="stat-item" delay={200}>
              <span className="stat-number"><Counter target={25} suffix="개사+" /></span>
              <span className="stat-label">주요 파트너</span>
            </AnimatedSection>
            <div className="stat-divider" />
            <AnimatedSection className="stat-item" delay={300}>
              <span className="stat-number"><Counter target={61} suffix="위" /></span>
              <span className="stat-label">전국 철근콘크리트 순위</span>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Company Intro ── */}
      <section className="section company-intro">
        <div className="container">
          <div className="company-intro-grid">
            <AnimatedSection direction="left">
              <div className="company-intro-visual clean-visual">
                <div className="intro-image-main">
                  <img src="./assets/images/company/greeting.jpg" alt="전문성" />
                  
                  <div className="intro-experience-badge">
                    <span className="years">30</span>
                    <span className="text">Years of<br/>Excellence</span>
                  </div>
                </div>
                
                <div className="intro-iso-badges side-badges">
                  <div className="iso-badge"><span className="dot gold"></span>ISO 9001</div>
                  <div className="iso-badge"><span className="dot green"></span>ISO 14001</div>
                  <div className="iso-badge"><span className="dot blue"></span>ISO 45001</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={150}>
              <div className="company-intro-text">
                <div className="section-eyebrow-wrap">
                  <span className="section-line"></span>
                  <p className="section-eyebrow">ABOUT TAEIL C&T</p>
                </div>
                <h2 className="section-title">
                  <span className="text-gradient">30년의 신뢰,</span><br/>
                  대한민국 건설을 선도합니다
                </h2>
                <div className="intro-desc-wrap">
                  <p className="intro-desc lead">
                    1994년 설립 이래, 철근콘크리트 전문 건설회사로서 혁신적인 기술력과 완벽한 품질로 신뢰받는 시공 품질을 쌓아가고 있습니다.
                  </p>
                  <p className="intro-desc">
                    삼성물산, GS건설, 현대건설 등 국내 최상위 대형 건설사들의 신뢰받는 파트너로서 주택, 초고층, 플랜트 등 모든 핵심 분야에서 최고의 가치를 창출합니다.
                  </p>
                </div>
                
                <div className="intro-values">
                  <div className="intro-value-item">
                    <div className="intro-value-icon-wrap"><Zap size={20} strokeWidth={1.5} /></div>
                    <div className="intro-value-text">
                      <strong>책임완수</strong>
                      <p>타협 없는 품질로 약속을 현실로 만듭니다</p>
                    </div>
                  </div>
                  <div className="intro-value-item">
                    <div className="intro-value-icon-wrap"><Handshake size={20} strokeWidth={1.5} /></div>
                    <div className="intro-value-text">
                      <strong>인화단결</strong>
                      <p>최고의 팀워크로 한계를 넘어섭니다</p>
                    </div>
                  </div>
                  <div className="intro-value-item">
                    <div className="intro-value-icon-wrap"><Target size={20} strokeWidth={1.5} /></div>
                    <div className="intro-value-text">
                      <strong>근면성실</strong>
                      <p>꾸준한 개선으로 현장 품질을 높입니다</p>
                    </div>
                  </div>
                </div>
                
                <div className="intro-actions">
                  <Link to="/company/greeting" className="btn btn-primary btn-lg">
                    회사소개 자세히 보기 →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Business Areas ── */}
      <section className="section business-section">
        <div className="container">
          <AnimatedSection className="section-header center">
            <p className="section-eyebrow">BUSINESS AREAS</p>
            <h2 className="section-title center">전문 사업 분야</h2>
            <p className="section-subtitle center">
              철근콘크리트 전문 기술을 기반으로 다양한 건설 분야에서 최고의 성과를 창출합니다
            </p>
          </AnimatedSection>
          <div className="business-grid">
            {BUSINESS_AREAS.map((area, idx) => (
              <AnimatedSection key={idx} delay={idx * 80}>
                <Link to={area.path} className="business-card" style={{ '--card-color': area.color }}>
                  <div className="business-card-icon">{area.icon}</div>
                  <h3 className="business-card-title">{area.title}</h3>
                  <p className="business-card-desc">{area.desc}</p>
                  <span className="business-card-link">자세히 보기 →</span>
                  <div className="business-card-bg" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="section technology-highlight-section">
        <div className="container">
          <div className="technology-highlight-grid">
            <AnimatedSection direction="left">
              <div className="technology-highlight-copy">
                <p className="section-eyebrow">TECHNICAL RESOURCES</p>
                <h2 className="section-title">기술자료까지 갖춘<br/>현장 중심 홈페이지</h2>
                <p className="section-subtitle">
                  기존 홈페이지의 기술자료 메뉴를 복원하고, BIM·품질·안전관리 메시지를 정적 콘텐츠로 재정리했습니다.
                </p>
                <Link to="/technology/overview" className="btn btn-primary">
                  기술자료 보기 <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={120}>
              <div className="technology-highlight-panel">
                <div className="tech-panel-item">
                  <strong>01</strong>
                  <span>시공 전 검토</span>
                  <p>도면·공정·물량 리스크 사전 확인</p>
                </div>
                <div className="tech-panel-item">
                  <strong>02</strong>
                  <span>품질 관리</span>
                  <p>검측 체크리스트와 ISO 인증 체계 기반 운영</p>
                </div>
                <div className="tech-panel-item">
                  <strong>03</strong>
                  <span>안전 실행</span>
                  <p>위험성 평가와 현장 교육으로 사고 예방</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section partners-section">
        <div className="container">
          <AnimatedSection className="section-header center">
            <p className="section-eyebrow">OUR PARTNERS</p>
            <h2 className="section-title center">주거래 시공사</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="partners-ticker-wrap">
              <div className="partners-ticker">
                {['삼성물산', 'GS건설', '현대건설', '대우건설', '한라', 'SK에코플랜트', '롯데건설', '포스코건설', '현대산업개발', '두산건설',
                  '삼성물산', 'GS건설', '현대건설', '대우건설', '한라', 'SK에코플랜트', '롯데건설', '포스코건설', '현대산업개발', '두산건설'].map((p, i) => (
                  <span key={i} className="partner-item">{p}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── News ── */}
      <section className="section news-section">
        <div className="container">
          <div className="news-inner">
            <AnimatedSection direction="left" className="news-header">
              <p className="section-eyebrow">NEWS & NOTICE</p>
              <h2 className="section-title">최신 소식</h2>
              <Link to="/pr/news" className="btn btn-outline news-more-btn">전체 보기</Link>
            </AnimatedSection>
            <div className="news-list">
              {NEWS.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 80} direction="right">
                  <Link to="/pr/news" className="news-item">
                    <span className="news-category">{item.category}</span>
                    <span className="news-title">{item.title}</span>
                    <span className="news-date">{item.date}</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recruitment Banner ── */}
      <section className="recruit-banner">
        <div className="recruit-banner-bg" />
        <div className="container">
          <AnimatedSection className="recruit-banner-content" direction="up">
            <span className="recruit-badge">RECRUITMENT</span>
            <h2>도전하는 인재를<br/>기다립니다</h2>
            <p>태일씨앤티와 함께 대한민국의 미래를 만들어 갈 열정 있는 인재를 모십니다</p>
            <Link to="/recruitment/jobs" className="btn btn-brand recruit-btn">
              채용 바로가기 →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── YouTube / PR ── */}
      <section className="section youtube-section">
        <div className="container">
          <AnimatedSection className="section-header center">
            <p className="section-eyebrow">TAEIL C&T MEDIA</p>
            <h2 className="section-title center">홍보 영상</h2>
            <p className="section-subtitle center">태일씨앤티의 현장과 기업 문화를 영상으로 만나보세요</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="youtube-grid">
              <div className="youtube-main">
                <div className="youtube-embed-wrap">
                  <video
                    className="youtube-iframe"
                    controls
                    poster="./assets/images/esg/esg-main.png"
                    preload="metadata"
                  >
                    <source src="./assets/videos/intro.mp4" type="video/mp4" />
                    브라우저가 동영상을 지원하지 않습니다.
                  </video>
                </div>
              </div>
              <div className="youtube-side">
                <div className="youtube-cta-card">
                  <div className="yt-icon">▶</div>
                  <h3>태일씨앤티 공식 채널</h3>
                  <p>현장 시공 과정, 안전 경영, 기업 소개 등 다양한 콘텐츠를 확인하세요</p>
                  <a
                    href="https://www.youtube.com/@taeilcnt"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    유튜브 채널 방문
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
