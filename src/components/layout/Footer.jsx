import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiPhoneCall } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { X, Check } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isFamilySitesOpen, setIsFamilySitesOpen] = useState(false);

  const FAMILY_SITES = [
    { name: '태일 인트라넷', url: 'http://intranet.taeilcnt.co.kr/grp/index.jsp' },
    { name: '태일 NAS', url: 'http://mail.taeilcnt.co.kr:5000/#/signin' },
    { name: '태일 원격지원', url: 'http://210.126.2.139:8080/' }
  ];

  const privacyArticles = [
    "제1조. 개인정보의 처리 목적", "제2조. 개인정보의 처리 및 보유 기간",
    "제3조. 개인정보의 제 3자 제공에 관한 사항", "제4조. 개인정보처리의 위탁에 관한 사항",
    "제5조. 정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항",
    "제6조. 처리하는 개인정보의 항목", "제7조. 개인정보의 파기에 관한 사항",
    "제8조. 개인정보 보호책임자에 관한 사항", "제9조. 개인정보 처리방침의 변경에 관한 사항",
    "제10조. 개인정보의 안전성 확보조치에 관한 사항",
    "제11조. 개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항"
  ];

  return (
    <footer className="footer-container">
      <div className="container">
        {/* 상단: 브랜드 & 연락처 (주소 상단 배치) */}
        <div className="footer-top-layout">
          <div className="brand-side">
            <div className="logo-group">
              <img src="./assets/images/logo/logo-circle.png" alt="태일씨앤티 로고" className="footer-logo" />
              <span className="brand-title">(주) 태일씨앤티</span>
            </div>
            <div className="slogan-area">
              <p>오늘의 안전은 어제로부터, 내일의 안전은 오늘로부터!</p>
              <p>최고의 기술력으로 골조의 기준을 세웁니다.</p>
            </div>
          </div>

          <div className="contact-side">
            <div className="contact-row address-top">
              <IoLocationOutline className="green-accent" />
              <span>서울특별시 금천구 가산디지털2로 101, 한라원앤원타워 B동 1701호</span>
            </div>
            <div className="contact-numbers">
              <div className="contact-row">
                <PiPhoneCall className="green-accent" />
                <span>TEL. 070-8897-0761</span>
              </div>
              <div className="contact-row">
                <LiaFaxSolid className="green-accent" />
                <span>FAX. 02-2101-2141</span>
              </div>
            </div>
            <button 
              className="family-site-btn"
              onClick={() => setIsFamilySitesOpen(!isFamilySitesOpen)}
            >
              FAMILY SITE
              <span className={`family-arrow ${isFamilySitesOpen ? 'open' : ''}`}>▲</span>
            </button>
            {isFamilySitesOpen && (
              <div className="family-sites-box">
                {FAMILY_SITES.map((site, index) => (
                  <a key={index} href={site.url} target="_blank" rel="noopener noreferrer" className="family-site-link">
                    {site.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <hr className="footer-line-divider" />

        {/* 하단: 저작권 & 정책 링크 */}
        <div className="footer-bottom-layout">
          <p className="copyright-info">© 2026 (주)태일씨앤티. All Rights Reserved.</p>
          <div className="policy-nav">
            <button onClick={() => setIsPrivacyOpen(true)} className="nav-btn">개인정보처리방침</button>
            <button onClick={() => setIsEmailOpen(true)} className="nav-btn">이메일 무단수집 거부</button>
            <Link to="/company/location" className="nav-btn">오시는 길</Link>
          </div>
        </div>
      </div>

      {/* --- 개인정보처리방침 모달 (위아래 그리드 구조) --- */}
      {isPrivacyOpen && (
        <div className="modal-back-overlay" onClick={() => setIsPrivacyOpen(false)}>
          <div className="modal-panel-window" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <h3>개인정보 처리방침</h3>
              <button className="modal-close-x" onClick={() => setIsPrivacyOpen(false)} aria-label="개인정보 처리방침 닫기"><X size={24} /></button>
            </div>
            <div className="modal-body-content privacy-vertical-layout">
              <div className="privacy-intro-top">
                (주) 태일씨앤티는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.
              </div>
              <div className="privacy-list-bottom">
                <ul className="article-ul">
                  {privacyArticles.map((text, index) => (
                    <li key={index}><Check size={16} className="chk-icon-green" /> {text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 이메일 무단수집 거부 모달 (위아래 수직 구조) --- */}
      {isEmailOpen && (
        <div className="modal-overlay-email" onClick={() => setIsEmailOpen(false)}>
          <div className="modal-panel-window email-mini-size" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <h3>이메일 무단수집 거부</h3>
              <button className="modal-close-x" onClick={() => setIsEmailOpen(false)} aria-label="이메일 무단수집 거부 닫기"><X size={24} /></button>
            </div>
            <div className="modal-body-content email-vertical-layout">
              <div className="email-main-text">
                본 웹사이트에 게시된 이메일 주소가 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.
              </div>
              <div className="email-footer-line"></div>
              <div className="email-posting-date">
                게시일 : 2014년 12월 1일
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
