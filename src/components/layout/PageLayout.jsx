import { Link, useLocation } from 'react-router-dom';
import './PageLayout.css';

const PAGE_BANNERS = [
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

export default function PageLayout({ title, breadcrumb, subNav, children }) {
  const location = useLocation();
  const pageBanner = PAGE_BANNERS.find(({ matcher }) => matcher(location.pathname));
  const bannerStyle = pageBanner
    ? {
        '--page-banner-position': pageBanner.position,
      }
    : undefined;

  return (
    <main className="page-wrapper">
      <div className="page-banner" style={bannerStyle}>
        {pageBanner && (
          <img
            className="page-banner-image"
            src={pageBanner.image}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        )}
        <div className="page-banner-bg-pattern" />
        <div className="page-banner-content">
          <h1>{title}</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">홈</Link>
            <span className="breadcrumb-sep">›</span>
            {breadcrumb.map((item, idx) => (
              <span key={idx}>
                {idx > 0 && <span className="breadcrumb-sep"> › </span>}
                {idx === breadcrumb.length - 1
                  ? <span className="active">{item.label}</span>
                  : <Link to={item.path}>{item.label}</Link>
                }
              </span>
            ))}
          </div>
        </div>
      </div>

      {subNav && subNav.length > 0 && (
        <nav className="sub-nav">
          <ul className="sub-nav-list">
            {subNav.map((item, idx) => (
              <li key={idx} className="sub-nav-item">
                <Link
                  to={item.path}
                  className={`sub-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="page-content">
        <div className="container">
          {children}
        </div>
      </div>
    </main>
  );
}
