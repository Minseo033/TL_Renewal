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
  { q: '신입 지원 시 학력 제한이 있나요?', a: '태일씨앤티는 학력보다 실력과 열정을 중시합니다. 직무 관련 자격증이나 경험이 있다면 우대합니다. 건설/건축 관련 학과 졸업자는 우대받을 수 있습니다.' },
  { q: '전문직 경력직 채용은 어떻게 진행하나요?', a: '경력직은 연중 수시 채용을 진행합니다. 채용 공고가 없어도 이메일(recruit@taeilcnt.co.kr)로 이력서와 경력기술서를 보내주시면 검토 후 연락 드리겠습니다.' },
  { q: '인턴십 프로그램이 있나요?', a: '네, 하계·동계 방학 기간 중 인턴십 프로그램을 운영합니다. 현장 실무 경험과 선배와의 멘토링 기회를 제공하며, 우수 인턴은 정규직 채용 시 우대합니다.' },
  { q: '해외 파견 기회가 있나요?', a: '태일씨앤티는 국내 사업 중심이나, 해외 현장이 발생할 경우 희망자에 한해 해외 파견 기회를 제공합니다. 해외 파견 시 추가 수당 및 지원이 제공됩니다.' },
  { q: '지방 거주자도 지원 가능한가요?', a: '물론입니다. 본사는 서울 금천구에 위치하며, 전국 각지의 공사 현장에서 근무하는 형태로 지방 거주자도 지원 가능합니다. 면접은 화상 면접으로도 진행할 수 있습니다.' },
  { q: '입사 후 교육·훈련은 어떻게 이루어지나요?', a: '신입 입사 시 3개월간 OJT 교육을 실시합니다. 현장 실습, 직무 교육, 안전 교육, 회사 제도 교육 등이 포함되며, 담당 멘토가 배정되어 빠른 적응을 돕습니다.' },
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
        <p className="section-subtitle">채용 관련 자주 묻는 질문들을 모았습니다.</p>
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
          <span>📞</span>
          <div>
            <p>추가 문의사항은 인사팀으로 연락해 주세요.</p>
            <strong>Tel: 070-8897-0761 | Email: recruit@taeilcnt.co.kr</strong>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
