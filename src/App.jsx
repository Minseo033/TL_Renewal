import { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { preloadPageBannerImages } from './data/pageBanners';

// Pages
import Home from './pages/Home/Home';
import Greeting from './pages/Company/Greeting';
import Philosophy from './pages/Company/Philosophy';
import History from './pages/Company/History';
import Organization from './pages/Company/Organization';
import Partners from './pages/Company/Partners';
import Certifications from './pages/Company/Certifications';
import Location from './pages/Company/Location';
import ProjectOrders from './pages/Projects/ProjectOrders';
import ProjectCategory from './pages/Projects/ProjectCategory';
import News from './pages/PR/News';
import Youtube from './pages/PR/Youtube';
import ESG from './pages/ESG/ESG';
import Jobs from './pages/Recruitment/Jobs';
import HRSystem from './pages/Recruitment/HRSystem';
import Guide from './pages/Recruitment/Guide';
import Benefits from './pages/Recruitment/Benefits';
import FAQ from './pages/Recruitment/FAQ';
import Admin from './pages/Admin/Admin';

export default function App() {
  useEffect(() => {
    preloadPageBannerImages();
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 회사소개 */}
        <Route path="/company" element={<Navigate to="/company/greeting" replace />} />
        <Route path="/company/greeting" element={<Greeting />} />
        <Route path="/company/philosophy" element={<Philosophy />} />
        <Route path="/company/history" element={<History />} />
        <Route path="/company/organization" element={<Organization />} />
        <Route path="/company/partners" element={<Partners />} />
        <Route path="/company/certifications" element={<Certifications />} />
        <Route path="/company/location" element={<Location />} />

        {/* 사업실적 */}
        <Route path="/projects" element={<Navigate to="/projects/orders" replace />} />
        <Route path="/projects/orders" element={<ProjectOrders />} />
        <Route path="/projects/housing" element={<ProjectCategory category="주택" />} />
        <Route path="/projects/office" element={<ProjectCategory category="업무시설" />} />
        <Route path="/projects/education" element={<ProjectCategory category="교육/의료" />} />
        <Route path="/projects/plant" element={<ProjectCategory category="플랜트" />} />
        <Route path="/projects/highrise" element={<ProjectCategory category="초고층" />} />
        <Route path="/projects/retail" element={<ProjectCategory category="판매시설" />} />
        <Route path="/projects/others" element={<ProjectCategory category="기타" />} />

        {/* 홍보센터 */}
        <Route path="/pr" element={<Navigate to="/pr/news" replace />} />
        <Route path="/pr/news" element={<News />} />
        <Route path="/pr/youtube" element={<Youtube />} />
        <Route path="/pr/video" element={<Youtube />} />

        {/* ESG경영 */}
        <Route path="/esg" element={<ESG />} />

        {/* 인재채용 */}
        <Route path="/recruitment" element={<Navigate to="/recruitment/system" replace />} />
        <Route path="/recruitment/jobs" element={<Jobs />} />
        <Route path="/recruitment/system" element={<HRSystem />} />
        <Route path="/recruitment/guide" element={<Guide />} />
        <Route path="/recruitment/benefits" element={<Benefits />} />
        <Route path="/recruitment/faq" element={<FAQ />} />

        {/* 관리자 도구 */}
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
