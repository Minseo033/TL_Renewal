import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Company.css';

const greetingImg = './assets/images/company/greeting.jpg';
const signatureImg = './assets/images/company/signature.jpg';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '기구조직도', path: '/company/organization' },
  { label: '주거래 시공사', path: '/company/partners' },
  { label: '업·면허/인증', path: '/company/certifications' },
  { label: '찾아오시는 길', path: '/company/location' },
];

export default function Greeting() {
  return (
    <PageLayout
      title="회사소개"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '인사말' }]}
      subNav={SUB_NAV}
    >
      <div className="greeting-section">
        <AnimatedSection direction="left" className="greeting-text">
          <p className="section-eyebrow">CEO MESSAGE</p>
          <h2 className="greeting-title">신뢰와 기술로<br />대한민국의 미래를 건설합니다</h2>
          <div className="greeting-divider" />
          <div className="greeting-body">
            <p>
              태일씨앤티 홈페이지를 방문해 주신 고객 여러분 감사드립니다.
            </p>
            <p>
              1994년 창립된 당사는 2013년 지인개발(주)에서 (주)태일씨앤티로 사명을 변경하여,
              철근·콘크리트 전문건설업계의 차별화된 서비스를 제공하기 위해 새로운 도전을 이어오고 있습니다.
            </p>
            <p>
              책임완수, 근면성실, 인화단결의 사훈을 바탕으로 기본과 원칙에 충실한 투명한 경영 구조를 이루는 것과 동시에
              철저한 품질안전 관리로 고객감동을 실현하고, 상호존중 및 소통을 바탕으로 협력사와 상생하고자 합니다.
            </p>
            <p>
              태일씨앤티는 안전·품질 역량 강화, 자재기술 및 관리 혁신 등을 통하여 최상의 파트너십을 형성하여
              국내외 건설산업 발전에 기여하는 전문기업의 입지를 공고히 할 것입니다.
            </p>
            <p>
              임직원 교육 프로그램, 투명한 성과관리 등 전략적 인적자원관리를 통해
              책임과 성장, 정직과 소통, 더 나은 방식, 공동체 의식이라는 태일인 DNA를 발휘할 수 있도록 노력하고 있습니다.
            </p>
          </div>
          <div className="greeting-signature">
            <p>태일씨앤티(주) 대표이사</p>
            <strong>김경수 · 배준희</strong>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={200} className="greeting-visual">
          <div className="ceo-card">
            <div className="ceo-image-placeholder">
              <img
                src={greetingImg}
                alt="대표이사 김경수 인사말"
                className="ceo-real-img"
                onError={e => { e.currentTarget.style.display='none'; }}
              />
              <div className="ceo-img-label">
                <span>대표이사</span>
                <strong>김경수 · 배준희</strong>
              </div>
            </div>
            <div className="ceo-info">
              <div style={{textAlign:'center',padding:'8px 0',marginBottom:'8px'}}>
              <img src={signatureImg} alt="대표이사 서명" style={{height:'40px',objectFit:'contain'}}
                onError={e => e.target.style.display='none'}/>
            </div>
            <div className="ceo-slogan">
                <span className="quote-mark">"</span>
                <p>오늘의 안전은 어제로부터,<br />내일의 안전은 오늘로부터!</p>
                <span className="quote-mark closing">"</span>
              </div>
              <div className="ceo-values">
                <div className="ceo-value-tag">책임완수</div>
                <div className="ceo-value-tag">근면성실</div>
                <div className="ceo-value-tag">인화단결</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
