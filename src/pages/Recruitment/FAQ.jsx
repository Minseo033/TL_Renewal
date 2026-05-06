import { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Recruitment.css';

const SUB_NAV = [
  { label: '직무소개', path: '/recruitment/jobs' },
  { label: '인사제도', path: '/recruitment/system' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const FAQS = [
  { q: '태일씨앤티는 어떤 업종의 회사인가요?', a: '태일씨앤티는 콘크리트 및 철근 공사업을 중심으로 철근콘크리트공사, 비계공사, 미장공사, 방수공사, 조적공사 등을 수행합니다.' },
  { q: '회사는 어디에 있나요?', a: '서울특별시 금천구 가산디지털2로 101, B동 1701호에 위치해 있습니다.' },
  { q: '채용 절차는 어떻게 확인하나요?', a: '채용 절차와 일정은 모집 공고에 따라 달라질 수 있습니다.' },
  { q: '복리후생은 어떤 제도가 있나요?', a: '지원금·보험, 급여제도, 선물, 교육·생활, 근무환경, 조직문화, 출퇴근, 리프레시 항목의 복리후생 제도를 운영합니다.' },
  { q: '채용 문의는 어디로 하면 되나요?', a: '회사 대표번호 070-8897-0761로 문의할 수 있습니다.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '채용FAQ' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="section-title">채용 자주 묻는 질문</h2>
        <p className="section-subtitle">지원자가 자주 궁금해하는 기본 정보를 정리했습니다.</p>
      </AnimatedSection>

      <div className="faq-list">
        {FAQS.map((faq, idx) => (
          <AnimatedSection key={idx} delay={idx * 60}>
            <div
              className={`faq-item ${openIdx === idx ? 'open' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="faq-question">
                <span className="faq-q-num">Q</span>
                <span className="faq-q-text">{faq.q}</span>
                <span className={`faq-toggle ${openIdx === idx ? 'open' : ''}`}>+</span>
              </div>
              {openIdx === idx && (
                <div className="faq-answer">
                  <span className="faq-a-num">A</span>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={400} className="faq-contact">
        <div className="faq-contact-inner">
          <div>
            <p>추가 문의사항은 회사 대표번호로 문의해 주세요.</p>
            <strong>Tel: 070-8897-0761</strong>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
