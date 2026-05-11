export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@태일씨앤티경영기획실';
export const YOUTUBE_CHANNEL_NAME = '태일씨앤티 경영기획실';

export const YOUTUBE_VIDEOS = [
  {
    title: '태일씨앤티 기업 PR 영상 vol 07 - 2025.02.11',
    description: '태일씨앤티 공식 유튜브 채널의 주요 영상입니다.',
    url: 'https://www.youtube.com/watch?v=5Z3fGjtwe4Y',
  },
  {
    title: '타설현황 영상',
    description:`태일씨앤티 공무기술팀, 전산팀에서 소개해 드린 타설현황 
                전산화는 엑셀에 수작업으로 하던 타설현황 기록을
                온라인 작업으로 전환하여 다음과 같은 편의성을 제공합니다.`,
    url: 'https://www.youtube.com/watch?v=xUbH2iPAxUQ',
  },
  {
    title: '태일씨앤티 기업 PR 영상 vol 06 - 2024.02.29',
    description: '태일씨앤티 공식 유튜브 채널의 주요 영상입니다.',
    url: 'https://www.youtube.com/watch?v=-BP43hf0jIs',
  },
  {
    title: '김경수 대표이사 2022년 동탑산업훈장 수상소감',
    description: '12월14일(수) 김경수 대표님께서 동탑산업훈장(경영혁신 분야)을 받으셨습니다.',
    url: 'https://www.youtube.com/watch?v=KW8_Zp2c8Og',
  },
];

export const YOUTUBE_DISPLAY_URLS = [
  'https://www.youtube.com/watch?v=5Z3fGjtwe4Y',
  'https://www.youtube.com/watch?v=xUbH2iPAxUQ',
  'https://www.youtube.com/watch?v=-BP43hf0jIs',
  'https://www.youtube.com/watch?v=KW8_Zp2c8Og',
];

export function getYoutubeVideoId(url = '') {
  try {
    const parsedUrl = new URL(url.trim());
    const hostname = parsedUrl.hostname.replace(/^www\./, '');

    if (hostname === 'youtu.be') {
      return parsedUrl.pathname.split('/').filter(Boolean)[0] || '';
    }

    if (hostname.endsWith('youtube.com')) {
      const watchId = parsedUrl.searchParams.get('v');
      if (watchId) return watchId;

      const [type, videoId] = parsedUrl.pathname.split('/').filter(Boolean);
      if (['embed', 'shorts', 'live'].includes(type)) {
        return videoId || '';
      }
    }
  } catch {
    return '';
  }

  return '';
}

export function getYoutubeThumbnail(url = '') {
  const videoId = getYoutubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : './assets/images/esg/esg-main.png';
}
