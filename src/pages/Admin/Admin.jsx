import { useMemo, useState } from 'react';
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle2,
  Clipboard,
  FileCode2,
  ImagePlus,
  LayoutDashboard,
  Newspaper,
  RotateCcw,
} from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import { RECENT_PROJECTS } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import { HOME_DISPLAY } from '../../data/homeDisplayData';
import './Admin.css';

const CATEGORY_OPTIONS = ['주택', '업무시설', '초고층', '플랜트', '판매시설', '교육/의료', '기타'];
const NEWS_CATEGORY_OPTIONS = ['수상', '행사소식', '사회공헌', '공지'];
const PROJECT_DISPLAY_LIMIT = 4;
const NEWS_DISPLAY_LIMIT = 3;

const REQUIRED_PROJECT_FIELDS = [
  ['id', '프로젝트 ID'],
  ['name', '공사명'],
  ['address', '주소'],
  ['client', '발주처'],
  ['partner', '시공사'],
];

const REQUIRED_NEWS_FIELDS = [
  ['id', '뉴스 ID'],
  ['title', '제목'],
  ['date', '게시일'],
  ['category', '분류'],
  ['content', '본문'],
];

const REQUIRED_RECRUIT_FIELDS = [
  ['question', '질문'],
  ['answer', '답변'],
];

const ADMIN_SECTIONS = [
  { id: 'overview', label: '대시보드', icon: LayoutDashboard, desc: '운영 현황' },
  { id: 'home', label: '홈 노출', icon: LayoutDashboard, desc: '메인 표시 순서' },
  { id: 'projects', label: '공사수주', icon: FileCode2, desc: '실적 데이터' },
  { id: 'news', label: '뉴스', icon: Newspaper, desc: '소식/사회공헌' },
  { id: 'recruit', label: '채용 FAQ', icon: BriefcaseBusiness, desc: '지원자 정보' },
  { id: 'assets', label: '이미지 점검', icon: ImagePlus, desc: '경로 확인' },
  { id: 'guide', label: '반영 가이드', icon: Clipboard, desc: '운영 절차' },
];

const getNextProjectId = () => {
  const maxId = RECENT_PROJECTS.reduce((max, project) => {
    const numericId = Number.parseInt(project.id, 10);
    return Number.isNaN(numericId) ? max : Math.max(max, numericId);
  }, 0);

  return String(maxId + 1);
};

const createInitialProjectForm = () => {
  const nextId = getNextProjectId();

  return {
    id: nextId,
    name: '',
    image: `./assets/images/projects/project_${nextId}.jpg`,
    type: '',
    address: '',
    client: '',
    partner: '',
    scale: '',
    periodStart: '',
    periodEnd: '',
    periodText: '',
    method: '',
    scope: '',
    material: '',
    categories: [],
  };
};

const createInitialNewsForm = () => {
  const nextIndex = NEWS_DATA.length + 1;

  return {
    id: `news_${nextIndex}`,
    category: '행사소식',
    title: '',
    date: '',
    image: `./assets/images/news/news_${nextIndex}.jpg`,
    content: '',
    isReal: true,
  };
};

const selectKnownIds = (items, ids, limit) => {
  const selected = ids.filter((id) => items.some((item) => item.id === id));
  const fallback = items
    .map((item) => item.id)
    .filter((id) => !selected.includes(id));

  return [...selected, ...fallback].slice(0, limit);
};

const createInitialDisplayForm = () => ({
  featuredProjectIds: selectKnownIds(RECENT_PROJECTS, HOME_DISPLAY.featuredProjectIds, PROJECT_DISPLAY_LIMIT),
  featuredNewsIds: selectKnownIds(NEWS_DATA, HOME_DISPLAY.featuredNewsIds, NEWS_DISPLAY_LIMIT),
});

const createInitialRecruitForm = () => ({
  question: '',
  answer: '',
});

const toProjectDate = (value) => value.replaceAll('-', '.');

const toStoredValue = (value) => {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : '.';
};

const buildProject = (form) => {
  const hasDateRange = form.periodStart && form.periodEnd;
  const period = hasDateRange
    ? `${toProjectDate(form.periodStart)}~${toProjectDate(form.periodEnd)}`
    : toStoredValue(form.periodText);

  return {
    id: form.id.trim(),
    name: form.name.trim(),
    image: toStoredValue(form.image),
    type: toStoredValue(form.type),
    address: form.address.trim(),
    client: form.client.trim(),
    partner: form.partner.trim(),
    scale: toStoredValue(form.scale),
    period,
    method: toStoredValue(form.method),
    scope: toStoredValue(form.scope),
    material: toStoredValue(form.material),
    categories: form.categories,
  };
};

const buildNewsItem = (form) => ({
  id: form.id.trim(),
  category: form.category.trim(),
  title: form.title.trim(),
  date: form.date ? toProjectDate(form.date) : '',
  image: toStoredValue(form.image),
  content: form.content.trim(),
  isReal: true,
});

const buildRecruitFaq = (form) => ({
  q: form.question.trim(),
  a: form.answer.trim(),
});

const formatObject = (value) => JSON.stringify(value, null, 2);
const formatHomeDisplayConfig = (displayForm) => `export const HOME_DISPLAY = ${JSON.stringify(displayForm, null, 2)};\n`;

export default function Admin() {
  const [activeSection, setActiveSection] = useState('overview');
  const [projectForm, setProjectForm] = useState(createInitialProjectForm);
  const [newsForm, setNewsForm] = useState(createInitialNewsForm);
  const [displayForm, setDisplayForm] = useState(createInitialDisplayForm);
  const [recruitForm, setRecruitForm] = useState(createInitialRecruitForm);
  const [copyStatus, setCopyStatus] = useState({});

  const project = useMemo(() => buildProject(projectForm), [projectForm]);
  const newsItem = useMemo(() => buildNewsItem(newsForm), [newsForm]);
  const recruitFaqItem = useMemo(() => buildRecruitFaq(recruitForm), [recruitForm]);

  const generatedProjectCode = useMemo(() => formatObject(project), [project]);
  const generatedNewsCode = useMemo(() => formatObject(newsItem), [newsItem]);
  const generatedRecruitCode = useMemo(() => formatObject(recruitFaqItem), [recruitFaqItem]);
  const generatedDisplayCode = useMemo(() => formatHomeDisplayConfig(displayForm), [displayForm]);

  const selectedHomeProjects = useMemo(
    () => displayForm.featuredProjectIds
      .map((id) => RECENT_PROJECTS.find((item) => item.id === id))
      .filter(Boolean),
    [displayForm.featuredProjectIds]
  );

  const selectedHomeNews = useMemo(
    () => displayForm.featuredNewsIds
      .map((id) => NEWS_DATA.find((item) => item.id === id))
      .filter(Boolean),
    [displayForm.featuredNewsIds]
  );

  const projectValidationMessages = useMemo(() => {
    const messages = REQUIRED_PROJECT_FIELDS
      .filter(([field]) => !projectForm[field].trim())
      .map(([, label]) => `${label}을 입력해 주세요.`);

    if (RECENT_PROJECTS.some((item) => item.id === projectForm.id.trim())) {
      messages.push('이미 사용 중인 프로젝트 ID입니다.');
    }

    if (projectForm.categories.length === 0) {
      messages.push('공사 유형을 1개 이상 선택해 주세요.');
    }

    if ((projectForm.periodStart && !projectForm.periodEnd) || (!projectForm.periodStart && projectForm.periodEnd)) {
      messages.push('공사기간 날짜 범위는 시작일과 종료일을 함께 입력해 주세요.');
    }

    return messages;
  }, [projectForm]);

  const newsValidationMessages = useMemo(() => {
    const messages = REQUIRED_NEWS_FIELDS
      .filter(([field]) => !String(newsForm[field]).trim())
      .map(([, label]) => `${label}을 입력해 주세요.`);

    if (NEWS_DATA.some((item) => item.id === newsForm.id.trim())) {
      messages.push('이미 사용 중인 뉴스 ID입니다.');
    }

    return messages;
  }, [newsForm]);

  const displayValidationMessages = useMemo(() => {
    const messages = [];

    if (displayForm.featuredProjectIds.length !== PROJECT_DISPLAY_LIMIT) {
      messages.push(`홈 프로젝트는 ${PROJECT_DISPLAY_LIMIT}개를 선택해 주세요.`);
    }

    if (displayForm.featuredNewsIds.length !== NEWS_DISPLAY_LIMIT) {
      messages.push(`홈 뉴스는 ${NEWS_DISPLAY_LIMIT}개를 선택해 주세요.`);
    }

    return messages;
  }, [displayForm]);

  const recruitValidationMessages = useMemo(() => REQUIRED_RECRUIT_FIELDS
    .filter(([field]) => !recruitForm[field].trim())
    .map(([, label]) => `${label}을 입력해 주세요.`), [recruitForm]);

  const isProjectValid = projectValidationMessages.length === 0;
  const isNewsValid = newsValidationMessages.length === 0;
  const isDisplayValid = displayValidationMessages.length === 0;
  const isRecruitValid = recruitValidationMessages.length === 0;

  const imageCheckItems = useMemo(() => {
    const items = [
      { key: 'project-form', label: '공사수주 입력 이미지', path: project.image },
      { key: 'news-form', label: '뉴스 입력 이미지', path: newsItem.image },
      ...selectedHomeProjects.map((item) => ({
        key: `home-project-${item.id}`,
        label: `홈 프로젝트: ${item.name}`,
        path: item.image,
      })),
      ...selectedHomeNews.map((item) => ({
        key: `home-news-${item.id}`,
        label: `홈 뉴스: ${item.title}`,
        path: item.image,
      })),
    ];

    return items.filter((item) => item.path && item.path !== '.');
  }, [newsItem.image, project.image, selectedHomeNews, selectedHomeProjects]);

  const updateProjectField = (field, value) => {
    setCopyStatus((prev) => ({ ...prev, project: '' }));
    setProjectForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateNewsField = (field, value) => {
    setCopyStatus((prev) => ({ ...prev, news: '' }));
    setNewsForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateRecruitField = (field, value) => {
    setCopyStatus((prev) => ({ ...prev, recruit: '' }));
    setRecruitForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCategory = (category) => {
    setCopyStatus((prev) => ({ ...prev, project: '' }));
    setProjectForm((prev) => {
      const hasCategory = prev.categories.includes(category);
      return {
        ...prev,
        categories: hasCategory
          ? prev.categories.filter((item) => item !== category)
          : [...prev.categories, category],
      };
    });
  };

  const toggleDisplayId = (field, id, limit) => {
    setCopyStatus((prev) => ({ ...prev, display: '' }));
    setDisplayForm((prev) => {
      const selected = prev[field];
      const hasId = selected.includes(id);

      if (hasId) {
        return { ...prev, [field]: selected.filter((item) => item !== id) };
      }

      if (selected.length >= limit) {
        return prev;
      }

      return { ...prev, [field]: [...selected, id] };
    });
  };

  const moveDisplayId = (field, id, direction) => {
    setCopyStatus((prev) => ({ ...prev, display: '' }));
    setDisplayForm((prev) => {
      const selected = [...prev[field]];
      const currentIndex = selected.indexOf(id);
      const nextIndex = currentIndex + direction;

      if (currentIndex < 0 || nextIndex < 0 || nextIndex >= selected.length) {
        return prev;
      }

      [selected[currentIndex], selected[nextIndex]] = [selected[nextIndex], selected[currentIndex]];
      return { ...prev, [field]: selected };
    });
  };

  const copyCode = async (key, code, successMessage) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus((prev) => ({ ...prev, [key]: successMessage }));
    } catch {
      setCopyStatus((prev) => ({
        ...prev,
        [key]: '브라우저 권한 때문에 자동 복사에 실패했습니다. 코드 영역에서 직접 선택해 주세요.',
      }));
    }
  };

  const resetSection = (section) => {
    setCopyStatus((prev) => ({ ...prev, [section]: '' }));

    if (section === 'project') setProjectForm(createInitialProjectForm());
    if (section === 'news') setNewsForm(createInitialNewsForm());
    if (section === 'display') setDisplayForm(createInitialDisplayForm());
    if (section === 'recruit') setRecruitForm(createInitialRecruitForm());
  };

  const activeMeta = ADMIN_SECTIONS.find((item) => item.id === activeSection) || ADMIN_SECTIONS[0];
  const ActiveIcon = activeMeta.icon;

  return (
    <PageLayout
      title="관리자 도구"
      breadcrumb={[{ label: '관리자 도구' }]}
    >
      <div className="admin-dashboard">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-head">
            <span>TAEIL C&T</span>
            <strong>Operation Studio</strong>
          </div>
          <nav className="admin-nav" aria-label="관리자 메뉴">
            {ADMIN_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  type="button"
                  className={activeSection === section.id ? 'active' : ''}
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon size={18} />
                  <span>
                    <strong>{section.label}</strong>
                    <small>{section.desc}</small>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="admin-main">
          <header className="admin-main-header">
            <div>
              <p className="section-eyebrow">STATIC ADMIN DASHBOARD</p>
              <h2><ActiveIcon size={24} /> {activeMeta.label}</h2>
              <p>
                정적 호스팅 환경에 맞춰 데이터를 검증하고, 반영할 코드 조각을 생성하는 운영 대시보드입니다.
              </p>
            </div>
            <div className="admin-header-status">
              <span>등록 프로젝트</span>
              <strong>{RECENT_PROJECTS.length}건</strong>
            </div>
          </header>

          {activeSection === 'overview' && renderOverview(setActiveSection)}
          {activeSection === 'home' && renderHomeDisplaySection()}
          {activeSection === 'projects' && renderProjectSection()}
          {activeSection === 'news' && renderNewsSection()}
          {activeSection === 'recruit' && renderRecruitSection()}
          {activeSection === 'assets' && renderAssetSection()}
          {activeSection === 'guide' && renderGuideSection()}
        </main>
      </div>
    </PageLayout>
  );

  function renderOverview(goToSection) {
    const cards = [
      { label: '공사수주 데이터', value: `${RECENT_PROJECTS.length}건`, note: 'projectsData.js 기준' },
      { label: '뉴스 데이터', value: `${NEWS_DATA.length}건`, note: 'newsData.js 기준' },
      { label: '홈 프로젝트', value: `${displayForm.featuredProjectIds.length}/${PROJECT_DISPLAY_LIMIT}`, note: '메인 노출 설정' },
      { label: '홈 뉴스', value: `${displayForm.featuredNewsIds.length}/${NEWS_DISPLAY_LIMIT}`, note: '메인 노출 설정' },
    ];

    const quickActions = [
      { id: 'home', title: '홈 노출 순서 조정', text: '심사나 발표에 맞춰 대표 실적과 뉴스를 먼저 보여줍니다.' },
      { id: 'projects', title: '공사수주 추가', text: '새 프로젝트 데이터를 입력하고 검증된 객체를 생성합니다.' },
      { id: 'news', title: '뉴스·사회공헌 추가', text: '수상, 행사, 사회공헌 소식을 뉴스 데이터로 준비합니다.' },
      { id: 'assets', title: '이미지 경로 확인', text: '데이터에 연결된 이미지가 실제로 로드되는지 점검합니다.' },
    ];

    return (
      <section className="admin-section-stack">
        <div className="admin-kpi-grid">
          {cards.map((card) => (
            <div className="admin-kpi-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.note}</p>
            </div>
          ))}
        </div>

        <div className="admin-panel">
          <div className="admin-panel-title">
            <h3>운영 흐름</h3>
            <p>입력, 검증, 복사, 파일 반영, 빌드 순서로 운영합니다.</p>
          </div>
          <div className="admin-flow-grid">
            {['입력', '검증', '객체 복사', '파일 반영', '빌드·배포'].map((item, index) => (
              <div className="admin-flow-card" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-action-grid">
          {quickActions.map((action) => (
            <button type="button" key={action.id} onClick={() => goToSection(action.id)}>
              <strong>{action.title}</strong>
              <p>{action.text}</p>
            </button>
          ))}
        </div>
      </section>
    );
  }

  function renderHomeDisplaySection() {
    return (
      <section className="admin-section-stack">
        <div className="admin-grid-two">
          {renderDisplayPicker({
            title: `홈 프로젝트 ${displayForm.featuredProjectIds.length}/${PROJECT_DISPLAY_LIMIT}`,
            items: RECENT_PROJECTS.slice(0, 18),
            selectedItems: selectedHomeProjects,
            field: 'featuredProjectIds',
            limit: PROJECT_DISPLAY_LIMIT,
            labelKey: 'name',
            badgeKey: 'id',
            icon: <LayoutDashboard size={20} />,
          })}
          {renderDisplayPicker({
            title: `홈 뉴스 ${displayForm.featuredNewsIds.length}/${NEWS_DISPLAY_LIMIT}`,
            items: NEWS_DATA,
            selectedItems: selectedHomeNews,
            field: 'featuredNewsIds',
            limit: NEWS_DISPLAY_LIMIT,
            labelKey: 'title',
            badgeKey: 'category',
            icon: <Newspaper size={20} />,
          })}
        </div>

        {displayValidationMessages.length > 0 && <InlineAlert messages={displayValidationMessages} />}

        <CodePanel
          eyebrow="GENERATED HOME CONFIG"
          title="homeDisplayData.js 설정"
          code={generatedDisplayCode}
          disabled={!isDisplayValid}
          status={copyStatus.display}
          onReset={() => resetSection('display')}
          onCopy={() => copyCode('display', generatedDisplayCode, '홈 노출 설정을 클립보드에 복사했습니다.')}
          note="위 설정은 src/data/homeDisplayData.js에 반영합니다. 홈은 이 파일의 ID 순서를 기준으로 프로젝트와 뉴스를 먼저 보여줍니다."
        />
      </section>
    );
  }

  function renderProjectSection() {
    return (
      <section className="admin-section-stack">
        <div className="admin-workspace">
          <form className="admin-form" onSubmit={(event) => event.preventDefault()}>
            <PanelHeading icon={<FileCode2 size={20} />} title="공사수주 입력" />
            <div className="admin-form-grid">
              <TextField label="프로젝트 ID *" value={projectForm.id} onChange={(value) => updateProjectField('id', value)} />
              <TextField label="공사명 *" value={projectForm.name} onChange={(value) => updateProjectField('name', value)} />
              <TextField wide label="이미지 경로" value={projectForm.image} onChange={(value) => updateProjectField('image', value)} />
              <TextField label="유형" value={projectForm.type} onChange={(value) => updateProjectField('type', value)} />
              <TextField label="발주처 *" value={projectForm.client} onChange={(value) => updateProjectField('client', value)} />
              <TextField label="시공사 *" value={projectForm.partner} onChange={(value) => updateProjectField('partner', value)} />
              <TextField label="공법" value={projectForm.method} onChange={(value) => updateProjectField('method', value)} />
              <TextField wide label="주소 *" value={projectForm.address} onChange={(value) => updateProjectField('address', value)} />
              <TextField type="date" label="공사 시작일" value={projectForm.periodStart} onChange={(value) => updateProjectField('periodStart', value)} />
              <TextField type="date" label="공사 종료일" value={projectForm.periodEnd} onChange={(value) => updateProjectField('periodEnd', value)} />
              <TextField wide label="공사기간 직접 입력" placeholder="YYYY.MM.DD~YYYY.MM.DD" value={projectForm.periodText} onChange={(value) => updateProjectField('periodText', value)} />
              <TextField wide multiline label="규모" value={projectForm.scale} onChange={(value) => updateProjectField('scale', value)} />
              <TextField label="공사범위" value={projectForm.scope} onChange={(value) => updateProjectField('scope', value)} />
              <TextField label="시공자재" value={projectForm.material} onChange={(value) => updateProjectField('material', value)} />
            </div>

            <div className="admin-category-field">
              <span>공사 유형 *</span>
              <div className="admin-category-options">
                {CATEGORY_OPTIONS.map((category) => (
                  <button
                    type="button"
                    className={projectForm.categories.includes(category) ? 'active' : ''}
                    key={category}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </form>

          <aside className="admin-side">
            <ValidationPanel
              title="검증 상태"
              valid={isProjectValid}
              validText="필수 입력값이 모두 채워졌습니다. 생성 결과를 검토해 주세요."
              messages={projectValidationMessages}
            />
            <ProjectPreview project={project} />
          </aside>
        </div>

        <CodePanel
          eyebrow="GENERATED PROJECT DATA"
          title="projectsData.js 추가 객체"
          code={generatedProjectCode}
          disabled={!isProjectValid}
          status={copyStatus.project}
          onReset={() => resetSection('project')}
          onCopy={() => copyCode('project', generatedProjectCode, '공사수주 객체를 클립보드에 복사했습니다.')}
          note="새 이미지는 public/assets/images/projects 폴더에 넣고, 위 객체를 src/data/projectsData.js의 RECENT_PROJECTS 배열 상단에 추가합니다."
        />
      </section>
    );
  }

  function renderNewsSection() {
    return (
      <section className="admin-section-stack">
        <div className="admin-workspace">
          <form className="admin-form" onSubmit={(event) => event.preventDefault()}>
            <PanelHeading icon={<Newspaper size={20} />} title="뉴스 입력" />
            <div className="admin-form-grid">
              <TextField label="뉴스 ID *" value={newsForm.id} onChange={(value) => updateNewsField('id', value)} />
              <SelectField label="분류 *" value={newsForm.category} options={NEWS_CATEGORY_OPTIONS} onChange={(value) => updateNewsField('category', value)} />
              <TextField wide label="제목 *" value={newsForm.title} onChange={(value) => updateNewsField('title', value)} />
              <TextField type="date" label="게시일 *" value={newsForm.date} onChange={(value) => updateNewsField('date', value)} />
              <TextField label="이미지 경로" value={newsForm.image} onChange={(value) => updateNewsField('image', value)} />
              <TextField wide multiline className="admin-news-content" label="본문 *" value={newsForm.content} onChange={(value) => updateNewsField('content', value)} />
            </div>
          </form>

          <aside className="admin-side">
            <ValidationPanel
              title="뉴스 검증 상태"
              valid={isNewsValid}
              validText="필수 입력값이 모두 채워졌습니다. 생성 결과를 검토해 주세요."
              messages={newsValidationMessages}
            />
            <NewsPreview newsItem={newsItem} />
          </aside>
        </div>

        <CodePanel
          eyebrow="GENERATED NEWS DATA"
          title="newsData.js 추가 객체"
          code={generatedNewsCode}
          disabled={!isNewsValid}
          status={copyStatus.news}
          onReset={() => resetSection('news')}
          onCopy={() => copyCode('news', generatedNewsCode, '뉴스 객체를 클립보드에 복사했습니다.')}
          note="새 뉴스 이미지는 public/assets/images/news 폴더에 넣고, 위 객체를 src/data/newsData.js의 NEWS_DATA 배열 상단에 추가합니다."
        />
      </section>
    );
  }

  function renderRecruitSection() {
    return (
      <section className="admin-section-stack">
        <div className="admin-workspace">
          <form className="admin-form" onSubmit={(event) => event.preventDefault()}>
            <PanelHeading icon={<BriefcaseBusiness size={20} />} title="채용 FAQ 입력" />
            <div className="admin-form-grid">
              <TextField wide label="질문 *" value={recruitForm.question} onChange={(value) => updateRecruitField('question', value)} />
              <TextField wide multiline className="admin-news-content" label="답변 *" value={recruitForm.answer} onChange={(value) => updateRecruitField('answer', value)} />
            </div>
          </form>

          <aside className="admin-side">
            <ValidationPanel
              title="채용 FAQ 검증 상태"
              valid={isRecruitValid}
              validText="질문과 답변이 입력되었습니다. 실제 채용 정책과 맞는지 최종 확인해 주세요."
              messages={recruitValidationMessages}
            />
            <div className="admin-preview">
              <PanelHeading icon={<BriefcaseBusiness size={20} />} title="FAQ 미리보기" />
              <div className="admin-faq-preview">
                <strong>Q. {recruitFaqItem.q || '질문을 입력해 주세요'}</strong>
                <p>A. {recruitFaqItem.a || '답변을 입력해 주세요'}</p>
              </div>
            </div>
          </aside>
        </div>

        <CodePanel
          eyebrow="GENERATED RECRUIT DATA"
          title="채용 FAQ 추가 객체"
          code={generatedRecruitCode}
          disabled={!isRecruitValid}
          status={copyStatus.recruit}
          onReset={() => resetSection('recruit')}
          onCopy={() => copyCode('recruit', generatedRecruitCode, '채용 FAQ 객체를 클립보드에 복사했습니다.')}
          note="위 객체는 src/pages/Recruitment/FAQ.jsx의 FAQS 배열에 추가할 수 있습니다. 채용 절차, 복리후생, 자격 요건은 회사에서 확인된 내용만 입력합니다."
        />
      </section>
    );
  }

  function renderAssetSection() {
    return (
      <section className="admin-section-stack">
        <div className="admin-panel">
          <div className="admin-panel-title">
            <h3>이미지 경로 점검</h3>
            <p>현재 입력값과 홈 노출 항목의 이미지 파일이 실제로 로드되는지 확인합니다.</p>
          </div>
          <div className="admin-image-check-grid">
            {imageCheckItems.map((item) => (
              <ImagePathStatus item={item} key={`${item.key}-${item.path}`} />
            ))}
          </div>
        </div>
        <div className="admin-note">
          <strong>운영 메모</strong>
          <p>
            새 이미지 파일은 데이터에 적은 경로와 실제 파일명이 정확히 일치해야 합니다.
            오류 상태가 나오면 public/assets/images 하위 폴더의 파일명과 확장자를 먼저 확인합니다.
          </p>
        </div>
      </section>
    );
  }

  function renderGuideSection() {
    const guideItems = [
      { title: '홈 노출', file: 'src/data/homeDisplayData.js', text: '생성된 HOME_DISPLAY 설정 전체를 파일 내용으로 교체합니다.' },
      { title: '공사수주', file: 'src/data/projectsData.js', text: '생성된 프로젝트 객체를 RECENT_PROJECTS 배열 상단에 추가합니다.' },
      { title: '뉴스', file: 'src/data/newsData.js', text: '생성된 뉴스 객체를 NEWS_DATA 배열 상단에 추가합니다.' },
      { title: '채용 FAQ', file: 'src/pages/Recruitment/FAQ.jsx', text: '생성된 FAQ 객체를 FAQS 배열에 추가합니다.' },
    ];

    return (
      <section className="admin-section-stack">
        <div className="admin-guide-grid">
          {guideItems.map((item) => (
            <div className="admin-guide-card" key={item.title}>
              <strong>{item.title}</strong>
              <code>{item.file}</code>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="admin-panel">
          <div className="admin-panel-title">
            <h3>배포 전 확인</h3>
            <p>데이터 반영 후에는 빌드와 화면 확인을 거쳐야 운영 페이지에 반영됩니다.</p>
          </div>
          <div className="admin-flow-grid">
            {['파일 반영', 'npm run lint', 'npm run build', '브라우저 확인', 'Git 커밋'].map((item, index) => (
              <div className="admin-flow-card" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderDisplayPicker({ title, items, selectedItems, field, limit, labelKey, badgeKey, icon }) {
    const selectedIds = displayForm[field];
    const isFull = selectedIds.length >= limit;

    return (
      <div className="admin-display-panel">
        <PanelHeading icon={icon} title={title} />
        <p className="admin-picker-help">
          아래 목록에서 항목을 추가하거나 선택된 항목을 해제할 수 있습니다. 최대 {limit}개까지 노출됩니다.
        </p>
        <div className="admin-selected-list">
          {selectedItems.map((item, index) => (
            <div key={item.id} className="admin-selected-item">
              <span>{index + 1}</span>
              <strong>{item[labelKey]}</strong>
              <div>
                <button type="button" onClick={() => moveDisplayId(field, item.id, -1)}>위</button>
                <button type="button" onClick={() => moveDisplayId(field, item.id, 1)}>아래</button>
              </div>
            </div>
          ))}
        </div>
        {isFull && (
          <p className="admin-picker-limit">최대 {limit}개가 선택되어 있습니다. 다른 항목을 추가하려면 먼저 선택된 항목을 해제해 주세요.</p>
        )}
        <div className="admin-choice-list">
          {items.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            const isLocked = isFull && !isSelected;

            return (
              <button
                type="button"
                key={item.id}
                className={`${isSelected ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                onClick={() => toggleDisplayId(field, item.id, limit)}
                disabled={isLocked}
              >
                <span>{item[badgeKey]}</span>
                <strong>{item[labelKey]}</strong>
                <em>{isSelected ? '선택됨' : isLocked ? '최대 선택' : '추가'}</em>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

function TextField({ label, value, onChange, type = 'text', placeholder = '', wide = false, multiline = false, className = '' }) {
  const inputClassName = wide ? 'admin-field-wide' : '';

  return (
    <label className={inputClassName}>
      <span>{label}</span>
      {multiline ? (
        <textarea className={className} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

function SelectField({ label, value, options, onChange }) {
  return (
    <label>
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}

function PanelHeading({ icon, title }) {
  return (
    <div className="admin-panel-heading">
      {icon}
      <h3>{title}</h3>
    </div>
  );
}

function ValidationPanel({ title, valid, validText, messages }) {
  return (
    <div className={`admin-validation ${valid ? 'valid' : 'invalid'}`}>
      <PanelHeading icon={valid ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />} title={title} />
      {valid ? (
        <p>{validText}</p>
      ) : (
        <ul>
          {messages.map((message) => <li key={message}>{message}</li>)}
        </ul>
      )}
    </div>
  );
}

function InlineAlert({ messages }) {
  return (
    <div className="admin-inline-alert">
      {messages.map((message) => <p key={message}>{message}</p>)}
    </div>
  );
}

function CodePanel({ eyebrow, title, code, disabled, status, onCopy, onReset, note }) {
  return (
    <section className="admin-code-panel">
      <div className="admin-output-heading">
        <div>
          <p className="section-eyebrow">{eyebrow}</p>
          <h3>{title}</h3>
        </div>
        <div className="admin-heading-actions">
          <button type="button" className="btn btn-outline" onClick={onReset}>
            <RotateCcw size={16} /> 초기화
          </button>
          <button type="button" className="btn btn-primary" onClick={onCopy} disabled={disabled}>
            <Clipboard size={16} /> 복사
          </button>
        </div>
      </div>
      <pre>{code}</pre>
      {status && <p className="admin-copy-status">{status}</p>}
      <div className="admin-note">
        <strong>운영 메모</strong>
        <p>{note}</p>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className="admin-preview">
      <PanelHeading icon={<ImagePlus size={20} />} title="카드 미리보기" />
      <div className="admin-project-preview">
        <img
          src={project.image}
          alt=""
          onError={(event) => {
            event.currentTarget.src = './assets/images/company/greeting.jpg';
          }}
        />
        <div>
          <span>{project.categories[0] || '유형 미선택'}</span>
          <strong>{project.name || '공사명을 입력해 주세요'}</strong>
          <p>{project.client || '발주처 입력 전'}</p>
          <p>{project.period === '.' ? '공사기간 입력 전' : project.period}</p>
        </div>
      </div>
    </div>
  );
}

function NewsPreview({ newsItem }) {
  return (
    <div className="admin-preview">
      <PanelHeading icon={<ImagePlus size={20} />} title="뉴스 미리보기" />
      <div className="admin-project-preview">
        <img
          src={newsItem.image}
          alt=""
          onError={(event) => {
            event.currentTarget.src = './assets/images/company/greeting.jpg';
          }}
        />
        <div>
          <span>{newsItem.category || '분류 미선택'}</span>
          <strong>{newsItem.title || '제목을 입력해 주세요'}</strong>
          <p>{newsItem.date || '게시일 입력 전'}</p>
          <p>{newsItem.content || '본문 입력 전'}</p>
        </div>
      </div>
    </div>
  );
}

function ImagePathStatus({ item }) {
  const [status, setStatus] = useState('checking');

  const statusLabel = {
    checking: '확인 중',
    loaded: '정상',
    error: '오류',
  }[status];

  return (
    <div className={`admin-image-check-item ${status}`}>
      <img
        src={item.path}
        alt=""
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
      <div>
        <span>{statusLabel}</span>
        <strong>{item.label}</strong>
        <code>{item.path}</code>
      </div>
    </div>
  );
}
