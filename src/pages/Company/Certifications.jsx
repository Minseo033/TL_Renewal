import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { X, Search, FileText, CheckCircle } from 'lucide-react';
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

const CERT_IMAGE_PATH = './assets/images/company/certifications';

// 업·면허 데이터 (8개 전체)
const LICENSES = [
  { title: '사업자 등록증', date: '2023. 12. 19', img: `${CERT_IMAGE_PATH}/lisense_000.jpg`, table: [{ k: '발급기관', v: '금천세무서' }, { k: '구분', v: '각자대표' }] },
  { title: '사업자 등록증', date: '2015. 10. 28', img: `${CERT_IMAGE_PATH}/lisense_00.jpg`, table: [{ k: '발급기관', v: '관악세무서' }, { k: '상태', v: '정상' }] },
  { title: (<>건설업 등록증<br/>(철근·콘크리트 공사업)</>), date: '2022. 11. 21', img: `${CERT_IMAGE_PATH}/lisense_001.jpg`, table: [{ k: '등록기관', v: '금천구청' }, { k: '비고', v: '재교부' }] },
  { title: (<>건설업 등록증<br/>(도장·습식·방수공사업)</>), date: '2022. 11. 21', img: `${CERT_IMAGE_PATH}/lisense_002.jpg`, table: [{ k: '등록기관', v: '금천구청' }, { k: '분야', v: '습식·방수' }] },
  { title: (<>건설업 등록증<br/>(구조물해체·비계공사업)</>), date: '2022. 11. 21', img: `${CERT_IMAGE_PATH}/lisense_003.jpg`, table: [{ k: '등록기관', v: '금천구청' }, { k: '분야', v: '해체·비계' }] },

  { title: (<>건설업 등록증<br/>(철근·콘크리트 공사협)</>), date: '1992. 08. 31', table: [{ k: '등록기관', v: '관악구청' }, { k: '이력', v: '최초등록' }] },
  { title: (<>건설업 등록증<br/>(미장·방수·조적 공사업)</>), date: '2014. 03. 11', table: [{ k: '등록기관', v: '관악구청' }, { k: '분야', v: '미장·방수' }] },
  { title: (<>건설업 등록증<br/>(비계·구조물 해체 공사)</>), date: '2015. 08. 26', table: [{ k: '등록기관', v: '관악구청' }, { k: '분야', v: '해체·비계' }] },
];

// 인증 데이터 (16개 전체)
const CERTS = [
  { title: '가족친화인증서', org: '여성가족부', date: '2022. 12. 14', img: `${CERT_IMAGE_PATH}/lisense_008.jpg`, table: [{ k: '기관', v: '여성가족부' }] },
  { title: '좋은일자리기업인증서', org: '신용보증기금', img: `${CERT_IMAGE_PATH}/lisense_009.jpg`, date: '2017. 09. 15', table: [{ k: '기관', v: '신용보증기금' }] },
  { title: '인재육성형중소기업지정서', org: '중소벤처기업부', img: `${CERT_IMAGE_PATH}/lisense_010.jpg`, date: '2022. 10. 01', table: [{ k: '기관', v: '중기부' }] },
  { title: '근무혁신우수기업선정서', org: '고용노동부', img: `${CERT_IMAGE_PATH}/lisense_011.jpg`, date: '2022. 11. 16', table: [{ k: '기관', v: '고용노동부' }] },
  { title: (<>품질경영시스템인증서<br/> (KS Q ISO 9001)</>), org: 'International Cert.', img: `${CERT_IMAGE_PATH}/lisense_004.jpg`, date: '2022. 05. 09', table: [{ k: '규격', v: 'ISO 9001:2015' }] },
  { title: (<>환경경영시스템인증서<br/> (KS Q ISO 14001)</>), org: 'International Cert.', img: `${CERT_IMAGE_PATH}/lisense_005.jpg`, date: '2022. 05. 09', table: [{ k: '규격', v: 'ISO 14001:2015' }] },
  { title: (<>안전보건경영시스템인증서<br/> (KS Q ISO 14001)</>), org: 'International Cert.', img: `${CERT_IMAGE_PATH}/lisense_006.jpg`, date: '2023. 07. 17', table: [{ k: '규격', v: 'ISO 45001:2018' }] },
  { title: '경영혁신형 중소기업 확인서', org: 'MAIN Biz', img: `${CERT_IMAGE_PATH}/lisense_007.jpg`, date: '2022. 10. 26', table: [{ k: '기관', v: '중소벤처기업부' }] },
  { title: (<>품질경영시스템인증서<br/> (ISO 9001)</>), org: 'IMS Evaluation', date: '2020. 08. 28', table: [{ k: '규격', v: 'ISO 9001:2015' }] },
  { title: (<>환경경영시스템인증서<br/> (ISO 14001)</>), org: 'IMS Evaluation', date: '2020. 08. 28', table: [{ k: '규격', v: 'ISO 14001:2015' }] },
  { title: (<>안전보건경영시스템인증서<br/> (OHSAS 18001)</>), org: 'IMS Evaluation', date: '2020. 08. 28', table: [{ k: '규격', v: 'OHSAS 18001' }] },
  { title: '경영혁신형 중소기업 확인서', org: 'MAIN Biz', date: '2019. 10. 21', table: [{ k: '기관', v: '중소벤처기업부' }] },
  { title: '벤처기업확인서', org: '벤처기업협회', img: `${CERT_IMAGE_PATH}/lisense_012.jpg`, date: '2023. 01. 09', table: [{ k: '기관', v: '벤처기업협회' }] },
  { title: '중소기업확인서', org: '중소벤처기업부', img: `${CERT_IMAGE_PATH}/lisense_013.jpg`, date: '2023. 04. 13', table: [{ k: '기관', v: '중기부' }] },
  { title: '성과공유기업확인서', org: '중소벤처기업부', date: '2023. 10. 26', img: `${CERT_IMAGE_PATH}/lisense_014.jpg`, table: [{ k: '기관', v: '중기부' }] },
  { title: '소프트웨어사업자확인서', org: '한국소프트웨어산업협회', date: '2024. 01. 30', img: `${CERT_IMAGE_PATH}/lisense_015.jpg`, table: [{ k: '기관', v: 'KOSA' }] },
];

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (selectedImg) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedImg]);

  const renderCard = (data) => (
    <div className={`cert-table-card ${data.img ? '' : 'is-disabled'}`} onClick={() => data.img && setSelectedImg(data.img)}>
      <div className="card-info-side">
        <span className="card-date-label">{data.date}</span>
        <h4 className="card-title-label">{data.title}</h4>
        <div className={`card-view-btn ${data.img ? '' : 'is-muted'}`}>
          <Search size={14} />
          {data.img ? '원본보기' : '원본 파일 준비 필요'}
        </div>
      </div>
      <div className="card-table-side">
        <table className="mini-table">
          <tbody>
            {data.table.map((row, i) => (
              <tr key={i}>
                <th>{row.k}</th>
                <td>{row.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <PageLayout
      title="업·면허/인증"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '업·면허/인증' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">CREDENTIALS</p>
        <h2 className="section-title">신뢰를 증명하는 태일의 기록</h2>
        <p className="section-subtitle">
          전문 면허와 품질·환경·안전 인증을 바탕으로 체계적인 현장 관리를 이어갑니다.
        </p>
      </AnimatedSection>

      <section className="cert-group">
        <h3 className="cert-group-title"><FileText size={20} /> 업 · 면허 (8건)</h3>
        <div className="cert-table-grid">
          {LICENSES.map((l, idx) => (
            <AnimatedSection key={idx} delay={idx * 50} direction="up">
              {renderCard(l)}
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="cert-group" style={{ marginTop: '60px' }}>
        <h3 className="cert-group-title"><CheckCircle size={20} /> 인증 현황 (16건)</h3>
        <div className="cert-table-grid">
          {CERTS.map((c, idx) => (
            <AnimatedSection key={idx} delay={idx * 30} direction="up">
              {renderCard(c)}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {selectedImg && (
        <div className="cert-modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedImg(null)}><X size={35} /></button>
            <div className="modal-body">
              <img src={selectedImg} alt="Original" />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
