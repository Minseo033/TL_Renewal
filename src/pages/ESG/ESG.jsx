import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Award, CheckCircle, GraduationCap, Handshake, Landmark, Leaf, Scale, ShieldCheck } from 'lucide-react';
import './ESG.css';

const IMG = {
  esg:    './assets/images/esg/esg-main.png',
  env:    './assets/images/esg/environment.jpg',
  ethics: './assets/images/esg/ethics.png',
};

const ESG_SECTIONS = [
  {
    key: 'E',
    title: '환경 (Environmental)',
    color: '#2E8B4A',
    icon: <Leaf size={40} strokeWidth={1} />,
    items: [
      { title: 'KS I ISO 14001:2015', desc: '환경경영시스템을 바탕으로 현장의 환경 관리 체계를 운영합니다.', icon: <CheckCircle size={20} strokeWidth={1.5} /> },
      { title: '품질·환경·안전 관리', desc: '기본과 원칙에 충실한 관리로 현장의 안전과 품질을 함께 지킵니다.', icon: <Leaf size={20} strokeWidth={1.5} /> },
    ],
  },
  {
    key: 'S',
    title: '사회 (Social)',
    color: '#1B3A5C',
    icon: <Handshake size={40} strokeWidth={1} />,
    items: [
      { title: '청소년 장학금 행사', desc: '지역 청소년을 위한 장학금 수여 활동에 함께하며 지역사회와 성장합니다.', icon: <GraduationCap size={20} strokeWidth={1.5} /> },
      { title: '김장 나눔 ESG 행사', desc: "태일씨앤티의 'FUN한 김장담그기' 참여를 통해 이웃과 따뜻한 나눔을 실천합니다.", icon: <Handshake size={20} strokeWidth={1.5} /> },
      { title: '안전 관련 수상', desc: '위험성평가와 안전보건 체계 운영 성과를 바탕으로 안전 문화를 강화합니다.', icon: <ShieldCheck size={20} strokeWidth={1.5} /> },
    ],
  },
  {
    key: 'G',
    title: '지배구조 (Governance)',
    color: '#C9A84C',
    icon: <Landmark size={40} strokeWidth={1} />,
    items: [
      { title: '투명한 경영 구조', desc: '기본과 원칙에 충실한 경영으로 고객과 협력사에 신뢰를 더합니다.', icon: <Scale size={20} strokeWidth={1.5} /> },
      { title: '대외 표창 이력', desc: '성실한 경영 활동과 현장 운영으로 대외 신뢰를 쌓아왔습니다.', icon: <Award size={20} strokeWidth={1.5} /> },
    ],
  },
];

export default function ESG() {
  return (
    <PageLayout
      title="ESG경영"
      breadcrumb={[{ label: 'ESG경영' }]}
    >
      <AnimatedSection className="esg-hero">
        <div className="esg-hero-img-wrap">
          <img src={IMG.esg} alt="ESG 경영" className="esg-hero-img" />
        </div>
        <div className="esg-hero-text">
          <p className="section-eyebrow" style={{color:'#fff'}}>ESG MANAGEMENT</p>
          <h2 className="section-title" style={{color:'#fff'}}>지속 가능한 가치를 실천하는 태일씨앤티</h2>
          <p className="section-subtitle" style={{color:'rgba(255,255,255,0.75)'}}>
            품질·환경·안전 관리와 사회공헌 활동을 통해 책임 있는 건설 문화를 만들어갑니다.
          </p>
        </div>
      </AnimatedSection>

      <div className="esg-overview">
        {ESG_SECTIONS.map((s, idx) => (
          <AnimatedSection key={idx} delay={idx * 100} direction="up">
            <div className="esg-overview-card" style={{ '--esg-color': s.color }}>
              <div className="esg-key">{s.key}</div>
              <div className="esg-overview-icon">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {ESG_SECTIONS.map((s, idx) => {
        const sectionImg = idx === 0 ? IMG.env : idx === 2 ? IMG.ethics : null;
        return (
          <AnimatedSection key={idx} delay={idx * 50} className="esg-section-block" direction={idx % 2 === 0 ? 'left' : 'right'}>
            <div className="esg-section-header" style={{ borderLeftColor: s.color }}>
              <span className="esg-section-key" style={{ background: s.color }}>{s.key}</span>
              <div>
                <h3 className="esg-section-title" style={{ color: s.color }}>{s.title}</h3>
              </div>
            </div>
            {sectionImg && (
              <div className="esg-section-img-wrap">
                <img src={sectionImg} alt={s.title} className="esg-section-img" />
              </div>
            )}
            <div className="esg-items-grid">
              {s.items.map((item, i) => (
                <div key={i} className="esg-item">
                  <span className="esg-item-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        );
      })}
    </PageLayout>
  );
}
