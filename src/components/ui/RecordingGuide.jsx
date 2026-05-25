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
      '안녕하세요. 저희는 철근콘크리트 전문건설사 태일씨앤티의 홈페이지를 실제 운영에 맞게 리뉴얼했습니다. 이번 사이트는 목업 데이터 없이 태일씨앤티의 실제 자료와 공개된 홈페이지 정보를 바탕으로 구성했고, 첫 화면에서 철근콘크리트와 골조 시공이라는 핵심 정체성이 바로 보이도록 설계했습니다.',
  },
  {
    route: '/',
    title: '핵심 경쟁력: 골조 공정',
    time: '0:25-0:55',
    selector: '.field-system-section',
    script:
      '기존 사이트는 첫인상만으로 회사의 전문 분야를 파악하기 어려웠습니다. 그래서 실제 회사가 수행하는 철근콘크리트 공정 흐름을 기준으로, 도면 검토, 철근 배근, 거푸집, 콘크리트 타설, 품질·안전 검측까지 골조 공사의 핵심 과정을 홈 화면에서 설명했습니다.',
  },
  {
    route: '/',
    title: '홈 대시보드: 실적 요약',
    time: '0:55-1:30',
    selector: '.portfolio-section',
    script:
      '홈 화면에는 실제 공사수주 데이터를 요약한 실적 지도를 배치했습니다. 설립 1994년, 철근콘크리트공사 도급순위 55위, 시공능력평가액 978억, 2025년 매출액 840억처럼 확인된 수치를 사용했고, 공사 유형별 실적과 주요 시공사 협업 이력도 실제 프로젝트 데이터를 기반으로 집계했습니다.',
  },
  {
    route: '/',
    title: '홈 카드 상세 모달',
    time: '1:30-1:55',
    selector: '.featured-project-grid',
    click: '.featured-project-card',
    script:
      '주요 프로젝트 카드를 클릭하면 실제 공사수주 현황과 동일한 상세 모달이 열립니다. 임의로 만든 예시가 아니라 프로젝트명, 발주처, 시공사, 주소, 공사기간, 공법 같은 실제 운영 데이터가 연결되어 있어 홈 화면에서도 바로 검증 가능한 실적 정보를 확인할 수 있습니다.',
  },
  {
    route: '/projects/orders',
    title: '사업실적: 공사수주 현황',
    time: '1:55-2:35',
    selector: '.projects-grid',
    click: '.project-card',
    script:
      '사업실적 페이지에서는 실제 등록된 공사수주 현황 85건을 카드형 목록으로 확인할 수 있습니다. 진행 중인 프로젝트는 진행 표시가 노출되고, 카드를 클릭하면 발주처, 시공사, 기간, 규모 같은 상세정보를 모달로 확인할 수 있습니다.',
  },
  {
    route: '/projects/housing',
    title: '사업실적: 유형별 실적',
    time: '2:35-3:00',
    selector: '.projects-grid',
    script:
      '주택, 업무시설, 교육·의료, 플랜트처럼 공사 유형별로도 실제 실적을 분류했습니다. 각 탭의 건수와 카드 목록은 같은 프로젝트 데이터에서 연결되기 때문에, 홈 화면의 요약 수치와 사업실적 상세 페이지가 서로 일관되게 움직입니다.',
  },
  {
    route: '/pr/news',
    title: '홍보센터: 뉴스와 사회공헌',
    time: '3:00-3:30',
    selector: '.news-page-list, .news-grid, .news-page-main',
    script:
      '홍보센터에는 실제 뉴스와 수상, 행사, 사회공헌 자료를 기반으로 한 소식 데이터를 정리했습니다. 현재 180건의 뉴스 데이터가 들어가 있으며, 회사의 품질·안전 성과와 지역사회 활동을 한 흐름 안에서 보여줄 수 있도록 구성했습니다.',
  },
  {
    route: '/pr/youtube',
    title: '홍보센터: 유튜브 영상',
    time: '3:30-3:55',
    selector: '.yt-grid',
    script:
      '유튜브 페이지에는 태일씨앤티 공식 유튜브 채널의 실제 영상 링크를 연결했습니다. 영상 썸네일과 제목은 유튜브 링크를 기준으로 구성되며, 관리자 페이지에서 어떤 영상을 노출할지 선택할 수 있도록 데이터 구조를 맞췄습니다.',
  },
  {
    route: '/recruitment/jobs',
    title: '인재채용: 지원자 중심 정보',
    time: '3:55-4:20',
    selector: '.job-list-container',
    script:
      '회사 측 요구사항 중 하나가 지원자가 자주 방문한다는 점이었습니다. 그래서 실제 운영을 전제로 채용공고, 인사제도, 복리후생, FAQ로 이어지는 흐름을 정리했고, 지원자가 필요한 정보를 빠르게 찾을 수 있도록 구성했습니다.',
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
      '관리자 페이지는 서버가 없는 정적 호스팅 조건을 고려해 코드 생성형 도구로 만들었습니다. 현재 화면의 공사수주, 뉴스, 유튜브, 채용공고는 모두 데이터 파일에서 관리되며, 관리자가 새 실제 자료를 입력하면 반영할 코드 조각을 생성할 수 있습니다.',
  },
  {
    route: '/admin',
    title: '마무리: 제출 기준 충족',
    time: '5:10-5:30',
    selector: '.admin-dashboard',
    adminTab: '가이드',
    script:
      '이번 리뉴얼은 정적 호스팅, 상대경로, 모바일 반응형, 실제 데이터 기반 운영이라는 요구사항을 기준으로 구성했습니다. 목업 화면이 아니라 확인된 수치와 실제 자료를 바탕으로 만든 사이트이며, 단순히 보기 좋은 페이지가 아니라 회사가 실제로 운영할 수 있는 구조를 목표로 제작했습니다.',
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
