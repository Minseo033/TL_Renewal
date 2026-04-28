import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Leaf, Globe, Recycle, HardHat, CheckCircle, Handshake, GraduationCap, ShieldCheck, Heart, Sprout, Landmark, BarChart, Scale, Target, Building } from 'lucide-react';
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
      { title: '탄소 중립 목표', desc: '2050 탄소중립 달성을 위한 친환경 시공 기술 개발 및 온실가스 배출량 단계적 감축', icon: <Globe size={20} strokeWidth={1.5} /> },
      { title: '건설 폐기물 관리', desc: '현장 폐기물 분리수거 및 재활용률 극대화. 폐자재 재활용 기술 적극 도입', icon: <Recycle size={20} strokeWidth={1.5} /> },
      { title: '친환경 자재 사용', desc: '저탄소 콘크리트, 재생 가능 자재 우선 사용으로 환경 영향 최소화', icon: <HardHat size={20} strokeWidth={1.5} /> },
      { title: 'ISO 14001 인증', desc: '국제 환경경영시스템 인증을 통해 체계적이고 지속적인 환경 관리 실천', icon: <CheckCircle size={20} strokeWidth={1.5} /> },
    ],
  },
  {
    key: 'S',
    title: '사회 (Social)',
    color: '#1B3A5C',
    icon: <Handshake size={40} strokeWidth={1} />,
    items: [
      { title: '지역사회 공헌', desc: '지역 청소년 대상 장학금 지원, 취약계층 주거 지원, 지역 행사 후원 등 사회공헌 활동', icon: <GraduationCap size={20} strokeWidth={1.5} /> },
      { title: '안전 제일주의', desc: '"Zero Accident" 달성을 위한 안전 교육 강화, ISO 45001 기반 안전보건경영시스템 운영', icon: <ShieldCheck size={20} strokeWidth={1.5} /> },
      { title: '임직원 복지', desc: '자녀 장학금, 건강검진, 경조사 지원 등 임직원 삶의 질 향상 프로그램 운영', icon: <Heart size={20} strokeWidth={1.5} /> },
      { title: '협력사 동반성장', desc: '중소 협력업체와의 공정한 거래 및 상생 협력으로 건설 생태계 발전 기여', icon: <Sprout size={20} strokeWidth={1.5} /> },
    ],
  },
  {
    key: 'G',
    title: '지배구조 (Governance)',
    color: '#C9A84C',
    icon: <Landmark size={40} strokeWidth={1} />,
    items: [
      { title: '투명한 경영', desc: '정기 감사 및 외부 감사를 통한 재무 투명성 확보와 이해관계자에 대한 정보 공개', icon: <BarChart size={20} strokeWidth={1.5} /> },
      { title: '윤리 경영', desc: '부패방지 청렴 서약, 공정거래 준수, 반부패 교육을 통한 건전한 기업 문화 조성', icon: <Scale size={20} strokeWidth={1.5} /> },
      { title: '리스크 관리', desc: '체계적인 리스크 관리 시스템 구축을 통한 안정적인 경영 및 지속 성장 기반 마련', icon: <Target size={20} strokeWidth={1.5} /> },
      { title: '이사회 독립성', desc: '독립적인 경영 의사결정 체계 구축 및 합리적인 내부 통제 시스템 운영', icon: <Building size={20} strokeWidth={1.5} /> },
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
          <img src={IMG.esg} alt="ESG 경영" className="esg-hero-img" onError={e=>e.currentTarget.style.display='none'}/>
        </div>
        <div className="esg-hero-text">
          <p className="section-eyebrow">ESG MANAGEMENT</p>
          <h2 className="section-title" style={{color:'#fff'}}>지속 가능한 미래를 위한 ESG 경영</h2>
          <p className="section-subtitle" style={{color:'rgba(255,255,255,0.75)'}}>
            태일씨앤티는 환경 보호, 사회 공헌, 투명한 지배구조를 통해<br/>
            지속 가능한 건설 기업으로 성장합니다.
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
                <img src={sectionImg} alt={s.title} className="esg-section-img" onError={e=>e.currentTarget.style.display='none'}/>
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
