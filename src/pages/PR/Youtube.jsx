import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './PR.css';

const COMPANY_VIDEO = './assets/videos/intro.mp4';
const VIDEO_POSTER  = './assets/images/esg/esg-main.png';

const SUB_NAV = [
  { label: 'News', path: '/pr/news' },
  { label: '유튜브', path: '/pr/youtube' },
];

export default function Youtube() {
  return (
    <PageLayout
      title="홍보센터"
      breadcrumb={[{ label: '홍보센터', path: '/pr/news' }, { label: '유튜브' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">MEDIA & YOUTUBE</p>
        <h2 className="section-title">영상 홍보관</h2>
        <p className="section-subtitle">태일씨앤티의 현장과 기업 문화를 영상으로 만나보세요.</p>
      </AnimatedSection>

      <div className="youtube-page-main">
        <AnimatedSection direction="up" delay={100} className="youtube-featured">
          <div className="yt-embed-large">
            <video
              className="yt-iframe"
              controls
              poster={VIDEO_POSTER}
              preload="metadata"
            >
              <source src={COMPANY_VIDEO} type="video/mp4" />
              브라우저가 동영상을 지원하지 않습니다.
            </video>
          </div>
          <div className="yt-featured-info">
            <span className="yt-year-badge">Company Film</span>
            <h3>태일씨앤티 회사 소개영상</h3>
            <p>태일씨앤티의 현장, 사람, 품질·안전 문화를 영상으로 소개합니다.</p>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
