# 제품 위키 사이트 만들기 - 처음부터 시작하는 완전 초보자 가이드

## 시작하기 전에 알아야 할 것들

### 우리가 사용할 도구들의 역할

**1. Docusaurus (도큐사우루스)**
- **역할**: 위키 사이트를 만들어주는 프로그램
- **비유**: 워드프레스나 네이버 블로그처럼 글을 쓰면 자동으로 웹사이트로 만들어주는 도구
- **전문 설명**: Facebook(Meta)에서 만든 정적 사이트 생성기로, Markdown 파일을 HTML 웹페이지로 변환

**2. GitHub (깃허브)**
- **역할**: 우리 위키 사이트의 모든 파일을 안전하게 보관하는 창고
- **비유**: 구글 드라이브처럼 파일을 저장하지만, 모든 변경 내역을 기록하는 똑똑한 저장소
- **전문 설명**: 버전 관리 시스템으로, 코드와 문서의 변경 사항을 추적하고 협업을 가능하게 함

**3. Vercel (버셀)**
- **역할**: 우리 위키를 인터넷에서 볼 수 있게 해주는 서비스
- **비유**: 카페24나 호스팅 서비스처럼 웹사이트를 24시간 운영해주는 회사
- **전문 설명**: 자동 배포 플랫폼으로, GitHub의 코드를 자동으로 웹사이트로 만들어 호스팅

## STEP 1: 필수 프로그램 설치 📊 진행률: 10%

### 1-1. Node.js 설치하기
Node.js는 Docusaurus를 실행하기 위해 필요한 프로그램입니다.

1. https://nodejs.org 접속
2. "LTS" 버전 다운로드 (왼쪽 녹색 버튼)
3. 다운로드한 파일 실행
4. 모두 "Next" 클릭하여 설치 완료

### 1-2. Git 설치하기
Git은 파일을 GitHub에 올리기 위한 프로그램입니다.

1. https://git-scm.com 접속
2. "Download for Windows" 클릭
3. 다운로드한 파일 실행
4. 모두 기본값으로 "Next" 클릭하여 설치

### 1-3. 설치 확인하기
1. **cmd 실행**: Windows 키 + R → "cmd" 입력 → Enter
2. 다음 명령어 입력 후 Enter:
```
node --version
```
> 💡 `--version`: 설치된 프로그램의 버전을 확인하는 명령어

숫자가 나오면 성공 (예: v18.17.0)

3. 다음 명령어 입력:
```
git --version
```
숫자가 나오면 성공 (예: git version 2.41.0)

## STEP 2: 프로젝트 폴더 만들기 📊 진행률: 20%

### 2-1. 작업 폴더 만들기
1. **cmd 실행**
2. D 드라이브로 이동 (C 드라이브를 사용하려면 c: 입력):
```
d:
```
> 💡 `d:` 또는 `c:`: 드라이브를 변경하는 명령어

3. coding 폴더 만들기:
```
mkdir coding
cd coding
```
> 💡 `mkdir`: Make Directory의 약자로 새 폴더를 만드는 명령어  
> 💡 `cd`: Change Directory의 약자로 폴더를 이동하는 명령어

4. SalesBase 폴더 만들기:
```
mkdir SalesBase
cd SalesBase
```

5. ProductTutorialWiki 폴더 만들기:
```
mkdir ProductTutorialWiki
cd ProductTutorialWiki
```

현재 위치 확인:
```
cd
```
> 💡 `cd`만 입력하면 현재 폴더 위치를 보여줌

결과: `D:\coding\SalesBase\ProductTutorialWiki`

## STEP 3: Docusaurus 설치하기 📊 진행률: 30%

### 3-1. Docusaurus 프로젝트 생성
**cmd 창**에서 (현재 ProductTutorialWiki 폴더에 있는 상태):

```
npx create-docusaurus@latest site-docusaurus classic
```
> 💡 `npx`: Node.js 패키지를 실행하는 명령어  
> 💡 `create-docusaurus@latest`: 최신 버전의 Docusaurus 설치 프로그램  
> 💡 `site-docusaurus`: 생성할 폴더 이름  
> 💡 `classic`: 기본 템플릿 이름

이 명령어를 실행하면:
- "Ok to proceed? (y)" 라고 물으면 → y 입력 후 Enter
- 2-3분 정도 기다리면 설치 완료

### 3-2. 설치 확인
```
dir
```
> 💡 `dir`: 현재 폴더의 파일과 폴더 목록을 보여주는 명령어

입력하면 `site-docusaurus` 폴더가 생성된 것을 확인할 수 있습니다.

## STEP 4: 프로젝트 구조 만들기 📊 진행률: 35%

### 4-1. 추가 폴더 생성
**cmd 창**에서 (ProductTutorialWiki 폴더에서):

```
mkdir wiki-vercel
mkdir resources
mkdir 기획
```

### 4-2. 프로젝트 설명 파일 만들기
1. **메모장 열기**: Windows 키 + R → "notepad" 입력 → Enter
2. 다음 내용 복사해서 붙여넣기:

```markdown
# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a product tutorial wiki project for selling pressure sensors, measurement circuits, and software services.

## Deployment Information

- **Hosting Platform**: Vercel
- **Deployment Directory**: site-docusaurus/
```

3. 파일 → 다른 이름으로 저장
4. 파일 위치: `D:\coding\SalesBase\ProductTutorialWiki`
5. 파일 이름: `CLAUDE.md`
6. 파일 형식: "모든 파일"
7. 저장

### 4-3. README 파일 만들기
같은 방법으로 `readme.md` 파일도 만들기:

```markdown
# 기술 위키 프로젝트

## 프로젝트 개요
압력 센서와 측정 회로, SW service를 판매하는 회사의 제품 위키입니다.

## 폴더 구조
- site-docusaurus/ : 메인 위키 사이트
- wiki-vercel/ : 추가 리소스
- resources/ : 참고 자료
- 기획/ : 기획 문서
```

## STEP 5: GitHub 계정 만들고 저장소 만들기 📊 진행률: 50%

### 5-1. GitHub 가입하기
1. 웹브라우저를 열고 https://github.com 접속
2. "Sign up" 버튼 클릭
3. 이메일 입력 (예: onetwo34@mymail.com)
4. 비밀번호 만들기
5. 사용자 이름 만들기 (예: happy25)
6. 이메일 인증 완료

### 5-2. 새 저장소(Repository) 만들기
1. GitHub 로그인 후 오른쪽 상단 "+" 버튼 클릭
2. "New repository" 선택
3. Repository name에 "product-tutorial-wiki" 입력
4. Public 선택 (누구나 볼 수 있음) 또는 Private 선택 (나만 볼 수 있음)
5. **주의**: "Add a README file" 체크하지 않기!
6. "Create repository" 클릭

### 5-3. 개인 액세스 토큰 만들기
1. 오른쪽 상단 프로필 사진 클릭
2. "Settings" 클릭
3. 왼쪽 메뉴 맨 아래 "Developer settings" 클릭
4. "Personal access tokens" → "Tokens (classic)" 클릭
5. "Generate new token" → "Generate new token (classic)" 클릭
6. Note에 "wiki-token" 입력
7. Expiration을 "90 days" 선택
8. 체크박스에서 "repo" 전체 선택
9. 맨 아래 "Generate token" 클릭
10. **중요**: 생성된 토큰을 메모장에 복사해두기 (다시 볼 수 없음!)

## STEP 6: 프로젝트를 GitHub에 연결하기 📊 진행률: 60%

### 6-1. Git 초기 설정
**cmd 실행** 후 다음 명령어를 한 줄씩 입력:

1. site-docusaurus 폴더로 이동:
```
d:
cd coding\SalesBase\ProductTutorialWiki\site-docusaurus
```

2. Git 사용자 정보 설정:
```
git config --global user.name "당신의 이름"
git config --global user.email "당신의 이메일"
```
> 💡 `git config`: Git 설정을 변경하는 명령어  
> 💡 `--global`: 모든 Git 프로젝트에 적용되는 전역 설정

예시:
```
git config --global user.name "김철수"
git config --global user.email "onetwo34@mymail.com"
```

### 6-2. GitHub에 첫 업로드
**cmd 창**에서 다음 명령어를 한 줄씩 입력:

1. Git 초기화:
```
git init
```
> 💡 `git init`: 현재 폴더를 Git 저장소로 만드는 명령어

2. 파일 추가:
```
git add .
```
> 💡 `git add .`: 현재 폴더의 모든 파일을 Git에 추가 (점은 "모든 파일"을 의미)

3. 첫 커밋:
```
git commit -m "첫 번째 업로드"
```
> 💡 `git commit`: 변경사항을 저장하는 명령어  
> 💡 `-m`: 메시지를 추가하는 옵션

4. GitHub 연결 (당신의 GitHub 사용자명이 happy25라면):
```
git branch -M main
git remote add origin https://github.com/happy25/product-tutorial-wiki.git
```
> 💡 `git branch -M main`: 기본 브랜치 이름을 main으로 설정  
> 💡 `git remote add origin`: GitHub 저장소 주소를 연결

5. 업로드:
```
git push -u origin main
```
> 💡 `git push`: 로컬 파일을 GitHub에 업로드  
> 💡 `-u`: 기본 업로드 경로를 설정

처음 push할 때 GitHub 로그인 창이 나타납니다:
- Username: GitHub 사용자명 입력
- Password: 아까 복사해둔 토큰 붙여넣기 (비밀번호 아님!)

## STEP 7: Vercel 계정 만들고 배포하기 📊 진행률: 75%

### 7-1. Vercel 가입하기
1. https://vercel.com 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 선택
4. 방금 만든 GitHub 계정으로 로그인
5. 권한 허용

### 7-2. Vercel에 프로젝트 배포
1. Vercel 대시보드 (https://vercel.com/dashboard)
2. "Add New..." → "Project" 클릭
3. "Import Git Repository"에서 "product-tutorial-wiki" 선택
4. **중요 설정**:
   - **Root Directory**: `site-docusaurus` 입력 후 Continue
   - **Framework Preset**: "Other" 선택
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. "Deploy" 클릭

3-5분 기다리면 웹사이트가 만들어집니다!
완료되면 "Visit" 버튼을 눌러 사이트 확인

## STEP 8: 로컬에서 테스트하기 📊 진행률: 85%

### 8-1. 개발 서버 실행
1. **cmd 실행**
2. 프로젝트 폴더로 이동:
```
d:
cd coding\SalesBase\ProductTutorialWiki\site-docusaurus
```

3. 개발 서버 시작:
```
npm run start
```
> 💡 `npm run start`: 개발 서버를 시작하는 명령어  
> 💡 `npm`: Node Package Manager의 약자로 패키지를 관리하는 도구

4. 웹브라우저가 자동으로 열리고 http://localhost:3000 에서 사이트 확인
5. 종료: **cmd 창**에서 Ctrl + C

## STEP 9: 제품 문서 작성하기 📊 진행률: 90%

### 9-1. 문서 폴더 구조 만들기
Windows 탐색기를 열고:
1. `D:\coding\SalesBase\ProductTutorialWiki\site-docusaurus\docs` 폴더로 이동
2. 새 폴더 만들기:
   - `pressure-sensors` (압력센서)
   - `measurement-circuits` (측정회로)
   - `software-services` (소프트웨어)

### 9-2. 첫 번째 제품 문서 작성
1. 메모장 열기
2. 다음 내용 작성:

```markdown
---
title: 압력 센서 PS-100
sidebar_position: 1
---

# 압력 센서 PS-100

## 제품 개요
PS-100은 고정밀 압력 측정을 위한 센서입니다.

## 주요 특징
- 측정 범위: 0-100 PSI
- 정확도: ±0.5%
- 출력: 4-20mA

## 사용 방법
1. 전원 연결 (24V DC)
2. 신호선 연결
3. 캘리브레이션 실행

## 기술 사양
| 항목 | 사양 |
|------|------|
| 크기 | 50mm x 30mm |
| 무게 | 150g |
| 동작 온도 | -20°C ~ 80°C |
```

3. 파일 저장:
   - 위치: `D:\coding\SalesBase\ProductTutorialWiki\site-docusaurus\docs\pressure-sensors`
   - 파일명: `ps-100.md`
   - 파일 형식: "모든 파일"

### 9-3. 이미지 추가하기
1. 제품 이미지를 준비
2. `D:\coding\SalesBase\ProductTutorialWiki\site-docusaurus\static\img` 폴더에 복사
3. 문서에서 사용:
```markdown
![PS-100 제품 이미지](/img/ps-100.jpg)
```

## STEP 10: 변경사항 업로드하고 배포하기 📊 진행률: 100% 🎉

### 10-1. GitHub에 업로드
문서를 추가하거나 수정한 후:

1. **cmd 실행**
2. 프로젝트 폴더로 이동:
```
d:
cd coding\SalesBase\ProductTutorialWiki\site-docusaurus
```

3. 변경사항 확인:
```
git status
```
> 💡 `git status`: 어떤 파일이 변경되었는지 보여주는 명령어

4. 모든 변경사항 추가:
```
git add .
```

5. 커밋 (저장):
```
git commit -m "압력센서 문서 추가"
```

6. GitHub에 업로드:
```
git push
```

### 10-2. 자동 배포 확인
1. Vercel 대시보드 (https://vercel.com/dashboard) 접속
2. 프로젝트 클릭
3. "Building..." 상태 확인
4. 완료되면 자동으로 웹사이트 업데이트됨

## 🔄 두 번째 위키를 만들 때 (이미 계정이 있는 경우)

이미 GitHub와 Vercel 계정이 있고, Node.js와 Git이 설치되어 있다면:

**반복할 단계: STEP 2 ~ STEP 4, STEP 5-2, STEP 6 ~ STEP 10**

구체적으로:
1. **STEP 2**: 새 프로젝트 폴더 만들기 (다른 이름으로)
2. **STEP 3**: Docusaurus 설치
3. **STEP 4**: 프로젝트 구조 만들기
4. **STEP 5-2**: GitHub에 새 저장소만 만들기 (계정 생성과 토큰은 건너뛰기)
5. **STEP 6**: GitHub 연결
6. **STEP 7-2**: Vercel에 새 프로젝트 배포 (계정 생성은 건너뛰기)
7. **STEP 8 ~ 10**: 로컬 테스트 및 문서 작성

**건너뛸 단계:**
- STEP 1: 프로그램 설치 (이미 설치됨)
- STEP 5-1: GitHub 계정 생성 (이미 있음)
- STEP 5-3: 토큰 생성 (기존 토큰 재사용 가능)
- STEP 7-1: Vercel 계정 생성 (이미 있음)

## 일상적인 작업 순서

### 새 문서를 추가할 때:
1. `site-docusaurus\docs` 폴더에 .md 파일 작성
2. **cmd 실행**
3. 로컬 테스트: `npm run start`
4. 만족하면 Ctrl + C로 종료
5. GitHub 업로드:
   ```
   git add .
   git commit -m "새 문서 추가"
   git push
   ```
6. Vercel에서 자동 배포 확인

## 문제 해결

### "npm"을 찾을 수 없다고 나올 때
→ Node.js를 다시 설치하고 컴퓨터 재시작

### "git"을 찾을 수 없다고 나올 때
→ Git을 다시 설치하고 **cmd 창**을 새로 열기

### push할 때 "Authentication failed" 에러
→ Password에 GitHub 비밀번호가 아닌 토큰을 입력했는지 확인

### Vercel 빌드 실패
→ Root Directory가 `site-docusaurus`로 설정되었는지 확인

### 로컬에서 npm run start 에러
→ site-docusaurus 폴더에서 `npm install` 실행 후 다시 시도
> 💡 `npm install`: package.json에 정의된 모든 패키지를 설치하는 명령어

## 추가 팁

### Markdown 문법 기초
- 제목: `# 큰제목`, `## 중간제목`, `### 작은제목`
- 굵은 글씨: `**굵게**`
- 기울임: `*기울임*`
- 목록: `- 항목` 또는 `1. 번호`
- 링크: `[텍스트](URL)`
- 이미지: `![설명](/img/파일명.jpg)`

### 파일 이름 규칙
- 영문 소문자 사용: `ps-100.md` (O), `PS100.md` (X)
- 공백 대신 하이픈: `user-guide.md` (O), `user guide.md` (X)
- 한글 파일명 피하기

### 백업 권장사항
- 주기적으로 전체 폴더를 압축해서 백업
- 중요한 변경 전에는 항상 백업
- GitHub가 자동으로 모든 버전을 보관하지만 로컬 백업도 중요

## 도움말 링크
- Docusaurus 문서: https://docusaurus.io/docs
- Markdown 가이드: https://www.markdownguide.org/basic-syntax/
- Vercel 상태 확인: https://vercel.com/dashboard