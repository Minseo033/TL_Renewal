import { Link } from 'react-router-dom';
import './Footer.css';
import { PiPhoneCall } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";

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
                  <span className="footer-logo-name">(주)태일씨앤티</span>
                </div>
              </div>
              <p className="footer-desc">
                오늘의 안전은 어제로부터, 내일의 안전은 오늘로부터!
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
                  <span className="footer-contact-icon"><IoLocationOutline /></span>
                  <span>서울특별시 금천구 가산디지털2로 101<br/>한라원앤원타워 B동 17층 1701호</span>
                </li>
                <li>
                  <span className="footer-contact-icon"><PiPhoneCall /></span>
                  <span>070-8897-0761</span>
                </li>
                <li>
                  <span className="footer-contact-icon"><LiaFaxSolid /></span>
                  <span>02-2101-2141</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} (주)태일씨앤티. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
