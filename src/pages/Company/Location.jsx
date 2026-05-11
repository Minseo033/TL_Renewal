import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Company.css';
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import { LiaFaxSolid } from "react-icons/lia";

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '기구조직도', path: '/company/organization' },
  { label: '주거래 시공사', path: '/company/partners' },
  { label: '업·면허/인증', path: '/company/certifications' },
  { label: '찾아오시는 길', path: '/company/location' },
];

export default function Location() {
  return (
    <PageLayout
      title="찾아오시는 길"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '찾아오시는 길' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">LOCATION</p>
        <h2 className="section-title">오시는 방법</h2>
      </AnimatedSection>

      <div className="location-grid">
        <AnimatedSection direction="left" className="location-map">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.309520186373!2d126.87737597542836!3d37.47702167206195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f88a14a6117%3A0x9eed50598162926!2zKOyjvCntg5zsnbzslKjslaTti7A!5e0!3m2!1sko!2skr!4v1778342459303!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="주식회사 태일씨앤티"
            ></iframe>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={100} className="location-info">
          <div className="location-info-card">
            <h3>주식회사 태일씨앤티</h3>
            <ul className="location-detail">
              <li>
                <span className="loc-icon"><IoLocationOutline /></span>
                <div>
                  <strong>주소</strong>
                  <p>서울특별시 금천구 가산디지털2로 101<br/>한라원앤원타워 B동 17층 1701호</p>
                </div>
              </li>
              <li>
                <span className="loc-icon"><PiPhoneCall /></span>
                <div>
                  <strong>문의</strong>
                  <p>070-8897-0761</p>
                </div>
              </li>
              <li>
                <span className="loc-icon"><LiaFaxSolid /></span>
                <div>
                  <strong>FAX</strong>
                  <p>02-2101-2141</p>
                </div>
              </li>
            </ul>

            <div className="transport-section">
              <h4>교통편</h4>
              <div className="transport-item">
                <span className="transport-badge subway">지하철</span>
                <p>1·7호선 가산디지털단지역 4번 출구 도보 5분</p>
              </div>
              <div className="transport-item">
                <span className="transport-badge bus">버스</span>
                <p>가산디지털2로 정류장 하차</p>
              </div>
              <div className="transport-item">
                <span className="transport-badge car">자차</span>
                <p>한라원앤원타워 지하주차장 이용 (방문객 무료 2시간)</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
