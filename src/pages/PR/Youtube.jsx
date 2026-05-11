import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { ExternalLink, Play } from 'lucide-react';
import './PR.css';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@태일씨앤티경영기획실';
const YOUTUBE_CHANNEL_NAME = '태일씨앤티 경영기획실';

const YOUTUBE_VIDEOS = [
  {
    title: '태일씨앤티 공식 영상 01',
    description: '태일씨앤티 공식 유튜브 채널의 주요 영상입니다.',
    url: 'https://www.youtube.com/watch?v=5Z3fGjtwe4Y',
  },
  {
    title: '태일씨앤티 공식 영상 02',
    description: '현장과 기업 활동을 영상으로 소개합니다.',
    url: 'https://www.youtube.com/watch?v=xUbH2iPAxUQ',
  },
  {
    title: '태일씨앤티 공식 영상 03',
    description: '태일씨앤티의 사람과 문화를 만날 수 있는 영상입니다.',
    url: 'https://www.youtube.com/watch?v=-BP43hf0jIs',
  },
  {
    title: '태일씨앤티 공식 영상 04',
    description: '품질과 안전을 향한 현장의 모습을 전합니다.',
    url: 'https://www.youtube.com/watch?v=HQbp7hn5DXo',
  },
];

const SUB_NAV = [
  { label: 'News', path: '/pr/news' },
  { label: '유튜브', path: '/pr/youtube' },
];

function getYoutubeVideoId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/);
  return match ? match[1] : '';
}

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
        <div className="yt-grid">
          {YOUTUBE_VIDEOS.map((video, idx) => {
            const videoId = getYoutubeVideoId(video.url);
            const thumbnail = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : './assets/images/esg/esg-main.png';

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
                    <span className="yt-year-badge sm">YouTube</span>
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
