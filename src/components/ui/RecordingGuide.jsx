import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, EyeOff, ListVideo, RotateCcw, X } from 'lucide-react';
import './RecordingGuide.css';

const GUIDE_STEPS = [
  {
    route: '/',
    title: '오프닝: 회사 정체성',
    time: '0:00-0:25',
    selector: '.hero',
    script:
      '안녕하세요. 저희는 철근콘크리트 전문건설사 태일씨앤티의 홈페이지를 실제 운영에 맞게 리뉴얼했습니다. 첫 화면에서 회사가 어떤 일을 하는지 바로 이해되도록, 철근콘크리트와 골조 시공이라는 핵심 정체성을 전면에 배치했습니다.',
  },
  {
    route: '/',
    title: '핵심 경쟁력: 골조 공정',
    time: '0:25-0:55',
    selector: '.field-system-section',
    script:
      '기존 사이트는 첫인상만으로 회사의 전문 분야를 파악하기 어려웠습니다. 그래서 도면 검토, 철근 배근, 거푸집, 콘크리트 타설, 품질·안전 검측으로 이어지는 골조 공정을 홈 화면에서 바로 설명하도록 구성했습니다.',
  },
  {
    route: '/',
    title: '홈 대시보드: 실적 요약',
    time: '0:55-1:30',
    selector: '.portfolio-section',
    script:
      '홈 화면에는 공사수주 데이터를 요약한 실적 지도를 배치했습니다. 공사 유형별 등록 실적과 주요 시공사 협업 이력을 한눈에 보여주어, 대표자나 심사위원이 회사의 수행 경험을 빠르게 확인할 수 있습니다.',
  },
  {
    route: '/',
    title: '홈 카드 상세 모달',
    time: '1:30-1:55',
    selector: '.featured-project-grid',
    click: '.featured-project-card',
    script:
      '주요 프로젝트 카드를 클릭하면 실제 공사수주 현황과 동일한 상세 모달이 열립니다. 진행상태, 발주처, 시공사, 공사기간, 공법 등 운영에 필요한 정보를 같은 방식으로 확인할 수 있습니다.',
  },
  {
    route: '/projects/orders',
    title: '사업실적: 공사수주 현황',
    time: '1:55-2:35',
    selector: '.projects-grid',
    click: '.project-card',
    script:
      '사업실적 페이지에서는 등록된 공사수주 현황을 카드형 목록으로 확인할 수 있습니다. 진행 중인 프로젝트는 진행 표시가 노출되고, 카드를 클릭하면 상세정보를 모달로 확인할 수 있습니다.',
  },
  {
    route: '/projects/housing',
    title: '사업실적: 유형별 실적',
    time: '2:35-3:00',
    selector: '.projects-grid',
    script:
      '주택, 업무시설, 교육·의료, 플랜트처럼 공사 유형별로도 실적을 분류했습니다. 지원자와 발주처 모두 자신이 찾는 분야의 수행 이력을 빠르게 확인할 수 있도록 설계했습니다.',
  },
  {
    route: '/pr/news',
    title: '홍보센터: 뉴스와 사회공헌',
    time: '3:00-3:30',
    selector: '.news-page-list, .news-grid, .news-page-main',
    script:
      '홍보센터에는 수상, 행사, 사회공헌 소식을 분리하지 않고 운영자가 계속 추가할 수 있는 뉴스 구조로 정리했습니다. 회사의 품질·안전 성과와 지역사회 활동을 함께 보여주는 역할을 합니다.',
  },
  {
    route: '/pr/youtube',
    title: '홍보센터: 유튜브 영상',
    time: '3:30-3:55',
    selector: '.yt-grid',
    script:
      '유튜브 페이지에는 태일씨앤티 공식 채널의 영상을 연결했습니다. 영상은 카드 형태로 노출되고, 관리자 페이지에서 노출 순서를 관리할 수 있도록 데이터 구조를 맞췄습니다.',
  },
  {
    route: '/recruitment/jobs',
    title: '인재채용: 지원자 중심 정보',
    time: '3:55-4:20',
    selector: '.job-list-container',
    script:
      '회사 측 요구사항 중 하나가 지원자가 자주 방문한다는 점이었습니다. 그래서 채용공고, 인사제도, 복리후생, FAQ로 이어지는 흐름을 정리해 지원자가 필요한 정보를 빠르게 찾을 수 있도록 했습니다.',
  },
  {
    route: '/recruitment/faq',
    title: '채용FAQ: 질문 확인',
    time: '4:20-4:35',
    selector: '.faq-list',
    click: '.faq-question',
    script:
      '채용FAQ는 아코디언 방식으로 구성했습니다. 사용자는 궁금한 질문만 열어서 확인할 수 있고, 추가 문의가 필요한 경우 대표번호로 연결될 수 있게 정리했습니다.',
  },
  {
    route: '/admin',
    title: '관리자 도구: 정적 운영 방식',
    time: '4:35-5:10',
    selector: '.admin-dashboard',
    adminTab: '유튜브',
    script:
      '관리자 페이지는 서버가 없는 정적 호스팅 조건을 고려해 코드 생성형 도구로 만들었습니다. 공사수주, 뉴스, 유튜브, 채용공고 데이터를 입력하면 실제 데이터 파일에 반영할 수 있는 코드 조각을 생성합니다.',
  },
  {
    route: '/admin',
    title: '마무리: 제출 기준 충족',
    time: '5:10-5:30',
    selector: '.admin-dashboard',
    adminTab: '가이드',
    script:
      '이번 리뉴얼은 정적 호스팅, 상대경로, 모바일 반응형, 실제 데이터 기반 운영이라는 요구사항을 기준으로 구성했습니다. 단순히 보기 좋은 페이지가 아니라 회사가 실제로 운영할 수 있는 구조를 목표로 제작했습니다.',
  },
];

const ENABLE_PARAMS = ['recording', 'demo'];

function isGuideEnabled() {
  const searchParams = new URLSearchParams(window.location.search);
  return ENABLE_PARAMS.some((key) => searchParams.get(key) === '1');
}

function closeOpenOverlays() {
  const closeButton = document.querySelector('.modal-close-btn, .home-modal-close');
  if (closeButton instanceof HTMLElement) {
    closeButton.click();
  }
}

function scrollToTarget(selector) {
  const target = document.querySelector(selector);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function clickTarget(selector) {
  const target = document.querySelector(selector);
  if (target instanceof HTMLElement) {
    target.click();
  }
}

function clickAdminTab(label) {
  const buttons = Array.from(document.querySelectorAll('.admin-nav button'));
  const target = buttons.find((button) => button.textContent?.includes(label));
  if (target instanceof HTMLElement) {
    target.click();
  }
}

export default function RecordingGuide() {
  const enabled = isGuideEnabled();
  const navigate = useNavigate();
  const location = useLocation();
  const [stepIndex, setStepIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const actionTimerRef = useRef(null);

  const currentStep = GUIDE_STEPS[stepIndex];
  const progress = useMemo(
    () => Math.round(((stepIndex + 1) / GUIDE_STEPS.length) * 100),
    [stepIndex],
  );

  useEffect(() => {
    if (!enabled) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setStepIndex((value) => Math.min(value + 1, GUIDE_STEPS.length - 1));
      }
      if (event.key === 'ArrowLeft') {
        setStepIndex((value) => Math.max(value - 1, 0));
      }
      if (event.key === 'Escape') {
        setHidden((value) => !value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !currentStep) return undefined;

    if (actionTimerRef.current) {
      window.clearTimeout(actionTimerRef.current);
    }

    closeOpenOverlays();

    if (location.pathname !== currentStep.route) {
      navigate(currentStep.route);
      return undefined;
    }

    actionTimerRef.current = window.setTimeout(() => {
      if (currentStep.adminTab) {
        clickAdminTab(currentStep.adminTab);
      }
      scrollToTarget(currentStep.selector);

      if (currentStep.click) {
        window.setTimeout(() => clickTarget(currentStep.click), 650);
      }
    }, 520);

    return () => {
      if (actionTimerRef.current) {
        window.clearTimeout(actionTimerRef.current);
      }
    };
  }, [currentStep, enabled, location.pathname, navigate]);

  if (!enabled) return null;

  if (hidden) {
    return (
      <button
        type="button"
        className="recording-guide-floating"
        onClick={() => setHidden(false)}
      >
        <ListVideo size={16} />
        촬영 가이드
      </button>
    );
  }

  return (
    <aside className={`recording-guide ${collapsed ? 'is-collapsed' : ''}`}>
      <div className="recording-guide-progress" style={{ width: `${progress}%` }} />

      <div className="recording-guide-head">
        <div>
          <span>촬영보조모드</span>
          <strong>{stepIndex + 1}/{GUIDE_STEPS.length} · {currentStep.time}</strong>
        </div>
        <div className="recording-guide-actions">
          <button type="button" onClick={() => setCollapsed((value) => !value)}>
            {collapsed ? '대본 보기' : '접기'}
          </button>
          <button type="button" onClick={() => setHidden(true)} aria-label="가이드 숨기기">
            <EyeOff size={15} />
          </button>
          <button type="button" onClick={() => setStepIndex(0)} aria-label="처음으로">
            <RotateCcw size={15} />
          </button>
          <button type="button" onClick={() => setHidden(true)} aria-label="닫기">
            <X size={15} />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="recording-guide-body">
          <p className="recording-guide-title">{currentStep.title}</p>
          <p className="recording-guide-script">{currentStep.script}</p>
          <p className="recording-guide-hint">
            좌우 방향키 또는 아래 버튼으로 장면을 넘기세요. 패널이 영상에 보이면 Esc로 숨길 수 있습니다.
          </p>
        </div>
      )}

      <div className="recording-guide-nav">
        <button
          type="button"
          className="recording-guide-nav-btn"
          onClick={() => setStepIndex((value) => Math.max(value - 1, 0))}
          disabled={stepIndex === 0}
        >
          <ChevronLeft size={16} />
          이전
        </button>
        <button
          type="button"
          className="recording-guide-nav-btn primary"
          onClick={() => setStepIndex((value) => Math.min(value + 1, GUIDE_STEPS.length - 1))}
          disabled={stepIndex === GUIDE_STEPS.length - 1}
        >
          다음 장면
          <ChevronRight size={16} />
        </button>
      </div>
    </aside>
  );
}
