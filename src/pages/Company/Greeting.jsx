import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Company.css';

const greetingImg = './assets/images/company/greeting.jpg';
const signatureImg = './assets/images/company/signature.jpg';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
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
              안녕하십니까. 태일씨앤티(주) 대표이사 김경수입니다.
            </p>
            <p>
              저희 태일씨앤티는 1994년 지인개발(주)로 설립된 이래, 2013년 새롭게 태어나 철근콘크리트 전문 건설회사로서 대한민국 건설 산업 발전에 기여해 왔습니다.
            </p>
            <p>
              지난 30년간 쌓아온 기술력과 안전 경영을 바탕으로, 삼성물산, GS건설, 현대건설, 대우건설, 한라 등 국내 최고의 건설사들과 함께 주택, 초고층, 업무시설, 플랜트 등 다양한 분야에서 최고의 품질로 고객 여러분의 꿈을 실현해 왔습니다.
            </p>
            <p>
              저희는 "오늘의 안전은 어제로부터, 내일의 안전은 오늘로부터"라는 슬로건 아래 안전 제일주의를 실천하며, ISO 9001, 14001, 45001 등 국제 인증을 통해 품질·환경·안전 경영을 체계적으로 관리하고 있습니다.
            </p>
            <p>
              앞으로도 스마트 건설 기술(BIM)과 혁신적인 시공 방법을 개발하여, 더 안전하고 더 아름다운 건물을 짓는 데 최선을 다하겠습니다. 고객 여러분의 끊임없는 성원과 신뢰에 깊이 감사드립니다.
            </p>
          </div>
          <div className="greeting-signature">
            <p>태일씨앤티(주) 대표이사</p>
            <strong>김 경 수</strong>
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
                <strong>김 경 수</strong>
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
