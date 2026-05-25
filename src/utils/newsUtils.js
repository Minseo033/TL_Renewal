export const FALLBACK_NEWS_IMAGE = './assets/images/company/greeting.jpg';

export const cleanText = (value = '') => value
  .replace(/&lsquo;|&rsquo;/g, "'")
  .replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/\.?더보기$/g, '')
  .replace(/202년/g, '2025년')
  .trim();

export const getNewsCoverImage = (item) => (
  item?.image || item?.images?.[0] || FALLBACK_NEWS_IMAGE
);

export const getNewsParagraphs = (item) => (
  item ? cleanText(item.content).split('\n').filter((paragraph) => paragraph.trim()) : []
);

export const getNewsGalleryImages = (item) => {
  if (!item) return [];

  const coverImage = getNewsCoverImage(item);
  return [...new Set(item.images || [])].filter((image) => image && image !== coverImage);
};
