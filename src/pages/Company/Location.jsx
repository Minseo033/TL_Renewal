import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Company.css';

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
          <div className="map-wrap location-summary-panel">
            <span className="location-summary-kicker">TAEIL C&T HEAD OFFICE</span>
            <strong>가산디지털단지역 인근<br />한라원앤원타워 B동 17층</strong>
            <p>서울특별시 금천구 가산디지털2로 101, B동 1701호</p>
            <div className="location-summary-line" />
            <span>방문 전 대표번호로 문의해 주세요.</span>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={100} className="location-info">
          <div className="location-info-card">
            <h3>본사</h3>
            <ul className="location-detail">
              <li>
                <span className="loc-icon">📍</span>
                <div>
                  <strong>주소</strong>
                  <p>서울특별시 금천구 가산디지털2로 101<br/>한라원앤원타워 B동 17층 1701호</p>
                </div>
              </li>
              <li>
                <span className="loc-icon">📞</span>
                <div>
                  <strong>전화</strong>
                  <p>070-8897-0761</p>
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
