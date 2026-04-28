import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Zap, Handshake, Target, Rocket, ShieldCheck } from 'lucide-react';
import './Company.css';

const philosophyImg = './assets/images/company/philosophy.png';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '주거래 시공사', path: '/company/partners' },
  { label: '업·면허/인증', path: '/company/certifications' },
  { label: '찾아오시는 길', path: '/company/location' },
];

const VALUES = [
  {
    icon: <Zap size={36} strokeWidth={1.5} />,
    title: '책임완수',
    desc: '맡은 작업과 우리의 사명은 반드시 완성합니다. 약속을 지키는 것이 신뢰의 시작입니다.',
    color: '#1B3A5C',
  },
  {
    icon: <Handshake size={36} strokeWidth={1.5} />,
    title: '인화단결',
    desc: '구성원 간의 화합과 협력을 통해 하나의 팀으로 최고의 성과를 달성합니다.',
    color: '#2E8B4A',
  },
  {
    icon: <Target size={36} strokeWidth={1.5} />,
    title: '근면성실',
    desc: '성실한 자세와 꾸준한 노력으로 고객에게 최고 품질의 결과물을 제공합니다.',
    color: '#C9A84C',
  },
];

const VISION_ITEMS = [
  { label: '비전', value: '대한민국을 대표하는 철근콘크리트 전문 건설기업', icon: <Rocket size={24} /> },
  { label: '미션', value: '기술 혁신과 안전 경영으로 고객 만족 실현', icon: <Target size={24} /> },
  { label: '슬로건', value: '오늘의 안전은 어제로부터, 내일의 안전은 오늘로부터!', icon: <ShieldCheck size={24} /> },
];

export default function Philosophy() {
  return (
    <PageLayout
      title="경영이념"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '경영이념' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection className="philosophy-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={philosophyImg}
          alt="경영이념"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.15 }}
          onError={e => e.currentTarget.style.display='none'}
        />
        <div className="philosophy-hero-inner" style={{ position:'relative', zIndex:1 }}>
          <p className="section-eyebrow">OUR PHILOSOPHY</p>
          <h2 className="philosophy-main-title">신뢰 · 기술 · 혁신</h2>
          <p className="philosophy-main-desc">
            태일씨앤티는 三核 경영이념을 바탕으로 고객과 사회에 신뢰와 가치를 제공합니다
          </p>
        </div>
      </AnimatedSection>

      <div className="philosophy-values">
        {VALUES.map((v, idx) => (
          <AnimatedSection key={idx} delay={idx * 120} direction="up">
            <div className="philosophy-card" style={{ '--pcard-color': v.color }}>
              <div className="philosophy-card-top">
                <span className="philosophy-icon">{v.icon}</span>
                <div className="philosophy-num">0{idx + 1}</div>
              </div>
              <h3 className="philosophy-card-title">{v.title}</h3>
              <p className="philosophy-card-desc">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={200} className="vision-section">
        <h3 className="vision-section-title">비전 & 미션</h3>
        <div className="vision-grid">
          {VISION_ITEMS.map((item, idx) => (
            <div key={idx} className="vision-item">
              <span className="vision-icon">{item.icon}</span>
              <div>
                <span className="vision-label">{item.label}</span>
                <p className="vision-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
