import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import NewsModal from '../../components/ui/NewsModal';
import { NEWS_DATA } from '../../data/newsData';
import { Calendar, ArrowRight, Plus, ChevronRight } from 'lucide-react';
import { FALLBACK_NEWS_IMAGE, cleanText, getNewsCoverImage } from '../../utils/newsUtils';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './News.css';

const SUB_NAV = [
  { label: 'News', path: '/pr/news' },
  { label: '유튜브', path: '/pr/youtube' },
];

const FEATURED_COUNT = 3;
const GRID_PAGE_SIZE = 6;

export default function News() {
  const [visibleGridCount, setVisibleGridCount] = useState(GRID_PAGE_SIZE);
  const [selectedNews, setSelectedNews] = useState(null);

  const featured = NEWS_DATA.slice(0, Math.min(FEATURED_COUNT, NEWS_DATA.length));
  const gridStart = featured.length;
  const grid = NEWS_DATA.slice(gridStart, gridStart + visibleGridCount);

  const loadMore = () => {
    setVisibleGridCount(prev => Math.min(prev + GRID_PAGE_SIZE, NEWS_DATA.length - gridStart));
  };

  const closeModal = () => setSelectedNews(null);

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
                    src={getNewsCoverImage(item)}
                    alt={cleanText(item.title)}
                    className="news-slide-img"
                    onError={e => { e.currentTarget.src = FALLBACK_NEWS_IMAGE; }}
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
                    src={getNewsCoverImage(item)}
                    alt={cleanText(item.title)}
                    onError={e => { e.currentTarget.src = FALLBACK_NEWS_IMAGE; }}
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

      {gridStart + visibleGridCount < NEWS_DATA.length && (
        <div className="news-load-more">
          <button className="btn btn-outline btn-lg" onClick={loadMore}>
            <Plus size={18} /> 더 많은 소식 보기
          </button>
        </div>
      )}

      <NewsModal news={selectedNews} onClose={closeModal} />
    </PageLayout>
  );
}
