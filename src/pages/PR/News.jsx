import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { NEWS_DATA } from '../../data/newsData';
import { Calendar, ArrowRight, X, Plus, ChevronRight } from 'lucide-react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './News.css';

const MotionDiv = motion.div;
const MotionP = motion.p;

const SUB_NAV = [
  { label: 'News', path: '/pr/news' },
  { label: '홍보동영상', path: '/pr/youtube' },
];

const FALLBACK_IMG = './assets/images/company/greeting.jpg';

const cleanText = (value = '') => value
  .replace(/&lsquo;|&rsquo;/g, "'")
  .replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/\.?더보기$/g, '')
  .replace(/202년/g, '2025년')
  .trim();

// Framer Motion variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.2 } },
};

const contentStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const paraVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25 } },
};

export default function News() {
  const [visibleCount, setVisibleCount] = useState(7);
  const [selectedNews, setSelectedNews] = useState(null);
  const modalBodyRef = useRef(null);

  // Scroll modal content to top when opening a new article
  useEffect(() => {
    if (selectedNews && modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [selectedNews]);

  const featured = NEWS_DATA.slice(0, Math.min(3, NEWS_DATA.length)); // top 3 for carousel
  const grid = NEWS_DATA.slice(3, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, NEWS_DATA.length));
  };

  const closeModal = () => setSelectedNews(null);

  const paragraphs = selectedNews
    ? cleanText(selectedNews.content).split('\n').filter(p => p.trim())
    : [];

  return (
    <PageLayout
      title="홍보센터"
      breadcrumb={[{ label: '홍보센터', path: '/pr/news' }, { label: 'News' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">PR CENTER</p>
        <h2 className="section-title">NEWS</h2>
        <p className="section-subtitle">
          태일씨앤티의 생생한 현장 소식과 기업 활동 내용을 전해드립니다.
        </p>
      </AnimatedSection>

      {/* ── Swiper Featured Carousel ── */}
      <AnimatedSection direction="up">
        <div className="news-swiper-wrap">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="news-swiper"
          >
            {featured.map(item => (
              <SwiperSlide key={item.id}>
                <div className="news-slide" onClick={() => setSelectedNews(item)}>
                  <img
                    src={item.image || FALLBACK_IMG}
                    alt={cleanText(item.title)}
                    className="news-slide-img"
                    onError={e => { e.target.src = FALLBACK_IMG; }}
                  />
                  <div className="news-slide-gradient" />
                  <div className="news-slide-content">
                    {item.category && (
                      <span className="news-tag news-tag--white">{item.category}</span>
                    )}
                    <h2 className="news-slide-title">{cleanText(item.title)}</h2>
                    <div className="news-slide-meta">
                      <span className="news-date"><Calendar size={14} />{item.date}</span>
                      <span className="news-read-more">기사 보기 <ArrowRight size={15} /></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimatedSection>

      {/* ── Rest Grid ── */}
      {grid.length > 0 && (
        <div className="news-grid">
          {grid.map((item, i) => (
            <AnimatedSection key={item.id} delay={(i % 6) * 60} direction="up">
              <article className="news-card" onClick={() => setSelectedNews(item)}>
                <div className="news-card-image">
                  <img
                    src={item.image || FALLBACK_IMG}
                    alt={cleanText(item.title)}
                    onError={e => { e.target.src = FALLBACK_IMG; }}
                  />
                  {item.category && (
                    <span className="news-tag news-tag--over">{item.category}</span>
                  )}
                </div>
                <div className="news-card-body">
                  <time className="news-date"><Calendar size={13} />{item.date}</time>
                  <h3 className="news-card-title">{cleanText(item.title)}</h3>
                  <p className="news-card-excerpt">{cleanText(item.content).slice(0, 80)}...</p>
                </div>
                <div className="news-card-footer">
                  <span className="news-read-more">자세히 보기 <ChevronRight size={14} /></span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      )}

      {visibleCount < NEWS_DATA.length && (
        <div className="news-load-more">
          <button className="btn btn-outline btn-lg" onClick={loadMore}>
            <Plus size={18} /> 더 많은 소식 보기
          </button>
        </div>
      )}

      {/* ── Detail Modal (Framer Motion) ── */}
      <AnimatePresence>
        {selectedNews && (
          <MotionDiv
            className="news-modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <MotionDiv
              className="news-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button className="news-modal-close" onClick={closeModal}>
                <X size={20} />
              </button>

              {/* Hero */}
              <div className="news-modal-hero">
                <img
                  src={selectedNews.image || FALLBACK_IMG}
                  alt={cleanText(selectedNews.title)}
                  onError={e => { e.target.src = FALLBACK_IMG; }}
                />
                <div className="news-modal-hero-gradient" />
                <div className="news-modal-hero-text">
                  {selectedNews.category && (
                    <span className="news-tag news-tag--white">{selectedNews.category}</span>
                  )}
                  <h2 className="news-modal-title">{cleanText(selectedNews.title)}</h2>
                  <time className="news-modal-date">
                    <Calendar size={14} />{selectedNews.date}
                  </time>
                </div>
              </div>

              {/* Body with stagger animation */}
              <MotionDiv
                ref={modalBodyRef}
                className="news-modal-content"
                variants={contentStagger}
                initial="hidden"
                animate="visible"
              >
                {/* Lead paragraph — first one is bigger */}
                {paragraphs.length > 0 && (
                  <MotionP className="news-modal-lead" variants={paraVariants}>
                    {cleanText(paragraphs[0])}
                  </MotionP>
                )}
                {paragraphs.slice(1).map((para, i) => (
                  <MotionP key={i} variants={paraVariants}>{cleanText(para)}</MotionP>
                ))}
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
