import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { ExternalLink, Play } from 'lucide-react';
import {
  YOUTUBE_CHANNEL_NAME,
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_DISPLAY_URLS,
  YOUTUBE_VIDEOS,
  getYoutubeThumbnail,
} from '../../data/youtubeData';
import './PR.css';

const YOUTUBE_DISPLAY_LIMIT = 4;

const SUB_NAV = [
  { label: 'News', path: '/pr/news' },
  { label: '유튜브', path: '/pr/youtube' },
];

export default function Youtube() {
  const selectedVideos = YOUTUBE_DISPLAY_URLS
    .map((url) => YOUTUBE_VIDEOS.find((video) => video.url === url))
    .filter(Boolean);
  const fallbackVideos = YOUTUBE_VIDEOS.filter((video) => !YOUTUBE_DISPLAY_URLS.includes(video.url));
  const displayVideos = [...selectedVideos, ...fallbackVideos].slice(0, YOUTUBE_DISPLAY_LIMIT);

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
        <div className="yt-grid">
          {displayVideos.map((video, idx) => {
            const thumbnail = getYoutubeThumbnail(video.url);

            return (
              <AnimatedSection key={video.url} delay={idx * 80} direction="up">
                <a
                  href={video.url}
                  className="yt-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="yt-thumbnail">
                    <img src={thumbnail} alt={video.title} />
                    <span className="yt-play-btn" aria-hidden="true">
                      <Play size={30} fill="currentColor" />
                    </span>
                  </div>
                  <div className="yt-card-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={220}>
          <div className="yt-channel-cta">
            <div>
              <span className="yt-year-badge">Official Channel</span>
              <h3>태일씨앤티의 더 많은 영상을 확인해 보세요.</h3>
              <p>공식 유튜브 채널에서 현장, 사람, 품질·안전 문화를 이어서 볼 수 있습니다.</p>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              className="yt-channel-link yt-channel-link--cta"
              target="_blank"
              rel="noreferrer"
            >
              <span className="yt-channel-icon" aria-hidden="true">
                <span className="yt-channel-play" />
              </span>
              <span className="yt-channel-text">
                <span className="yt-channel-label">YouTube Channel</span>
                <strong>{YOUTUBE_CHANNEL_NAME}</strong>
              </span>
              <ExternalLink size={15} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
