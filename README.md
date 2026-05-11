# 태일씨앤티 홈페이지 리뉴얼

철근콘크리트 전문 건설회사인 태일씨앤티의 정체성, 주요 실적, 채용 정보, 뉴스·사회공헌을 정적 호스팅 환경에 맞춰 구성한 React 기반 홈페이지입니다.

이 문서는 팀원이 처음 프로젝트에 들어왔을 때 현재 상태, 작업 기준, 데이터 기준, 협업 규칙을 빠르게 이해하도록 작성했습니다. 팀원이 AI 도구에게 이 README를 보여주고 작업을 맡기는 상황도 함께 고려했습니다.

## AI 작업 지시용 핵심 요약

AI에게 이 프로젝트를 맡길 때는 이 섹션을 먼저 읽게 하세요.

- 이 프로젝트는 태일씨앤티 홈페이지 리뉴얼 대회용 React/Vite 정적 사이트입니다.
- 회사 정체성은 `철근콘크리트 전문 건설회사`입니다. 첫 인상에서 이 점이 흐려지면 안 됩니다.
- Node.js 22 LTS, JavaScript, React, Vite 기준으로 작업합니다.
- 서버 제작은 하지 않습니다. 정적 호스팅을 전제로 합니다.
- 라우팅은 `HashRouter`를 사용하므로 링크는 `/#/...` 구조로 동작합니다.
- 절대경로를 쓰지 말고 리소스는 `./assets/...` 상대경로를 사용합니다.
- 모든 이미지와 영상은 `public/assets` 폴더 안에 있어야 합니다.
- 확인되지 않은 데이터, 목업 수치, 임의 파트너, 임의 복리후생, 가상 뉴스는 추가하지 않습니다.
- 사이트 화면에는 `공개정보 기준`, `확인했습니다`, `출처에 따르면` 같은 검증 과정 문구를 직접 노출하지 않습니다.
- 검증 기준과 출처 설명은 README나 발표 자료에서만 다룹니다.
- 방문자에게 보이는 문구는 실제 회사 홈페이지처럼 자연스럽게 작성합니다.
- `global.css`, `Header`, `Footer`, `App.jsx`, `src/data/*`는 충돌이 크므로 꼭 필요한 경우에만 수정합니다.
- 작업 범위를 벗어난 파일을 대규모로 리팩토링하지 않습니다.
- 수정 후 `npm run lint`, 가능하면 `npm run build`를 실행합니다.

AI가 작업하기 전에 반드시 확인해야 할 파일입니다.

```txt
README.md
src/App.jsx
src/styles/global.css
src/components/layout/Header.jsx
src/components/layout/Header.css
src/components/layout/Footer.jsx
src/data/projectsData.js
src/data/newsData.js
```

단, 실제 수정은 본인이 맡은 페이지 폴더 중심으로 진행합니다.

## 프로젝트 목표

- 첫 화면에서 태일씨앤티가 철근콘크리트 전문 건설회사임을 즉시 인지하도록 구성
- 회사 소개영상의 핵심 메시지를 홈페이지 섹션 구조로 압축
- 지원자가 자주 방문한다는 조건을 반영해 채용 메뉴 접근성을 강화
- 뉴스, 사회공헌, 안전 수상, 품질·환경·안전 인증을 신뢰 요소로 노출
- Node.js 22 LTS, JavaScript, React 기반으로 중간 발표 시 `npm run dev`로 바로 확인 가능
- 서버 없이 정적 호스팅이 가능한 구조 유지
- 모바일 반응형 웹과 애니메이션을 유지하되, 정보 탐색을 방해하지 않도록 구성

## 실행 환경

- Node.js 22 LTS 권장
- JavaScript + React + Vite
- `HashRouter` 사용: 배포 후 URL은 `/#/company/greeting` 형태로 동작
- 서버 API 없이 정적 호스팅 기준

```bash
npm install
npm run dev
npm run build
npm run lint
```

팀원이 처음 받을 때는 아래 순서로 실행합니다.

```bash
git clone https://github.com/Minseo033/TL_Renewal.git
cd TL_Renewal
npm install
npm run dev
```

## 현재 구현 상태

- 홈 화면 리뉴얼 완료
- 회사소개, 사업실적, 기술자료, 홍보센터, ESG경영, 인재채용 화면 구성 완료
- 운영 홈페이지와 공개 기업정보에서 확인한 자료 중심으로 문구와 데이터 정리
- 확인되지 않은 임의 수치, 가상 뉴스, 임의 복리후생, 임의 파트너 데이터 제거
- 모바일 반응형 레이아웃 1차 적용
- 정적 호스팅을 고려해 리소스 경로를 상대경로 중심으로 정리
- 외부 지도, 외부 폰트처럼 제출 환경에서 불안정할 수 있는 의존성은 최소화

## 폴더 구조

```txt
src/
  App.jsx
  components/
    layout/        # Header, Footer, PageLayout
    ui/            # AnimatedSection, ScrollToTop
  data/
    projectsData.js
    newsData.js
  pages/
    Home/
    Company/
    Projects/
    Recruitment/
    ESG/
    PR/
    Technology/
  styles/
    global.css
public/
  assets/
    images/
    videos/
```

## 페이지별 역할

| 폴더 | 화면 | 설명 |
| --- | --- | --- |
| `Home` | 메인 홈 | 첫 인상, 핵심 메시지, 실적 요약, 뉴스, 채용 CTA, 회사 영상 |
| `Company` | 회사소개 | 인사말, 경영이념, 회사연혁, 조직도, 주거래 시공사, 업·면허/인증, 위치 |
| `Projects` | 사업실적 | 공사수주 현황, 건설시공능력, 품질경영, 안전경영, 카테고리별 실적 |
| `Technology` | 기술자료 | 철근콘크리트 기술 역량, 공법, 품질·환경·안전 인증, 기술자료 News |
| `PR` | 홍보센터 | 뉴스, 회사 소개영상 |
| `ESG` | ESG경영 | 환경, 사회공헌, 안전 수상, 경영 신뢰 요소 |
| `Recruitment` | 인재채용 | 직무소개, 인사제도, 채용가이드, 복리후생, 채용공고, 채용 FAQ |

## 주요 라우트

| 구분 | 라우트 |
| --- | --- |
| 홈 | `/#/` |
| 회사소개 | `/#/company/greeting` |
| 경영이념 | `/#/company/philosophy` |
| 회사연혁 | `/#/company/history` |
| 기구조직도 | `/#/company/organization` |
| 주거래 시공사 | `/#/company/partners` |
| 업·면허/인증 | `/#/company/certifications` |
| 찾아오시는 길 | `/#/company/location` |
| 공사수주 현황 | `/#/projects/orders` |
| 건설시공능력 | `/#/projects/capability` |
| 품질경영 | `/#/projects/quality` |
| 안전경영 | `/#/projects/safety` |
| 프로젝트 카테고리 | `/#/projects/housing`, `/#/projects/office`, `/#/projects/plant` 등 |
| 기술자료 | `/#/technology/overview` |
| 기술자료 News | `/#/technology/news` |
| 뉴스 | `/#/pr/news` |
| 영상 홍보관 | `/#/pr/youtube` |
| ESG경영 | `/#/esg` |
| 인재채용 | `/#/recruitment/jobs` |

## 우리가 확인한 정보

페이지 문구와 수치 정보는 아래 자료에서 확인되는 항목만 사용합니다.

- 태일씨앤티 운영 홈페이지: 회사소개, 인사말, 회사연혁, 공사 수주현황, 뉴스, 조직도
- 사람인 기업정보: 업종, 주소, 복리후생, 기업 소개
- 잡코리아/NICE 공개정보: 매출액, 동종업계 순위, 대표자, 주요사업
- 산군 공개정보: 전문건설업 도급순위, 시공능력평가액

현재 사이트에 반영한 핵심 정보는 다음과 같습니다.

- 회사 정체성: 철근콘크리트 전문 건설회사
- 설립 이력: 1994년 지인개발 설립, 2013년 태일씨앤티로 사명 변경
- 대표자: 김경수, 배준희
- 본사 주소: 서울특별시 금천구 가산디지털2로 101, B동 1701호
- 주요 사업: 철근콘크리트공사 중심
- 주요 실적 파트너: 삼성물산, GS건설, KCC건설, SK에코플랜트 등 공사 수주 이력이 있는 시공사
- 시공능력 지표: 철근콘크리트공사 도급순위 55위, 시공능력평가액 978억
- 2025년 매출액: 840억
- 인증 이력: KS Q ISO 9001:2015, KS I ISO 14001:2015, OHSAS 18001:2017
- 사회공헌/뉴스: 청소년 장학금 행사, 김장 나눔 ESG 행사, 안전 관련 수상 등
- 복리후생: 지원금·보험, 급여제도, 선물, 교육·생활, 근무환경, 조직문화, 출퇴근, 리프레시 항목

주의할 점은 사이트 화면 안에서는 `공개정보 기준`, `확인됩니다`, `출처에서 확인` 같은 문구를 되도록 쓰지 않는 것입니다. 방문자에게는 실제 회사 홈페이지처럼 자연스럽게 보여야 하고, 출처와 검증 기준은 README나 발표 자료에서 설명합니다.

## 데이터 작성 규칙

프로젝트 실적은 `src/data/projectsData.js`의 `RECENT_PROJECTS` 배열에서 관리합니다.

```js
{
  id: "87",
  name: "다이소 세종 온라인센터",
  image: "./assets/images/projects/project_87.jpg",
  type: ".",
  address: "세종특별자치시 소정면 고등리 805",
  client: "(주)아성다이소",
  partner: "KCC건설",
  scale: ".",
  period: "2025.06.01~2026.09.11",
  method: ".",
  scope: ".",
  material: ".",
  categories: ["업무시설", "기타"]
}
```

뉴스와 사회공헌 데이터는 `src/data/newsData.js`의 `NEWS_DATA` 배열에서 관리합니다.

```js
{
  id: "news_1_0",
  category: "수상",
  title: "삼성물산 공사수행 역량평가 수행우수사 선정, 최우수상 수상",
  date: "2026.03.23",
  image: "./assets/images/news/news_1_0_main.jpg",
  content: "...",
  isReal: true
}
```

채용공고 데이터는 `src/data/recruitmentJobsData.js`의 `RECRUITMENT_JOBS` 배열에서 관리합니다.

```js
{
  id: 225,
  title: "철근콘크리트 공사 현장공무 및 시공관리 신입/경력 채용",
  date: "상시채용",
  status: "접수중"
}
```

데이터 추가 시 지켜야 할 규칙입니다.

- 확인 가능한 자료만 추가합니다.
- 모르는 값은 임의로 채우지 않습니다.
- 기존 데이터에서 `.`로 들어간 값은 상세 모달에서 숨김 처리됩니다.
- 이미지 경로는 반드시 `./assets/images/...` 형태의 상대경로를 사용합니다.
- 이미지는 `public/assets/images/...` 아래에 넣습니다.
- 영상은 `public/assets/videos/...` 아래에 넣습니다.
- `categories` 값은 기존 카테고리명과 맞춰야 카테고리 페이지에 노출됩니다.
- 카테고리 후보: `주택`, `업무시설`, `교육/의료`, `플랜트`, `초고층`, `판매시설`, `기타`
- 채용공고 `status` 값은 `접수중` 또는 `접수마감`을 사용합니다.

## CSS 협업 규칙

현재 CSS는 전역 규칙과 페이지별 규칙이 섞이지 않도록 관리합니다.

| 파일 | 역할 |
| --- | --- |
| `src/styles/global.css` | 색상 변수, 폰트 스택, reset, 공통 버튼, `.container`, 공통 섹션 타이틀 |
| `components/layout/*.css` | Header, Footer, PageLayout처럼 전체 페이지가 공유하는 레이아웃 |
| `pages/*/*.css` | 각 페이지 전용 레이아웃과 반응형 |

협업 시 규칙입니다.

- `global.css`는 전체에 영향이 크므로 팀원끼리 공유 후 수정합니다.
- 각자 맡은 `pages` 폴더의 CSS를 우선 수정합니다.
- 클래스명은 페이지 prefix를 붙입니다.
- 좋은 예: `home-hero`, `company-card`, `project-card`, `recruit-benefit`, `esg-item`
- 피해야 할 예: `card`, `title`, `box`, `section`처럼 너무 일반적인 이름
- 반응형은 해당 페이지 CSS 안의 `@media`에서 처리합니다.
- 공통 컴포넌트가 2곳 이상 반복될 때만 `components/ui`로 분리합니다.
- 모바일에서 카드가 단순히 세로로만 쌓이지 않도록 필요하면 가로 스크롤, 2열 카드, 요약형 레이아웃을 고려합니다.

## 확정 역할 분담

현재 팀 구성 기준 확정된 역할입니다.

| 담당자 | 담당 영역 | 주 작업 폴더 | 역할 |
| --- | --- | --- | --- |
| 민서 | 관리자 페이지, 데이터 입력 구조 | `src/pages/Admin`, `src/data/*.js` 연동 방식 | 공사수주, 뉴스, 채용공고 추가 흐름과 데이터 형식 설계 |
| 태관 | `Company`, `Recruitment`, `Home` | `src/pages/Company`, `src/pages/Recruitment`, `src/pages/Home` | 회사 정체성, 지원자 경험, 홈 메시지 정리 |
| 동훈 | `Projects`, `Technology`, `PR`, `ESG` | `src/pages/Projects`, `src/pages/Technology`, `src/pages/PR`, `src/pages/ESG` | 실적, 공법, 뉴스, ESG 정보의 일관성 관리 |

`Home`은 여러 페이지의 요약이 모이는 곳이라 충돌이 잘 납니다. 태관이 최종 편집을 맡고, 동훈은 홈에 반영하면 좋을 핵심 실적/뉴스/ESG 문장을 제안하는 방식이 좋습니다.

## AI에게 작업을 맡길 때 쓰는 프롬프트 예시

팀원은 아래 예시 중 자기 역할에 맞는 문장을 AI에게 README와 함께 전달하면 됩니다.

### 공통 시작 프롬프트

```txt
이 README를 먼저 읽고 프로젝트 구조와 협업 규칙을 파악해줘.
내가 맡은 범위 밖의 파일은 꼭 필요한 경우가 아니면 수정하지 마.
확인되지 않은 목업 데이터나 임의 문구는 추가하지 말고, 실제 회사 홈페이지처럼 자연스러운 문구로 작업해줘.
작업 후 변경 파일 목록과 npm run lint / npm run build 결과를 알려줘.
```

### 태관: Company, Recruitment, Home 담당

```txt
나는 태관이고 Company, Recruitment, Home 영역을 맡았어.
src/pages/Company, src/pages/Recruitment, src/pages/Home 중심으로 개선해줘.
지원자가 자주 방문한다는 요구사항을 고려해서 회사 정체성, 채용 흐름, 복리후생, 인재상 문구를 자연스럽게 다듬어줘.
Projects, Technology, PR, ESG 데이터 구조는 건드리지 말고 필요한 요약 문장만 제안해줘.
```

### 동훈: Projects, Technology, PR, ESG 담당

```txt
나는 동훈이고 Projects, Technology, PR, ESG 영역을 맡았어.
src/pages/Projects, src/pages/Technology, src/pages/PR, src/pages/ESG 중심으로 개선해줘.
공사수주 현황, 기술 역량, 뉴스, ESG 문구가 실제 회사 사이트처럼 보이게 다듬어줘.
확인되지 않은 실적이나 뉴스는 추가하지 마.
Home은 직접 크게 수정하지 말고, 홈에 반영하면 좋을 핵심 실적/뉴스 문장만 제안해줘.
```

### 관리자 페이지 담당

```txt
나는 민서이고 관리자 페이지를 맡았어.
정적 호스팅 환경을 전제로 src/pages/Admin 안에 운영 데이터 입력 보조 도구를 설계해줘.
진짜 서버 저장이나 프론트엔드 비밀번호 보안처럼 보이는 기능은 만들지 마.
입력한 내용을 projectsData.js, newsData.js, recruitmentJobsData.js 등에 붙여넣을 수 있는 JSON/JS 객체 형태로 생성하는 방향으로 작업해줘.
```

### 모바일 QA 담당

```txt
모바일 반응형 QA를 해줘.
각 페이지에서 텍스트 겹침, 버튼 넘침, 카드가 너무 긴 일자 레이아웃이 되는 문제를 찾아서 수정해줘.
global.css는 최소한으로 건드리고 각 페이지 CSS에서 해결해줘.
```

## AI 작업 시 금지사항

- 새로운 백엔드 서버를 만들지 않습니다.
- 보안이 되는 것처럼 보이는 프론트엔드 관리자 로그인 기능을 만들지 않습니다.
- `node_modules`, `dist`를 커밋하지 않습니다.
- 외부 CDN 폰트, 외부 지도, 외부 이미지에 의존하지 않습니다.
- 검증되지 않은 회사 수치, 채용 절차, 직무 자격, 복리후생, 인증, 파트너사를 추가하지 않습니다.
- 사이트 안에 `목업`, `샘플`, `임시`, `공개정보 기준`, `출처 확인` 같은 표현을 노출하지 않습니다.
- 공통 CSS를 이유 없이 갈아엎지 않습니다.
- 다른 팀원이 맡은 폴더를 대규모로 수정하지 않습니다.

## 관리자 페이지 개발 시 주의사항

이 프로젝트는 정적 호스팅 기준입니다. 따라서 프론트엔드만으로 만든 `/admin`은 진짜 보안 관리자 시스템이 될 수 없습니다.

권장 방식은 다음과 같습니다.

- 관리자 페이지는 이 프로젝트 안에 `src/pages/Admin` 형태로 추가
- 접속 예시: `/#/admin`
- 기능은 공사수주, 뉴스, 채용공고, 채용 FAQ 입력 폼과 JSON/JS 데이터 생성 도구 중심
- 입력 결과를 바로 서버에 저장하지 않고, 운영자가 검토 후 각 데이터 파일에 반영
- 공개 배포 시 관리자 페이지를 숨기거나 내부용 빌드에서만 사용하는 방식 고려

현재 `/admin`에 들어간 운영 보조 기능은 다음과 같습니다.

- 홈 노출 관리: `src/data/homeDisplayData.js`의 프로젝트/뉴스 ID 순서 생성
- 공사수주 입력: `src/data/projectsData.js`에 추가할 프로젝트 객체 생성
- 뉴스 입력: `src/data/newsData.js`에 추가할 뉴스 객체 생성
- 채용공고 입력: `src/data/recruitmentJobsData.js`에 추가할 채용공고 객체 생성
- 채용 FAQ 입력: `src/pages/Recruitment/FAQ.jsx`의 `FAQS` 배열에 추가할 객체 생성
- 이미지 경로 점검: 입력한 이미지와 홈 노출 이미지가 실제로 로드되는지 확인

피해야 할 방식입니다.

- React 코드 안에 관리자 비밀번호를 넣는 방식
- 프론트엔드에 Firebase/Supabase/API 키를 무방비로 넣는 방식
- 정적 배포 사이트에서 브라우저만으로 실제 데이터를 직접 수정한다고 설명하는 방식
- 확인되지 않은 공사수주, 복리후생, 실적 수치를 입력 예시로 노출하는 방식

대회 발표에서는 `정적 호스팅 환경을 고려한 데이터 입력 보조 도구`라고 설명하는 것이 가장 현실적입니다.

## 협업 Git 규칙

작업 전 항상 최신 main을 받습니다.

```bash
git checkout main
git pull origin main
```

작업 브랜치를 만들어서 진행합니다.

```bash
git checkout -b feature/작업자-작업영역
```

작업 후 확인합니다.

```bash
npm run lint
npm run build
```

커밋 메시지는 작업 내용을 짧게 씁니다.

```bash
git add .
git commit -m "Update recruitment pages"
git push origin feature/작업자-작업영역
```

권장 브랜치 예시입니다.

- `feature/admin-minseo`
- `feature/taegwan-company-recruitment-home`
- `feature/donghoon-projects-tech-pr-esg`
- `fix/mobile-layout`
- `docs/readme`

## 추가 개발 전 체크리스트

- 새 데이터가 실제 확인된 자료인지 확인
- 화면 문구가 실제 회사 홈페이지처럼 자연스러운지 확인
- 출처 설명 문구가 UI에 직접 노출되지 않는지 확인
- 모바일에서 글자와 카드가 겹치지 않는지 확인
- 이미지가 `public/assets` 안에 포함되어 있는지 확인
- 이미지 경로가 절대경로가 아닌 상대경로인지 확인
- `npm run lint` 통과 여부 확인
- `npm run build` 통과 여부 확인
- `node_modules`, `dist`는 커밋하지 않기

## 복원 기준점

리팩토링 전 상태는 Git 태그 `restore-before-renewal-refactor`에 보관했습니다.

현재 상태에서 과거 기준점을 확인하려면 다음 명령어를 사용할 수 있습니다.

```bash
git tag
git show restore-before-renewal-refactor
```

되돌리기 작업은 팀원 작업을 덮어쓸 수 있으므로 혼자 실행하지 말고 팀원과 상의 후 진행합니다.

## 현재 남은 주요 작업 후보

- 모바일 화면 세부 QA
- 홈 화면과 각 하위 페이지의 문구 톤 최종 통일
- 프로젝트 상세 모달의 정보 표시 방식 개선
- 이미지 용량 최적화
- 기술자료 News에 실제 자료가 생겼을 때 데이터 추가
