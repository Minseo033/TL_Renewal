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

const PARTNERS = [
  { name: '삼성물산', note: '공사 수주 이력', url: 'https://www.secc.co.kr' },
  { name: '삼성엔지니어링', note: '공사 수주 이력', url: 'https://www.samsungengineering.com' },
  { name: '현대건설', note: '공사 수주 이력', url: 'https://www.hdec.kr/' },
  { name: '현대엔지니어링', note: '공사 수주 이력', url: 'https://www.hec.co.kr' },
  { name: 'GS건설', note: '공사 수주 이력', url: 'https://www.gsenc.com' },
  { name: '대우건설', note: '공사 수주 이력', url: 'https://www.daewooenc.com' },
  { name: 'DL이앤씨 / DL건설', note: '공사 수주 이력', url: 'https://www.dlenc.co.kr' },
  { name: 'HDC 현대산업개발', note: '공사 수주 이력', url: 'https://hdc-dvp.com/' },
  { name: 'SK에코플랜트', note: '공사 수주 이력', url: 'https://www.skecoplant.com' },
  { name: '한라 / HL 디앤아이한라', note: '공사 수주 이력', url: 'https://www.hldni.com' },
  { name: 'KCC건설', note: '공사 수주 이력', url: 'https://www.kccworld.co.kr' },
  { name: 'CJ대한통운 / CJ건설', note: '공사 수주 이력', url: 'https://www.cjenc.co.kr' },
  { name: '신세계건설', note: '공사 수주 이력', url: 'https://www.shinsegae-con.co.kr' },
  { name: '삼성중공업', note: '공사 수주 이력', url: 'https://www.samsungshi.com' },
  { name: '포스코 A&C', note: '공사 수주 이력', url: 'https://www.poscoanc.com/' },
  { name: '두산건설', note: '공사 수주 이력', url: 'https://www.doosanenc.com/kr/' },
  { name: '동부건설', note: '공사 수주 이력', url: 'https://dbcon.dongbu.co.kr/' },
  { name: '한양', note: '공사 수주 이력', url: 'https://www.hycorp.co.kr/' },
  { name: 'HJ중공업 (구 한진중공업)', note: '공사 수주 이력', url: 'https://www.hjsc.co.kr/' },
  { name: '고려개발', note: '공사 수주 이력', url: 'https://www.dlenc.co.kr/' }, // 현재 DL건설로 통합
  { name: '현대아산', note: '공사 수주 이력', url: 'https://www.hdasan.com/' },
  { name: '벽산엔지니어링', note: '공사 수주 이력', url: 'http://www.bseng.co.kr/' },
  { name: 'SM(주) 우방', note: '공사 수주 이력', url: 'https://wbjd.woobang.co.kr/' },
  { name: 'KT engcore', note: '공사 수주 이력', url: 'https://www.ktengcore.com/' },
  { name: '슈프림종합건설', note: '공사 수주 이력', url: 'http://www.supremecc.co.kr/' },
];

export default function Partners() {
  return (
    <PageLayout
      title="주거래 시공사"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '주거래 시공사' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">OUR PARTNERS</p>
        <h2 className="section-title">대한민국 최고 건설사와 함께합니다</h2>
        <p className="section-subtitle">
          주요 건설사와 함께 축적한 프로젝트 수행 이력입니다.
        </p>
      </AnimatedSection>

      <div className="partners-grid-page">
        {PARTNERS.map((p, idx) => (
          <AnimatedSection key={idx} delay={idx * 50}>
            <a 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-card-page"
            >
              <div className="partner-tier">{p.note}</div>
              <div className="partner-name">{p.name}</div>
              <div className="partner-link-hint">홈페이지 방문 →</div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}