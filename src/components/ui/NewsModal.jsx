import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';
import {
  FALLBACK_NEWS_IMAGE,
  cleanText,
  getNewsCoverImage,
  getNewsGalleryImages,
  getNewsParagraphs,
} from '../../utils/newsUtils';
import './NewsModal.css';

const MotionDiv = motion.div;
const MotionP = motion.p;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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

export default function NewsModal({ news, onClose }) {
  const modalBodyRef = useRef(null);
  const paragraphs = getNewsParagraphs(news);
  const galleryImages = getNewsGalleryImages(news);

  useEffect(() => {
    if (news && modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [news]);

  useEffect(() => {
    if (!news) return undefined;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [news]);

  return (
    <AnimatePresence>
      {news && (
        <MotionDiv
          className="news-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <MotionDiv
            className="news-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="news-modal-close" onClick={onClose} aria-label="뉴스 상세 닫기">
              <X size={20} />
            </button>

            <div className="news-modal-hero">
              <img
                src={getNewsCoverImage(news)}
                alt={cleanText(news.title)}
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_NEWS_IMAGE;
                }}
              />
              <div className="news-modal-hero-gradient" />
              <div className="news-modal-hero-text">
                {news.category && (
                  <span className="news-tag news-tag--white">{news.category}</span>
                )}
                <h2 className="news-modal-title">{cleanText(news.title)}</h2>
                <time className="news-modal-date">
                  <Calendar size={14} />{news.date}
                </time>
              </div>
            </div>

            <MotionDiv
              ref={modalBodyRef}
              className="news-modal-content"
              variants={contentStagger}
              initial="hidden"
              animate="visible"
            >
              {paragraphs.length > 0 && (
                <MotionP className="news-modal-lead" variants={paraVariants}>
                  {cleanText(paragraphs[0])}
                </MotionP>
              )}
              {paragraphs.slice(1).map((paragraph, index) => (
                <MotionP key={index} variants={paraVariants}>{cleanText(paragraph)}</MotionP>
              ))}
              {galleryImages.length > 0 && (
                <MotionDiv className="news-modal-gallery" variants={paraVariants}>
                  {galleryImages.map((image, index) => (
                    <figure className="news-modal-gallery-item" key={`${image}-${index}`}>
                      <img
                        src={image}
                        alt={`${cleanText(news.title)} 현장 사진 ${index + 1}`}
                        onError={(event) => {
                          event.currentTarget.closest('figure').style.display = 'none';
                        }}
                      />
                    </figure>
                  ))}
                </MotionDiv>
              )}
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
