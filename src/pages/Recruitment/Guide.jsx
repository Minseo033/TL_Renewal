import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { ChevronRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

// 태일씨앤티 sub_03.html 기반 데이터
const JOBS_DATA = [
  {
    id: 'field',
    title: '현장공사',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_01.jpg',
    overview: '공사계획 수립, 공사작업관리, 자재기술개발, 공사 특이사항 관리 및 공사 전반의 프로세스를 리딩합니다.',
    capability: (<>- 발주자 요구사항 이해 및 공종별 체계화 기술<br/> - 건축적산 및 공사비 분석 도면이해<br/> - 공정 단계별 실행대응 및 가공오차 분석<br/> - 거푸집 및 철근콘크리트 타설 제반 지식 자재 특성 이해<br/> - 공기 단축 공법 제안 능력<br/> - 공법별 자재별 원가분석 기술 안전점검 및 하도급 공사 관리</>),
    vision: '공사 작업관리 → 공사 계획 수립 → 자재/기술 개발 전문가'
  },
  {
    id: 'safety',
    title: '현장안전',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_02.jpg',
    overview: '안전기획·점검과 보건교육으로 현장 위험을 선제적으로 관리하며, 철저한 산업재해 예방 활동을 통해 무재해 현장을 실현합니다.',
    capability: (<>- 안전관리계획서 작성 및 공정표 분석<br/>- 안전보건교육 연간 일정계획 수립<br/>- 산업안전규정 및 공정 지식, 산업안전시설 및 장비 지식<br/>- 안전교육 실습 매체 및 교수법<br/>- 산업재해 법규 이해</>),
    vision: '안전점검, 교육 및 산재 대응 → 안전기획'
  },
  {
    id: 'f-admin',
    title: '현장공무',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_03.jpg',
    overview: '공정 계획부터 자금·원가, 자재 및 인력까지 현장의 모든 자원을 통합 관리하여 성공적인 프로젝트 완수를 지원합니다.',
    capability: (<>- 현장착공관리, 예정 공정표 분석<br/>- 발주자 요구 내용의 전반적 이해<br/>- 회계처리 기본 이해, 공정별 원가관리<br/>- 자재 납품계약서 등 이해, 자재 규격별 공종별 수요 이해<br/>- 인사노무관리, 장비관리</>),
    vision: '제반 현장 운영 → 공정관리, 자금/원가관리 → 협상력 강화'
  },
  {
    id: 'h-admin',
    title: '본사공무',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_04.jpg',
    overview: '견적산출과 공정관리로 프로젝트 정밀도를 높이며, 공무 행정 및 자금·원가, 산업·고객 관리를 통해 전사적 수익성과 대외 신뢰를 확보합니다.',
    capability: (<>- 설계 검토 및 수익성 분석, 입찰-계약진행<br/>- 현장착공관리, 예정 공정표 분석<br/>- 회계 처리 기본 이해, 공정별 원가관리<br/>- 시공사 동향 파악 및 정보 교류<br/>- 하자관리, 건설업 규정 및 공문 대응능력</>),
    vision: '공정관리 → 자금/원가관리 → 견적 산출 → 협상력 강화'
  },
  {
    id: 'asset',
    title: '자재',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_05.jpg',
    overview: '공종별 자재 수급 계획과 단가 협상·구매를 전담하며, 효율적인 물류 관리와 협력사 발굴을 통해 최적의 구매 경쟁력을 확보합니다.',
    capability: (<>- 자재 품질요구조건 지식, 공정관리 프로세스 이해, 협력업체 관리<br/>- 견적서 분석, 구매계약 프로세스 이해, 설계도면 분석<br/>- 원가 및 손익 분석, 사업타당성 도출<br/>- 자재 입출고 및 유지보수 관련 지식</>),
    vision: '자재운영, 자재구미관리 → 자재조달기획 → 자재사업기획'
  },
  {
    id: 'finance',
    title: '재무회계',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_06.jpg',
    overview: '효율적인 자금 관리와 세무회계를 통해 재무 건전성을 확보하며, 정밀한 원가관리 및 계약지원으로 수익성을 최적화하고 투명한 경영 환경을 구축합니다. 자금 관리, 세무회계, 원가관리, 원가관리, 계악지원 업무를 합니다.',
    capability: (<>- 증빙서류 관리, 회계 규정 및 처리 절차 이해<br/>
- 세무 신고 및 규정 이해, 전표 처리, 재무제표 작성 및 분석<br/>
- 원가분석, 일위대가산정 이해, 손익 분석<br/>
- 계약 및 보증 증권 이해, 재무 신용 관리 절차 및 기준 파악 </>),
    vision: '자금관리 → 계약지원/세무회계 → 자금 및 원가관리'
  },
    {
    id: 'finance',
    title: '인사',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_07.jpg',
    overview: '인력운영 및 인사기획을 바탕으로 공정한 평가보상 체계를 구축하며, 안정적인 노무관리와 인사행정을 통해 조직의 성장을 견인하고 인적 경쟁력을 강화합니다.',
    capability: (<>- 구인채널활용 및 근로기준법 이해<br/> - 직무분류체계 이해 및 직무평가<br/> - 평가체계 설계, 성과지표 도출<br/> - 취업규칙 및 노동법 이해 </>),
    vision: 'HR행정 → 인력운영, 평가보상 → 인사기획'
  },
    {
    id: 'hr',
    title: '총무',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_07.jpg',
    overview: '자산·서무 관리로 경영 기반을 다지고, 최적의 근무환경과 복지, 행사 기획을 통해 임직원의 업무 몰입과 조직의 결속력을 강화합니다.',
    capability: (<>- 증명서 발급 및 문서관리규정 이해<br/> - 복리후생 규정 및 운영계획, 비품 및 사무공간 지원<br/> - 차량, 부동산, 자산 관리<br/> </>),
    vision: '서무, 복지, 근무환경 관리 → 자산(시설 포함)관리'
  },

  {
    id: 'it',
    title: 'IT',
    img: 'http://www.taeilcnt.co.kr/home/images/job/job_content_img_08.jpg',
    overview: '통신관리, IT 시스템 운영관리 및 전산화 기획을 위한 디지털 도구를 지원합니다.',
    capability: (<>- 유무선 통신망 서비스 운영<br/> - IT 장애 처리, 최신 IT 기술 동향 파악, 시스템 관련 지식<br/> - IT 인프라 정보 파악, IT 도입 및 운영 여건 개선<br/> </>),
    vision: '서무, 복지, 근무환경 관리 → 자산(시설 포함)관리'
  }
];

const OPEN_PROCESS = [
  { step: 'STEP 01', title: '서류전형', desc: '직무 역량 평가' },
  { step: 'STEP 02', title: '1차 면접', desc: '실무 역량 면접' },
  { step: 'STEP 03', title: '인성 검사', desc: '온라인 검사' },
  { step: 'STEP 04', title: '2차 면접', desc: '임원 인성 면접' },
  { step: 'STEP 05', title: '최종합격', desc: '입사 안내' },
];

export default function Guide() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentJob = JOBS_DATA[activeIdx];

  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '채용가이드' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">RECRUITMENT GUIDE</p>
        <h2 className="section-title">채용가이드</h2>
        <p className="section-subtitle">태일씨앤티는 직무에 대한 전문성과 열정을 가진 인재를 기다립니다.</p>
      </AnimatedSection>

      {/* 1. 안랩 스타일 직무소개 섹션 */}
      <section className="guide-section">
        <AnimatedSection direction="up">
          <h3 className="guide-group-title">직무소개</h3>
        </AnimatedSection>

        <div className="job-explorer-container">
          {/* 왼쪽 네비게이션 */}
          <div className="job-explorer-nav">
            {JOBS_DATA.map((job, idx) => (
              <button
                key={job.id}
                className={`job-nav-item ${activeIdx === idx ? 'active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                {job.title}
                <ChevronRight className="nav-arrow" size={18} />
              </button>
            ))}
          </div>

          {/* 오른쪽 디스플레이 영역 */}
          <div className="job-explorer-display" key={activeIdx}>
            <div className="job-display-image">
              <img src={currentJob.img} alt={currentJob.title} />
            </div>
            <div className="job-display-content">
              <div className="job-content-section">
                <h4><Target size={20} /> 업무개괄</h4>
                <p>{currentJob.overview}</p>
              </div>
              <div className="job-content-section">
                <h4><Lightbulb size={20} /> 필요역량</h4>
                <p>{currentJob.capability}</p>
              </div>
              <div className="job-content-section vision">
                <h4><TrendingUp size={20} /> Vision</h4>
                <p>{currentJob.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 채용절차 섹션 */}
      <section className="guide-section" style={{marginTop: '100px'}}>
        <AnimatedSection direction="up">
          <h3 className="guide-group-title">채용절차</h3>
        </AnimatedSection>

        <div className="process-wrapper">
          <div className="process-flow">
            {OPEN_PROCESS.map((p, idx) => (
              <React.Fragment key={idx}>
                <div className="process-step-wrap">
                  <div className="process-step">
                    <span className="process-step-num">{p.step}</span>
                    <h5 className="process-step-title">{p.title}</h5>
                    <p className="process-step-desc">{p.desc}</p>
                  </div>
                </div>
                {idx < OPEN_PROCESS.length - 1 && (
                  <ChevronRight className="process-arrow" size={24} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 안내사항 섹션 */}
      <AnimatedSection delay={400} className="guide-tips">
        <div className="tip-box">
          <h3>공통 안내사항</h3>
          <ul className="tip-list">
            <li><strong>지원방법</strong> 당사 홈페이지 온라인 지원 또는 채용 사이트 접수</li>
            <li><strong>제출서류</strong> 이력서 및 자기소개서 (자사양식 제출 시 우대)</li>
            <li><strong>문의처</strong> 태일씨앤티 채용담당자 (070-8897-0761)</li>
            <li>※ 국가보훈대상자 및 장애인은 관련 법령에 의거하여 우대합니다.</li>
          </ul>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}