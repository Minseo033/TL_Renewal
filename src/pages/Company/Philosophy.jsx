import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Zap, Handshake, Target, ShieldCheck, MessageSquare, TrendingUp } from 'lucide-react';
import './Company.css';

const sloganImg = './assets/images/company/slogan.png';

const SUB_NAV = [
  { label: '인사말', path: '/company/greeting' },
  { label: '경영이념', path: '/company/philosophy' },
  { label: '회사연혁', path: '/company/history' },
  { label: '기구조직도', path: '/company/organization' },
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
    desc: '상호존중 및 소통을 바탕으로 협력사와 상생합니다.',
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
  { label: '비전', value: '시대 변화에 적응하여 누구보다 앞선 기술로 전문건설산업의 선도적 역할을 해나갈 것입니다.', icon: <TrendingUp size={24} /> },
  { label: '핵심가치', value: '고객감동 및 철저한 품질관리 · 무재해 완벽시공 철저한 사후관리 · 지속적 기술개발과 원가절감', icon: <MessageSquare size={24} /> },
  { label: '슬로건', isSlogan: true, icon: <ShieldCheck size={24} /> },
];

export default function Philosophy() {
  return (
    <PageLayout
      title="경영이념"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '경영이념' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection className="philosophy-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="philosophy-hero-inner" style={{ position:'relative', zIndex:1 }}>
          <p className="section-eyebrow">OUR PHILOSOPHY</p>
          {/* 👇 이 부분에 style={{ wordBreak: 'keep-all' }} 이 추가되었습니다! */}
          <h2 className="philosophy-main-title" style={{ wordBreak: 'keep-all' }}>
            책임완수 · 근면성실 · 인화단결
          </h2>
          <p className="philosophy-main-desc" style={{ wordBreak: 'keep-all' }}>
            태일씨앤티는 사훈과 태일인 DNA를 바탕으로 고객과 협력사에 신뢰를 제공합니다.
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
        <h3 className="vision-section-title">경영이념</h3>
        <div className="vision-grid">
          {VISION_ITEMS.map((item, idx) => (
            <div key={idx} className="vision-item">
              <span className="vision-icon">{item.icon}</span>
              <div>
                <span className="vision-label">{item.label}</span>
                {item.isSlogan ? (
                  <img
                    src={sloganImg}
                    alt="하나된 태일! 혁신적인 태일! 백년대계 태일!"
                    className="vision-slogan-img"
                    style={{ display: 'block', width: '100%', maxWidth: '280px', height: 'auto', marginTop: '10px' }}
                  />
                ) : (
                  <p className="vision-value">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}