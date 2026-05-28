export const PAGE_BANNERS = [
  {
    matcher: (path) => path.startsWith('/company'),
    image: './assets/images/banners/company-banner.jpg',
    position: 'center 48%',
  },
  {
    matcher: (path) => path.startsWith('/projects'),
    image: './assets/images/banners/projects-banner.jpg',
    position: 'center 48%',
  },
  {
    matcher: (path) => path.startsWith('/pr'),
    image: './assets/images/banners/pr-banner.jpg',
    position: 'center 50%',
  },
  {
    matcher: (path) => path.startsWith('/esg'),
    image: './assets/images/banners/esg-banner.jpg',
    position: 'center 45%',
  },
  {
    matcher: (path) => path.startsWith('/recruitment'),
    image: './assets/images/banners/recruitment-banner.jpg',
    position: 'center 48%',
  },
];

export function preloadPageBannerImages() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__taeilBannerImagesPreloaded) return;

  window.__taeilBannerImagesPreloaded = true;

  const preload = () => {
    PAGE_BANNERS.forEach(({ image }) => {
      const src = new URL(image, document.baseURI).href;
      const alreadyPreloaded = document.head.querySelector(
        `link[data-page-banner-preload][href="${src}"]`
      );

      if (alreadyPreloaded) return;

      const link = document.createElement('link');

      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.dataset.pageBannerPreload = 'true';

      if ('fetchPriority' in link) {
        link.fetchPriority = 'low';
      }

      document.head.appendChild(link);
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preload, { timeout: 800 });
    return;
  }

  window.setTimeout(preload, 250);
}
