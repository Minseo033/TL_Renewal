# 태일씨앤티 홈페이지 리뉴얼

## 프로젝트 구동 방법

### 요구 환경

- Node.js 22 이상
- npm

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 터미널에 표시되는 주소로 접속합니다.
기본 주소는 다음과 같습니다.

```txt
http://localhost:5173/
```

이 프로젝트는 `HashRouter`를 사용하므로 주요 페이지 주소는 `/#/...` 형식입니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

### 빌드 결과 미리보기

```bash
npm run preview
```

### 코드 검사

```bash
npm run lint
```

## 폴더 구조

```txt
src/
  App.jsx
  components/
    layout/        # Header, Footer, PageLayout
    ui/            # AnimatedSection, ScrollToTop
  data/
    homeDisplayData.js
    newsData.js
    projectsData.js
    recruitmentJobsData.js
    youtubeData.js
  pages/
    Admin/
    Company/
    ESG/
    Home/
    PR/
    Projects/
    Recruitment/
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
| `Home` | 메인 홈 | 회사의 첫 인상, 핵심 메시지, 실적 요약, 뉴스, 채용 CTA, 회사 영상 |
| `Company` | 회사소개 | 인사말, 경영이념, 회사연혁, 조직도, 주거래 시공사, 업·면허/인증, 위치 |
| `Projects` | 사업실적 | 공사수주 현황과 주택, 업무시설, 교육/의료, 플랜트 등 카테고리별 실적 |
| `PR` | 홍보센터 | 뉴스 목록/상세, 유튜브 영상 홍보관 |
| `ESG` | ESG경영 | 환경, 사회공헌, 안전 수상, 경영 신뢰 요소 |
| `Recruitment` | 인재채용 | 직무소개, 인사제도, 채용가이드, 복리후생, 채용공고, 채용 FAQ |
| `Admin` | 관리자 페이지 | 정적 데이터 파일에 추가할 코드를 생성하는 운영 보조 화면 |

## 주요 라우트

이 프로젝트는 `HashRouter`를 사용하므로 배포 후 주소는 `/#/...` 형식으로 동작합니다.

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
| 주택 실적 | `/#/projects/housing` |
| 업무시설 실적 | `/#/projects/office` |
| 교육/의료 실적 | `/#/projects/education` |
| 플랜트 실적 | `/#/projects/plant` |
| 초고층 실적 | `/#/projects/highrise` |
| 판매시설 실적 | `/#/projects/retail` |
| 기타 실적 | `/#/projects/others` |
| 뉴스 | `/#/pr/news` |
| 영상 홍보관 | `/#/pr/youtube` |
| ESG경영 | `/#/esg` |
| 인재채용 | `/#/recruitment/jobs` |
| 인사제도 | `/#/recruitment/system` |
| 채용가이드 | `/#/recruitment/guide` |
| 복리후생 | `/#/recruitment/benefits` |
| 채용 FAQ | `/#/recruitment/faq` |
| 관리자 페이지 | `/#/admin` |

## 데이터 파일 설명

이 프로젝트는 별도 서버 없이 `src/data`의 정적 데이터 파일을 화면에 연결합니다.

| 파일 | 주요 export | 설명 |
| --- | --- | --- |
| `src/data/homeDisplayData.js` | `HOME_DISPLAY` | 홈 화면에 노출할 대표 프로젝트와 대표 뉴스 ID 순서를 관리합니다. |
| `src/data/projectsData.js` | `RECENT_PROJECTS` | 공사수주 현황과 사업실적 카테고리 페이지에서 사용하는 프로젝트 목록입니다. |
| `src/data/newsData.js` | `NEWS_DATA` | 홍보센터 뉴스 목록과 상세보기에서 사용하는 뉴스 데이터입니다. 메인 이미지와 본문 추가 이미지를 함께 관리합니다. |
| `src/data/youtubeData.js` | `YOUTUBE_CHANNEL_URL`, `YOUTUBE_CHANNEL_NAME`, `YOUTUBE_VIDEOS`, `YOUTUBE_DISPLAY_URLS` | 유튜브 채널 정보와 영상 홍보관에 노출할 영상 링크를 관리합니다. |
| `src/data/recruitmentJobsData.js` | `RECRUITMENT_JOBS` | 인재채용 페이지에서 사용하는 채용공고 목록입니다. |

### 데이터 작성 기준

- 이미지 경로는 `./assets/images/...` 형식으로 작성합니다.
- 이미지 파일은 `public/assets/images/...` 아래에 둡니다.
- 영상 파일은 `public/assets/videos/...` 아래에 둡니다.
- 프로젝트 카테고리는 기존 카테고리명과 맞춰야 각 실적 페이지에 노출됩니다.
- 프로젝트에서 값이 없거나 노출하지 않을 항목은 `.`로 두면 상세 화면에서 숨김 처리됩니다.
- 뉴스 본문 추가 이미지는 `images` 배열에 넣으면 상세보기 본문 영역에 표시됩니다.
- 유튜브 영상은 `youtubeData.js`의 영상 URL을 수정하면 화면에 반영됩니다.
- 채용공고 `status` 값은 `접수중` 또는 `접수마감`을 사용합니다.

## 관리자 페이지 이용 방법

### 접속 방법

개발 서버를 실행한 뒤 아래 주소로 접속합니다.

```txt
http://localhost:5173/#/admin
```

배포 환경에서는 도메인 뒤에 `/#/admin`을 붙여 접속합니다.

```txt
https://배포도메인/#/admin
```

### 주요 기능

관리자 페이지는 실제 서버에 저장하는 CMS가 아니라, 정적 데이터 파일에 추가할 코드를 생성하고 복사하기 위한 보조 화면입니다.

관리자 페이지에서 다음 항목을 작성하거나 확인할 수 있습니다.

- 홈 노출 항목
- 프로젝트 데이터
- 뉴스 데이터
- 유튜브 영상 데이터
- 채용공고 데이터
- 채용 FAQ 데이터
- 이미지 경로 점검
- 데이터 작성 가이드

### 사용 흐름

1. 왼쪽 관리자 메뉴에서 작업할 항목을 선택합니다.
2. 입력 폼에 필요한 값을 작성합니다.
3. 오른쪽 미리보기와 검증 메시지를 확인합니다.
4. 생성된 코드 블록을 복사합니다.
5. 해당 데이터 파일에 복사한 객체를 추가하거나 기존 값을 교체합니다.

### 데이터 반영 위치

- 프로젝트: `src/data/projectsData.js`
- 뉴스: `src/data/newsData.js`
- 유튜브: `src/data/youtubeData.js`
- 채용공고: `src/data/recruitmentJobsData.js`
- 홈 노출 항목: `src/data/homeDisplayData.js`
- 채용 FAQ/채용 관련 데이터: 관리자 화면의 안내에 따라 관련 데이터 파일에 반영합니다.

### 주의사항

- 관리자 페이지에서 입력한 내용은 자동으로 저장되지 않습니다.
- 생성된 코드를 복사한 뒤 직접 데이터 파일에 반영해야 합니다.
- 이미지 파일은 `public/assets` 하위에 넣고, 데이터에는 `./assets/...` 상대경로로 작성합니다.
- 수정 후 `npm run lint`와 `npm run build`로 확인합니다.
