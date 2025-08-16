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
무시할 파일 : 모든 zip 파일 (로컬 백업용)

#### .claude 폴더 내 문서 설명
- **wiki-setup-history.md**: 프로젝트 초기 설정 및 작업 이력
- **wiki-config-manual.md**: Docusaurus 설정 매뉴얼
- **resources-understanding.md**: resources 폴더 및 웹사이트 자료 분석
- **wiki-pages-study.md**: 전체 위키 페이지 구조 설계 (통합본)
- **wiki-v1-pages-study.md**: V1 - 핵심 기능 (홈, FSR 기초, 제품 카탈로그)
- **wiki-v2-pages-study.md**: V2 - 확장 기능 (기술문서, 튜토리얼, AI통합 등)
- **wiki-v3-pages-study.md**: V3 - 장기 계획 (블로그, 커뮤니티, API 등)
- **image-management-strategy.md**: 하이브리드 이미지 관리 전략


#### Accounts for this project services.

* github id : mdex.dev02@gmail.com
* github token(expiration : 30/Nov/2025) : [TOKEN_REMOVED_FOR_SECURITY]
* vercel id : mdex.dev02@gmail.com
* firebase id : mdex.dev02@gmail.com
* obsidian id : mdex.dev02@gmail.com


## 사용하는 MCP 목록
##### GitHub MCP 등록

setx GITHUB\_PERSONAL\_ACCESS\_TOKEN "[TOKEN_REMOVED_FOR_SECURITY]"

claude mcp add github npx @modelcontextprotocol/server-github

설치된것 확인하기

claude mcp list


#### File System MCP 등록

claude mcp add wiki1 npx @modelcontextprotocol/server-filesystem d:\\coding\\SalesBase\\ProductTutorialWiki

#### PostgreSQL MCP (시계열 데이터용) - 추후에 설치 예정
claude mcp add postgres npx @modelcontextprotocol/server-postgres postgresql://username:password@localhost:5432/sensor_db

#### 작업 중에 추가로 MCP가 필요한 상황이 되면 알려주기 바람.


#### < 주요 PATH >

platformio.exe : C:\\Users\\USER.platformio\\penv\\Scripts



================== 여기까지 작성함

## 1\. Project overview

압력 센서와 측정 회로, SW service를 판매하고 있다.

이에 대해 고객들에게 제품에 대한 설명서와 활용 방법, 제품의 특성을 알려줄수 있는 웹사이트가 필요하다.



이에, 기존의 위키 형태의 템플릿을 적용하여 나만의 위키 사이트를 만드는 것이 이 과제의 목표다.

향후 article들이 계속 위키에 업데이트될 예정이므로 페이지 관리 또한 수월해야할 것이다.



## 2\. 위키의 주요 기능

여러가지 제품을 소개한다.

제품 카테고리 아래에 하위 메뉴로 하드웨어 사양. 사용 방법, 참고 자료와 같은 메뉴들이 존재한다.



---

## 3\. 시스템 아키텍처

주로 vercel을 이용해서 호스팅하게 될 것 같다.
적당한 위키 템플릿을 찾아서 UI를 비교해본 후에 결정하게 된다.


## 4\. 주요 기능 상세 설명

작성중.

---

## 5\. 빌드 및 실행 방법

### 📋 작업 기록 참조
**중요**: 이전 작업 내역과 설정 정보는 `.claude\wiki-setup-history.md` 파일을 참조하세요.

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
1. **리소스 분석 완료** - resources-understanding.md 작성
2. **사이트 구조 설계 완료** - wiki-pages-study.md 및 v1/v2/v3 버전별 문서 작성
3. **FSR 센서 기초 챕터 구현 완료**
   - 6개 페이지 작성 (intro, what-is-fsr, how-it-works, electrical/mechanical-characteristics, applications)
   - MDX 형식으로 인터랙티브 요소 포함
   - 코드 예제 및 다이어그램 포함
4. **하이브리드 이미지 관리 전략 수립** - image-management-strategy.md 작성
5. **개발 서버 실행 성공** - http://localhost:3000 에서 확인 가능

### 🚀 다음 작업 계획
업무 순서 : 
1. 제품 카탈로그 페이지 구현 (V1)
2. 기존 Google Sites 위키 콘텐츠 마이그레이션
3. 이미지 리소스 수집 및 최적화
4. 다국어 지원 설정 (한국어/영어)

주요 resources 소개. 
1. **mdex-shop.com 사이트 분석**
   - 기존 제품 정보 수집
   - 제품 카테고리 구조 파악
   -센서 단품) https://mdex-shop.com/category/%EC%95%95%EB%A0%A5%EC%84%BC%EC%84%9C-%EB%8B%A8%ED%92%88/24/
   -센서 측정 회로) https://mdex-shop.com/category/%EC%95%95%EB%A0%A5%EC%84%BC%EC%84%9C-%EC%B8%A1%EC%A0%95%ED%82%A4%ED%8A%B8/94/	
   -방석센서 측정 키트) https://mdex-shop.com/product/%EB%B0%A9%EC%84%9D%EC%84%BC%EC%84%9C-%EC%BD%94%EB%94%A9%ED%82%A4%ED%8A%B8/102/category/147/display/3/

2. **제품 사양서 PDF 검토 - @resources**
   - PDF 파일에서 기술 사양 추출
   - 위키 문서 형식으로 변환

3. **기존 위키 사이트 참고**
   - 기존 위키가 google sites 정책 변경으로 인해 폐기됨.
   - https://sites.google.com/site/mdexfsr2016/
   - 내용이 매우 유용했었으므로 재사용하길 희망함. 이 내용들을 신규 wiki에 최상위 챕터를 하나 만들어서 그 하부로 이동시켜야 함. 챕터 이름은 "FSR센서의 특성과 활용"
   - google 정책 변경으로 인해 이미지, 스프레드 등의 주요 리소스가 삭제되거나 링크가 깨짐. 하나하나 조심스럽게 복원해야 함.

4. **위키 업데이트**
   - 새로운 제품 문서 추가
   - 이미지 및 다이어그램 추가
   - 카테고리 구조 정리
   - 2개 언어를 지원해야 함-한국어와 영어. 추후에 3개 이상으로 추가하는 것도 가능한지 답을 알고 싶음.

### 💡 작업시 참고사항
- 작업 시작 전 `.claude\wiki-setup-history.md` 파일 먼저 읽기
- 모든 작업은 `site-docusaurus` 폴더에서 진행
- 특수문자 `<`, `>` 사용시 이스케이프 처리 필요

