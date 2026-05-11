import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = [
  {
    title: '회사소개',
    path: '/company',
    sub: [
      { title: '인사말', path: '/company/greeting' },
      { title: '경영이념', path: '/company/philosophy' },
      { title: '회사연혁', path: '/company/history' },
      { title: '기구조직도', path: '/company/organization' },
      { title: '주거래 시공사', path: '/company/partners' },
      { title: '업·면허/인증', path: '/company/certifications' },
      { title: '찾아오시는 길', path: '/company/location' },
    ],
  },
  {
    title: '사업실적',
    path: '/projects',
    sub: [
      { title: '공사수주 현황', path: '/projects/orders' },
      { title: '주택', path: '/projects/housing' },
      { title: '업무시설', path: '/projects/office' },
      { title: '교육/의료', path: '/projects/education' },
      { title: '플랜트', path: '/projects/plant' },
      { title: '초고층', path: '/projects/highrise' },
      { title: '판매시설', path: '/projects/retail' },
      { title: '기타', path: '/projects/others' },
    ],
  },
  {
    title: '기술자료',
    path: '/technology',
    sub: [
      { title: '기술자료 안내', path: '/technology/overview' },
      { title: '기술자료 News', path: '/technology/news' },
    ],
  },
  {
    title: '홍보센터',
    path: '/pr',
    sub: [
      { title: 'News', path: '/pr/news' },
      { title: '유튜브', path: '/pr/youtube' },
    ],
  },
  {
    title: 'ESG경영',
    path: '/esg',
    sub: [],
  },
  {
    title: '인재채용',
    path: '/recruitment',
    sub: [
      { title: '인사제도', path: '/recruitment/system' },
      { title: '복리후생', path: '/recruitment/benefits' },
      { title: '채용가이드', path: '/recruitment/guide' },
      { title: '채용공고', path: '/recruitment/jobs' },
      { title: '채용FAQ', path: '/recruitment/faq' },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const headerRef = useRef(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  const isMobileViewport = () => (
    typeof window !== 'undefined'
    && window.matchMedia('(max-width: 1024px)').matches
  );

  const toggleMobileMenu = () => {
    setMobileOpen((open) => {
      const nextOpen = !open;
      if (!nextOpen) setActiveMenu(null);
      return nextOpen;
    });
  };

  const handleTopLinkClick = (event, item, idx) => {
    if (item.sub.length > 0 && isMobileViewport()) {
      event.preventDefault();
      setActiveMenu((current) => (current === idx ? null : idx));
      return;
    }

    closeMobileMenu();
  };

  const handleMenuEnter = (idx) => {
    if (!isMobileViewport()) setActiveMenu(idx);
  };

  const handleMenuLeave = () => {
    if (!isMobileViewport()) setActiveMenu(null);
  };

  const headerClass = `header ${scrolled || !isHome ? 'header-solid' : 'header-transparent'}`;

  return (
    <header className={headerClass} ref={headerRef}>
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <img src="./assets/images/logo/logo-circle.png" alt="" />
          </div>
          <div className="logo-text">
            <span className="logo-company">주식회사</span>
            <span className="logo-name">태일씨앤티</span>
          </div>
        </Link>

        <nav className="header-nav" data-open={mobileOpen ? 'true' : 'false'}>
          <ul className="nav-list">
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={idx}
                className={`nav-item ${activeMenu === idx ? 'active' : ''}`}
                onMouseEnter={() => handleMenuEnter(idx)}
                onMouseLeave={handleMenuLeave}
              >
                <Link
                  to={item.sub.length > 0 ? item.sub[0].path : item.path}
                  className="nav-link"
                  onClick={(event) => handleTopLinkClick(event, item, idx)}
                  aria-expanded={item.sub.length > 0 ? activeMenu === idx : undefined}
                >
                  {item.title}
                </Link>
                {item.sub.length > 0 && (
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-inner">
                      {item.sub.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          className={`nav-dropdown-link ${location.pathname === sub.path ? 'active' : ''}`}
                          onClick={closeMobileMenu}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`header-hamburger ${mobileOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
