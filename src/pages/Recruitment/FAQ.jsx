import { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

const FAQS = [
  { q: '우대 자격증이 있나요?', a: (<> 건축(산업)기사/건설안전(산업)기사/안전(산업)기사 우대합니다.<br />위 자격증 소지시 각 10만원의 자격증 수당이 있으며, 2개 이상일 경우 30만원의 자격증 수당 혜택이 주어집니다.</>)},
  { q: '경력 인정 기준은 무엇인가요?', a: (<> 현장직무(공사/안전/공무)의 경우, 동종 업계(토목/건축) 경력만 인정합니다.<br />철근콘크리트업종 경력 우대합니다.</>) },
  { q: '졸업예정자도 지원이 가능한가요?', a: '졸업 예정자도 직무 관련 전공 및 자격증 소지자 등 직무능력이 있다고 판단되면, 지원 가능합니다.' },
  { q: '수습 기간(3개월) 동안 처우의 차이가 있나요?', a: '수습기간 급여는 100% 지급합니다.' },
  { q: '서류전형시 중요하게 보는 부분은?', a: '지원동기 및 직무 적합도 입니다.' },
  { q: '지정양식의 이력서 및 자기소개서를 제출하여야 하는지?', a: '양식은 무방하나, 자사양식 이력서 및 자기소개서 제출자 우대합니다.' },
  { q: '서류 합격자 발표는 언제 이루어 지나요?', a: '서류 마감 후 1주일 이내로 개별 통보합니다.' },
  { q: '면접 전형은 어떻게 이루어 지나요?', a: (<> 1차 면접의 경우, 실무를 추진할 현업 리더를 주축으로 직무수행 경험과 능력을 통해 직무 적합성을 파악하는 것을 주 목적으로 하며, 면접시간은 약 40분간 진행 됩니다.<br />2차 면접의 경우, 리더(CEO, 본부장, 담당PM, 경영혁신팀장 등) 중심으로 면접관을 구성하여, 자사 인재상을 중심으로 조직 적합성 확인을 주 목적으로 하며, 면접시간은 약 1시간 가량 진행 됩니다.</>) },
  { q: '면접시 중요하게 보는 포인트가 있다면?', a: (<> 역량 파악 및 조직가치 기반으로 자사와 일치하는 인재상인지 검증하며, 과거 경험이나 사례 등 심층 질문을 통해 지원자의 응답 수준을 확인합니다.<br />자사 홈페이지 인재채용 부문을 통하여 인재상 및 직무별 내용 등에 대해 자세히 확인하실 수 있습니다.</>) },
  { q: '청년우대 복지정책이 있나요?', a: '사회초년생 및 청년층의 지원을 중요하게 생각하고 있으며, 청년재직자 내일채움공제를 지원하고 있습니다.' },
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
        <h2 className="section-title">자주 묻는 질문</h2>
        <p className="section-subtitle">태일씨앤티와 함께하기 전, 궁금한 점들을 미리 확인해 보세요.</p>
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
            <p>추가 문의사항은 아래 대표번호로 문의바랍니다.</p>
            <strong>TEL: 070-8897-0761</strong>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
