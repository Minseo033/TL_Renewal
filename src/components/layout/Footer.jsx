import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="20" width="10" height="18" rx="1" fill="#3AA65C"/>
                    <rect x="15" y="12" width="10" height="26" rx="1" fill="#3AA65C"/>
                    <rect x="28" y="4" width="10" height="34" rx="1" fill="#4A90D9"/>
                    <rect x="2" y="2" width="36" height="4" rx="1" fill="#C9A84C"/>
                  </svg>
                </div>
                <div>
                  <span className="footer-logo-name">태일씨앤티</span>
                  <span className="footer-logo-eng">TAEIL C&T CO., LTD.</span>
                </div>
              </div>
              <p className="footer-desc">
                철근콘크리트 전문 건설회사로서 30년간의 기술력과 신뢰를 바탕으로 대한민국 건설 산업의 미래를 선도합니다.
              </p>
            </div>

            <div className="footer-links-group">
              <h4>회사소개</h4>
              <ul>
                <li><Link to="/company/greeting">인사말</Link></li>
                <li><Link to="/company/philosophy">경영이념</Link></li>
                <li><Link to="/company/history">회사연혁</Link></li>
                <li><Link to="/company/partners">주거래 시공사</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>사업실적</h4>
              <ul>
                <li><Link to="/projects/orders">공사수주 현황</Link></li>
                <li><Link to="/projects/housing">주택</Link></li>
                <li><Link to="/projects/office">업무시설</Link></li>
                <li><Link to="/projects/highrise">초고층</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>연락처</h4>
              <ul className="footer-contact">
                <li>
                  <span className="footer-contact-icon">📍</span>
                  <span>서울특별시 금천구 가산디지털2로 101<br/>한라원앤원타워 B동 17층 1701호</span>
                </li>
                <li>
                  <span className="footer-contact-icon">📞</span>
                  <span>070-8897-0761</span>
                </li>
                <li>
                  <span className="footer-contact-icon">📧</span>
                  <span>info@taeilcnt.co.kr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} 태일씨앤티(주). All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/company/greeting">개인정보처리방침</Link>
              <Link to="/company/greeting">이용약관</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
