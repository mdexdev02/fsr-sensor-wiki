# 기술 위키 프로젝트 문서

**현재 버전: V.0.1.0.0** (2025-08-16)

#### <기초 설명>

This file (readme.md) shows the goal of this project and also the folder structure, requirements and the shape of deliverables.

 Claude Code v1.0.73
  L Session ID: 5b114224-18f4-47bd-a9e1-8b3c241fa0ef

#### Folders

.claude : claude와 소통하는 데에 필요한 md파일들. 그외에 매뉴얼, 히스토리 등 claude의 산출물들
resources 폴더: 페이지 구성에 필요한 기초 자료들.
site-docusaurus: Docusaurus 기반 위키 소스 코드

#### Files
Version.md , CHANGELOG.md : versioning history.

무시할 파일 : 모든 zip 파일 (로컬 백업용)

#### .claude 폴더 내 문서 설명
- **history-wiki-setup.md**: 프로젝트 초기 설정 및 작업 이력
- **manual-wiki-config.md**: Docusaurus 설정 매뉴얼
- **report-resources-analysis.md**: resources 폴더 및 웹사이트 자료 분석
- **study-wiki-pages-structure.md**: 전체 위키 페이지 구조 설계 (통합본)
- **study-wiki-v1-pages.md**: V1 - 핵심 기능 (홈, FSR 기초, 제품 카탈로그)
- **study-wiki-v2-pages.md**: V2 - 확장 기능 (기술문서, 튜토리얼, AI통합 등)
- **study-wiki-v3-pages.md**: V3 - 장기 계획 (블로그, 커뮤니티, API 등)
- **plan-image-management.md**: 하이브리드 이미지 관리 전략

#### Accounts for this project services.

* github id : mdex.dev02@gmail.com
* github token(expiration : 30/Nov/2025) : [TOKEN_REMOVED_FOR_SECURITY]
* vercel id : mdex.dev02@gmail.com
* firebase id : mdex.dev02@gmail.com
* obsidian id : mdex.dev02@gmail.com


## 사용하는 MCP 목록
##### GitHub MCP 등록


#### File System MCP 등록

claude mcp add wiki1 npx @modelcontextprotocol/server-filesystem d:\\coding\\SalesBase\\ProductTutorialWiki

#### PostgreSQL MCP (시계열 데이터용) - 추후에 설치 예정
claude mcp add postgres npx @modelcontextprotocol/server-postgres postgresql://username:password@localhost:5432/sensor_db

#### 작업 중에 추가로 MCP가 필요한 상황이 되면 알려주기 바람.
#### < 주요 PATH >
platformio.exe : C:\\Users\\USER.platformio\\penv\\Scripts


## 1\. Project overview

압력 센서와 측정 회로, SW service를 판매하는 회사가 이 과제의 주체다. 이에 대해 고객들에게 제품에 대한 설명서와 활용 방법, 제품의 특성을 알려줄수 있는 웹사이트가 필요하다. 

이에, 기존의 위키 형태의 템플릿을 적용하여 나만의 위키 사이트를 만드는 것이 이 과제의 목표다.
향후 article들이 계속 위키에 업데이트될 예정이므로 페이지 관리 또한 수월해야할 것이다.

## 2\. 위키의 주요 기능

여러가지 제품을 소개한다.
제품 카테고리 아래에 하위 메뉴로 하드웨어 사양. 사용 방법, 참고 자료와 같은 메뉴들이 존재한다.

## 3\. 시스템 아키텍처

docusaurus + github + vercel 조합으로 호스팅할 예정이다.
적당한 위키 페이지 템플릿을 찾아서 UI를 비교해본 후에 결정하게 된다.


## 4\. 센서주요 기능 상세 설명

.claude 폴더에 여러 md파일로 업데이트

---

## 5\. 빌드 및 실행 방법

### 📋 작업 기록 참조
**중요**: 이전 작업 내역과 설정 정보는 `.claude\history-wiki-setup.md` 파일을 참조하세요.

### 🚀 빠른 시작
```bash
# 로컬 개발 서버 실행
cd site-docusaurus
npm run start

# GitHub 푸시 (Vercel 자동 배포)
git add .
git commit -m "설명"
git push
```

### 🌐 배포된 사이트
- **라이브 사이트**: https://fsr-sensor-wiki.vercel.app/
- **GitHub 저장소**: https://github.com/mdexdev02/fsr-sensor-wiki
- **Vercel 대시보드**: mdex.dev02@gmail.com 계정

---

## 6\. 작업 진행 상태 (2025년 8월 16일 업데이트)

### ✅ 완료된 작업
1. **리소스 분석 완료** - report-resources-analysis.md 작성
2. **사이트 구조 설계 완료** - study-wiki-pages-structure.md 및 v1/v2/v3 버전별 문서 작성
3. **FSR 센서 기초 챕터 구현 완료**
   - 6개 페이지 작성 (intro, what-is-fsr, how-it-works, electrical/mechanical-characteristics, applications)
   - MDX 형식으로 인터랙티브 요소 포함
   - 코드 예제 및 다이어그램 포함
4. **하이브리드 이미지 관리 전략 수립** - plan-image-management.md 작성
5. **개발 서버 실행 성공** - http://localhost:3000 에서 확인 가능
6. **제품 카탈로그 섹션 구현 (V1 부분 완료)**
   - 센서 단품 페이지 (7개): RA9P, RA12P, RA18, RA30P, QA6P, QA3040P, MDXS-16-5610
   - 측정 키트 페이지 (3개): 4채널 스타터키트, 4채널 측정 쉴드, 32채널 멀티플렉서 쉴드
7. **Giscus 댓글 시스템 통합 확인**
   - GitHub Discussions 기반 댓글 기능
   - 다크모드 자동 지원

### 🚀 다음 작업 계획
업무 순서 : 
1. 제품 카탈로그 페이지 구현 (V1)
2. 기존 Google Sites 위키 콘텐츠 마이그레이션
3. 이미지 리소스 수집 및 최적화
4. 다국어 지원 설정 (한국어/영어)

### 💡 작업시 참고사항
- 작업 시작 전 `.claude\history-wiki-setup.md` 파일 먼저 읽기
- 모든 작업은 `site-docusaurus` 폴더에서 진행
- 특수문자 `<`, `>` 사용시 이스케이프 처리 필요
- md파일의 내용을 수정했을 경우, Multilevel Numbering 이 깨졌는지 점검후 수정.
- 문서 상하 길이 간소화. - 문서 내용이 늘어나면 list와  상하 여백 사용이 빈번해짐. 그러면 문서의 상하 길이가 지나치게 늘어나면 문서 가독성이 떨어지짐. 따라서 가급적이면 list 보다는 표를 많이 활용하도록 문서를 작성함.


