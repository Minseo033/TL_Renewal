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

const PARTNER_IMAGE_PATH = './assets/images/company/partners/';

const PARTNERS = [
  { name: '삼성물산', note: '공사 수주 이력', url: 'http://www.samsungcnt.com/index.do', image: 'partner_01.jpg' },
  { name: '삼성엔지니어링', note: '공사 수주 이력', url: 'http://www.samsungengineering.co.kr/kor/index', image: 'partner_02.jpg' },
  { name: 'Halla', note: '공사 수주 이력', url: 'http://www.halla.co.kr/', image: 'partner_03.jpg' },
  { name: 'GS 건설', note: '공사 수주 이력', url: 'http://www.gsenc.com/', image: 'partner_04.jpg' },
  { name: '현대엔지니어링', note: '공사 수주 이력', url: 'https://www.hec.co.kr/main.asp', image: 'partner_05.jpg' },
  { name: '현대건설', note: '공사 수주 이력', url: 'http://www.hdec.kr/', image: 'partner_06.jpg' },
  { name: '대우건설', note: '공사 수주 이력', url: 'http://www.daewooenc.com/', image: 'partner_07.jpg' },
  { name: 'CJ건설', note: '공사 수주 이력', url: 'http://www.cjenc.co.kr/kr/Default.asp', image: 'partner_08.jpg' },
  { name: '고려개발', note: '공사 수주 이력', url: 'https://www.kdc.co.kr', image: 'partner_09.jpg' },
  { name: '동부건설', note: '공사 수주 이력', url: 'https://dbcon.dongbu.co.kr', image: 'partner_10.jpg' },
  { name: 'KT engcore', note: '공사 수주 이력', url: 'https://www.ktengcore.com/', image: 'partner_11.jpg' },
  { name: '슈프림종합건설(주)', note: '공사 수주 이력', url: 'http://www.supremecc.co.kr/', image: 'partner_12.jpg' },
  { name: 'KCC건설', note: '공사 수주 이력', url: 'https://www.kccworld.net', image: 'partner_13.jpg' },
  { name: '현대아산', note: '공사 수주 이력', url: 'http://www.hdasan.com', image: 'partner_14.jpg' },
  { name: '한진중공업', note: '공사 수주 이력', url: 'http://www.hanjinsc.com/', image: 'partner_15.jpg' },
  { name: '포스코', note: '공사 수주 이력', url: 'http://www.posco.co.kr', image: 'partner_16.jpg' },
  { name: '두산건설', note: '공사 수주 이력', url: 'http://www.doosanenc.com/kr/', image: 'partner_17.jpg' },
  { name: 'SM(주)우방', note: '공사 수주 이력', url: 'http://wbjd.woobang.co.kr/', image: 'partner_18.jpg' },
  { name: 'SK건설', note: '공사 수주 이력', url: 'http://www.skec.co.kr/', image: 'partner_19.jpg' },
  { name: '벽산엔지니어링', note: '공사 수주 이력', url: 'http://bseng2.doffgen.com/', image: 'partner_20.jpg' },
  { name: '신세계건설', note: '공사 수주 이력', url: 'https://www.shinsegae-enc.com', image: 'partner_21.jpg' },
  { name: '한양', note: '공사 수주 이력', url: 'http://www.hycorp.co.kr/', image: 'partner_22.jpg' },
  { name: '현대산업개발', note: '공사 수주 이력', url: 'https://hdc-dvp.com/', image: 'partner_23.jpg' },
  { name: 'CJ대한통운', note: '공사 수주 이력', url: 'http://bseng2.doffgen.com/', image: 'partner_24.jpg' },
  { name: 'SK에코플랜트', note: '공사 수주 이력', url: 'https://www.shinsegae-enc.com', image: 'partner_25.jpg' },
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
              <div className="partner-logo-frame">
                <img
                  src={`${PARTNER_IMAGE_PATH}${p.image}`}
                  alt={`${p.name} 로고`}
                  className="partner-logo-image"
                />
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
