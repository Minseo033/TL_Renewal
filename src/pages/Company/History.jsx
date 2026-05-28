import React from 'react';
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

const HISTORY = [
  {
    year: '2025',
    items: [
      { tag: '수주', text: 'Westin Seoul Parnas 리모델링공사' },
      { tag: '수주', text: '용인 Cluster 1기 OBL' },
      { tag: '수주', text: '업무시설' },
      { tag: '수주', text: '다이소 세종 온라인센터' },
      { tag: '수주', text: '물류창고' },
      { tag: '수주', text: '수주 진행중' }
    ],
  },
  {
    year: '2023~2024',
    items: [
      { tag: '수주', text: '[한라] 안성일죽 물류 센터 신축공사' },
      { tag: '수주', text: '[한라] 시흥 장현지구 업무시설 신축공사' },
      { tag: '수주', text: '[디엘이앤씨] 가산데이터센터 신축공사' },
      { tag: '수주', text: '[KCC건설] 과천 지식정보타운 11-3블럭 신사옥 신축공사' },
      { tag: '수주', text: '[HL 디앤아이한라] 수원연무동 주상복합사' },
      { tag: '수주', text: '[삼성물산] 엔씨소프트 글로벌 RDI센터' },
      { tag: '수주', text: '[디엘건설] 디지털 엠파이어 평촌 비즈밸리 신축공사' },
      { tag: '수주', text: '[CJ대한통운] 한국일보용산사옥 신축공사' },
      { tag: '수주', text: '[SK에코플랜트] 용인 Cluster1기 공동구' }
    ],
  },
  {
    year: '2022',
    items: [
      { tag: '수주', text: '[KCC건설] 몬트레아 한남 신축공사' },
      { tag: '수주', text: '[삼성엔지니어링] P3 154KV 변전소(Ph.3) 신축공사' },
      { tag: '수주', text: '[한라] 비상교육 사옥 신축공사' },
      { tag: '수주', text: '[삼성물산] 평택 P4 RC공사 1공구' },
      { tag: '수주', text: '[한라] 미래인로지스부천 복합물류센터 신축공사' },
      { tag: '수주', text: '[디엘이앤씨] 판교 G2 업무시설 신축공사' }
    ],
  },
  {
    year: '2021',
    items: [
      { tag: '수주', text: '[한라] 부천 소사본동 주상복합 신축공사' },
      { tag: '수주', text: '[CJ] CJ제일제당 논산공장 COOKIT 공장 신축공사' },
      { tag: '수주', text: '[삼성엔지니어링] 평택전자 P3 대기방지 신축공사' }
    ],
  },
  {
    year: '2020',
    items: [
      { tag: '수주', text: '[한라] 숭인동 오피스텔 신축공사' },
      { tag: '수주', text: '[삼성물산] 판교 알파돔 6-1블럭 중 2차' },
      { tag: '수주', text: '[삼성ENG] P2-PJT UT P2L PH2,3 철근콘크리트 공사' },
      { tag: '수주', text: '[삼성물산] P2-PJT FAB P2L 하층서편마감 RC공사 3-1공구' },
      { tag: '수주', text: '[삼성ENG] P2-PJT PH3 초순수 PVDF Shop장 기초 PAD설치 공사' },
      { tag: '수주', text: '[삼성물산] P2-PJT FAB P2L 상층동편마감 RC공사 2-1공구' },
      { tag: '수주', text: '[GS건설] 브라이튼 여의도 복합시설 신축공사 1공구' },
      { tag: '수주', text: '[한라] 가산동 지식산업센터 신축공사' },
      { tag: '수주', text: '[삼성ENG] P3-154KV 변전소 신축공사' }
    ],
  },
  {
    year: '2019',
    items: [
      { tag: 'HR', text: '인사제도 개편 (다면평가 등)' },
      { tag: '조직', text: '조직개편 (투자기획실 신설 및 부서 통합/분리)' },
      { tag: 'IT', text: '자체 서버 구축 (인프라)' },
      { tag: 'IT', text: '홈페이지 개발 완료' },
      { tag: 'IT', text: '그룹웨어 개발 (80%)' },
      { tag: '수주', text: '[삼성물산] 판교 알파돔 6-1블럭 1차' },
      { tag: '수주', text: '[한라] 신사동 504 복합개발사업'},
      { tag: '수주', text: '[CJ대한통운] 컬처랜드 대치동 사옥 신축공사' },
      { tag: '수주', text: '[벽산ENG] 강릉시 주문진읍 공동주택 신축공사' },
      { tag: '투자', text: '태경 법인 및 3호 투자 조합 설립' }
    ],
  },
  {
    year: '2018',
    items: [
      { tag: '인증', text: '기술보증기금 벤처기업 인증' },
      { tag: '표창', text: '국세청장 모범납세자 표창' },
      { tag: '표창', text: '국토교통부장관 건설기능인의 날 표창' },
      { tag: '수주', text: '[삼성물산]평택 P2-PJT FAB' },
      { tag: '수주', text: '[현대ENG]하남 미사 중심상업지역 11-1BL' },
      { tag: '수주', text: '[삼성ENG]평택전자 P2-PJT' },
      { tag: '수주', text: '[삼성물산] SDS 춘천데이터센터' },
      { tag: '수주', text: '[삼성ENG]평택전자 P2-PJT CT동' },
      { tag: '수주', text: '[한라]현대백화점 신사옥' },
      { tag: '수주', text: '[GS건설]여의도 MBC부지 개발사업 Precon' },
      { tag: '수주', text: '[한라]삼원특수지 사옥' },
    ],
  },
  {
    year: '2017',
    items: [
      { tag: '산학협력', text: '강서공업고등학교' },
      { tag: '인증', text: 'KS Q ISO 9001:2015 인증' },
      { tag: '인증', text: 'KS I ISO 14001:2015 인증' },
      { tag: '인증', text: 'QHSAS 18001:2017 인증' },
      { tag: '수상', text: '[삼성창원병원/성균관대학교] 감사패' },
      { tag: '수상', text: '[신용보증기금] 좋은일자리 기업선정' },
      { tag: '선정', text: '신용보증기금 좋은일자리 기업 선정' },
      { tag: '수주', text: '[슈프림건설]청라 디오스텔' },
      { tag: '수주', text: '[현대ENG]야음주공2단지주택재건축 2공구' },
      { tag: '수주', text: '[삼성물산]평택 P-PJT FAB 서편 마감공사' },
      { tag: '수주', text: '[GS건설]평촌 자이 엘라' },
      { tag: '수주', text: '[대우건설]김푸 풍무 2차 푸르지오 2공구' },
      { tag: '수주', text: '[고려개발]인천지방합동청사' },
      { tag: '수주', text: '[삼성물산]평택공장(부속창고)' },
      { tag: '수주', text: '[삼성물산]평택 P-PJT FAB 동편마감공사' },
      { tag: '수주', text: '[삼성ENG]평택 전자 P1-PJT UT/CT PH4' },
    ],
  },
  {
    year: '2016',
    items: [
      { tag: '법인전환', text: '태경 → (주) 태경이노베이션' },
      { tag: '등록', text: '[(주)태경이노베이션]한국무역협회 무역업' },
      { tag: '인증', text: '경영혁신형 중소기업 MAIN-BIZ' },
      { tag: '수주', text: '[대우건설]운정 신도시 센트럴푸르지오' },
      { tag: '수주', text: '[삼성ENG]평택 전자 P-PJT UT' },
      { tag: '수주', text: '[현대ENG]서초동 복합시설(지하층)' },
      { tag: '수주', text: '[CJ건설]남대문 해성산업 복합시설' },
      { tag: '수주', text: '[대우건설]김포 풍무 2차 푸르지오 4공구' },
      { tag: '수주', text: '[한라]오라카이 관광호텔' },

    ],
  },
  {
    year: '2015',
    items: [
      { tag: '설립', text: '태경 설립' },
      { tag: '각자대표 사임', text: '정갑중 대표이사 사임' },
      { tag: '인증', text: '벤처기업' },
      { tag: '수상', text: '[한국조정중재협회]공로패' },
      { tag: '수상', text: '[아주대학교]감사패' },
      { tag: '수상', text: '[한라]안전부분 우수협력업체' },
      { tag: '수주', text: '[삼성ENG]평택 전자 P-PJT 154kv 변전소' },
      { tag: '수주', text: '[동부건설]대구테크노 A-7BL 아파트' },
      { tag: '수주', text: '[현대ENG]서초동 복합시설(지상층)' },
      { tag: '수주', text: '[현대ENG]힐스테이트 광교' },
      { tag: '수주', text: '[갑진종합건설]광진경찰서 청사' },
      { tag: '수주', text: '[현대티ENG]인천기아차 서비스센타' },
      { tag: '수주', text: '[슈프림건설]마곡럭스나인 오피스텔 C1-5' },
      { tag: '수주', text: '[일군토건]마곡럭스나인 오피스텔 C1-2' },
      { tag: '수주', text: '[요진건설]금계백석초등학교' },
      { tag: '수주', text: '[삼성ENG]평택 전자 P-PJT CT동' },
      { tag: '수주', text: '[한라] 파주 운정 아파트' },
      { tag: '수주', text: '[TK케미컬]서대전역 우방 아이유쉘' },
    ],
  },
  {
    year: '2014',
    items: [
      { tag: '인증', text: '기업부설연구소 인정 승인' },
      { tag: '산학협력', text: '경기대학교' },
      { tag: '수주', text: '[GS네오텍]판교 디테라스' },
      { tag: '수주', text: '[삼성중공업]거제 사외 기숙사' },
      { tag: '수주', text: '[삼성물산]삼성창원병원 제3관' },
      { tag: '수주', text: '[한라]도곡동 동신아파트 주택재건축' },
      { tag: '수주', text: '[신세계건설]수원 광교 이마트' },
      { tag: '수주', text: '[삼성중공업]거제 장평 종합복지관' },
      { tag: '수주', text: '[대림산업]평택정보시설현장' },
      { tag: '수주', text: '[BYC]본사 대수선' },
    ],
  },
  {
    year: '2013',
    items: [
      { tag: '사명변경 & 대표이사 취임', text: '(주) 태일씨앤티 김경수 대표' },
      { tag: '인증', text: 'ISO 9001 ： 2009' },
      { tag: '인증', text: 'ISO 9001 ： 2008' },
      { tag: '수주', text: '[삼성중공업]거제도 8콤프 K암벽' },
      { tag: '수주', text: '[BYC]전주 효자동 BYC빌딩' }
    ],
  },
  {
    year: '2010',
    items: [
      { tag:'인증', text: '영혁신형 중소기업 MAIN-BIZ' },
      { tag: '수상', text: '대한주택공사 철근콘크리트부문' },
      { tag: '수상', text: '국토교통부장관 건설산업발전 기여' }
    ],
  },
  {
    year: '2005',
    items: [
      { tag:'수상', text: '대한주택공사 우수전문건설업' }
    ],
  },
  {
    year: '1999',
    items: [
      { tag: '인증', text: 'ISO 9001' },
      { tag: '수상', text: '대한주택공사 형틀부분 최우수상' },
    ],
  },
  {
    year: '1994',
    items: [
      { tag: '설립', text: '지인개발 설립' }
    ],
  },
];

export default function History() {
  return (
    <PageLayout
      title="회사연혁"
      breadcrumb={[{ label: '회사소개', path: '/company/greeting' }, { label: '회사연혁' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection className="history-header">
        <p className="section-eyebrow">OUR HISTORY</p>
        <h2 className="section-title">30년의 역사, 무한한 도전</h2>
        <p className="section-subtitle">1994년 설립 이후 태일씨앤티가 걸어온 주요 이력입니다.</p>
      </AnimatedSection>

      <div className="history-timeline">
        {HISTORY.map((item, idx) => (
          <AnimatedSection
            key={item.year}
            delay={Math.min(idx * 35, 220)}
            direction={idx % 2 === 0 ? 'left' : 'right'}
            className={`timeline-row ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-year-wrap">
              <div className="timeline-year">{item.year}</div>
            </div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <ul>
                {item.items.map((it, i) => (
                  <li key={i}>
                    <span className={`history-tag tag-${getTagKey(it.tag)}`}>{it.tag}</span>
                    <span className="history-text">{it.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
        <div className="timeline-line" />
      </div>
    </PageLayout>
  );
}

// 태그별 클래스 이름 생성을 위한 헬퍼 함수
function getTagKey(tag) {
  const map = {
    '수주': 'order',
    '인증': 'cert',
    '표창': 'award',
    '수상': 'award',
    '설립': 'setup',
    '변경': 'change',
    'HR': 'hr',
    'IT': 'it'
  };
  return map[tag] || 'default';
}
