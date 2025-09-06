# FSR 센서 위키 구축 작업 기록

## 2024년 11월 14일 작업 내용

### 완료된 작업 목록

#### 1. 기본 환경 설정 ✅
- Node.js v22.17.1, npm 11.5.2, Git 2.50.1 설치 확인
- Docusaurus 3.8.1 설치 확인 (site-docusaurus 폴더)
- md 파일 뷰어 - obsidian 설치 및 플로그인 다운로드. https://github.com/polyipseity/obsidian-show-hidden-files/releases/tag/2.4.1 

#### 2. GitHub 저장소 설정 ✅
- 저장소 생성: https://github.com/mdexdev02/fsr-sensor-wiki
- Git 초기화 및 첫 커밋 완료
- GitHub 토큰 연결 ([TOKEN_REMOVED_FOR_SECURITY])

#### 3. Vercel 배포 완료 ✅
- URL: https://fsr-sensor-wiki.vercel.app/
- 프로젝트 : https://vercel.com/mdexdev02s-projects/fsr-sensor-wiki
- mdex.dev02@gmail.com 계정으로 연결
- Root Directory: site-docusaurus
- 자동 배포 설정 완료

#### 4. 사이트 커스터마이징 ✅
- 사이트 제목: "FSR 센서 기술 위키"
- 한글화 완료 (ko locale)
- 네비게이션 메뉴 수정
- Footer 정보 업데이트

#### 5. 문서 구조 생성 ✅
```
docs/
├── intro.md (메인 소개 페이지)
├── pressure-sensors/
│   ├── _category_.json
│   └── fsr-100.md (첫 제품 문서)
├── measurement-circuits/
│   └── _category_.json
└── software-services/
    └── _category_.json
```

#### 6. 첫 제품 문서 작성 ✅
- FSR-100 압력 센서 문서 완성
- Arduino 예제 코드 포함
- 배선 다이어그램 포함
- 기술 사양 테이블 작성

### 발생한 이슈 및 해결

#### MDX 파싱 에러
- **문제**: `<5ms` 표현이 HTML 태그로 인식됨
- **해결**: `&lt;5ms`로 이스케이프 처리

### 현재 프로젝트 상태

- **로컬 서버**: http://localhost:3000 (npm run start로 실행)
- **온라인 사이트**: https://fsr-sensor-wiki.vercel.app/
- **GitHub**: 모든 변경사항 푸시 완료
- **작업 폴더**: `d:\coding\SalesBase\ProductTutorialWiki\site-docusaurus`

### 일상 작업 명령어

```bash
# 로컬 개발 서버 실행
cd "d:\coding\SalesBase\ProductTutorialWiki\site-docusaurus"
npm run start

# 변경사항 GitHub 푸시 (Vercel 자동 배포)
git add .
git commit -m "변경 내용 설명"
git push
```

### 폴더 구조 설명

- **site-docusaurus/**: Docusaurus 메인 사이트 (현재 사용중)
- **wiki-vercel/**: 비어있음 (원래 계획했던 배포 폴더)
- **resources/**: 이미지 리소스 2개 보관
- **기획/**: 비어있음

### 다음 작업시 참고사항

1. **새 제품 문서 추가**
   - `docs/pressure-sensors/` 폴더에 .md 파일 생성
   - 파일명: 영문 소문자, 하이픈 사용 (예: fsr-200.md)

2. **이미지 추가**
   - `static/img/` 폴더에 이미지 업로드
   - 문서에서 참조: `![설명](/img/파일명.jpg)`

3. **특수문자 주의**
   - `<` 기호는 `&lt;`로 변경
   - `>` 기호는 `&gt;`로 변경

4. **사이드바 자동 생성**
   - _category_.json 파일로 카테고리 설정
   - 문서 파일의 sidebar_position으로 순서 지정