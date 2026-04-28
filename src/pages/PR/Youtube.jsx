import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './PR.css';

const COMPANY_VIDEO = './assets/videos/intro.mp4';
const VIDEO_POSTER  = './assets/images/esg/esg-main.png';

const SUB_NAV = [
  { label: 'News', path: '/pr/news' },
  { label: '유튜브', path: '/pr/youtube' },
];

const VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: '태일씨앤티 기업 홍보영상 VOL.06', year: '2024', desc: '태일씨앤티의 사업 분야와 기업 문화를 소개하는 공식 홍보영상입니다.' },
  { id: 'dQw4w9WgXcQ', title: '2025 태일씨앤티 홍보영상', year: '2025', desc: '최신 현장 시공 기술과 스마트 건설 역량을 담은 홍보영상입니다.' },
  { id: 'dQw4w9WgXcQ', title: 'SK하이닉스 용인 클러스터 공사 현장', year: '2024', desc: 'SK하이닉스 용인 반도체 클러스터 공사 현장 소개영상입니다.' },
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
            <span className="yt-year-badge">2024</span>
            <h3>태일씨앤티 회사 소개영상 최종본</h3>
            <p>태일씨앤티의 최신 기술력과 사업 역량을 담은 공식 홍보영상입니다. 철근콘크리트 전문 시공부터 스마트 건설 BIM 기술까지 포함합니다.</p>
          </div>
        </AnimatedSection>

        <div className="yt-grid">
          {VIDEOS.map((v, idx) => (
            <AnimatedSection key={idx} delay={idx * 80} direction="up">
              <div className="yt-card">
                <div className="yt-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                    alt={v.title}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                  <div className="yt-play-btn">▶</div>
                </div>
                <div className="yt-card-info">
                  <span className="yt-year-badge sm">{v.year}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
