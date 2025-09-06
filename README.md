# FSR 센서 기술 위키 📚

FSR(Force Sensitive Resistor) 압력 센서에 대한 종합 기술 문서 사이트입니다.

## 🌐 라이브 사이트
**https://fsr-sensor-wiki.vercel.app/**

## 📖 주요 내용

- **FSR 센서 기초** - 센서의 원리, 특성, 응용 분야
- **제품 카탈로그** - 다양한 FSR 센서 제품 사양
- **측정 회로** - 센서 인터페이스 회로 설계
- **기술 문서** - 상세 기술 자료 및 데이터시트
- **튜토리얼** - 실습 예제와 프로젝트

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치
```bash
npm install
```

### 로컬 개발 서버 실행
```bash
npm run start
```

브라우저에서 http://localhost:3000 접속

### 빌드
```bash
npm run build
```

## 🛠 기술 스택

- **Framework**: [Docusaurus 3.8.1](https://docusaurus.io/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Language**: MDX (Markdown + React)
- **Version**: V.0.2.1.0

## 📝 문서 기여

1. `docs/` 폴더에 새 문서 추가
2. MDX 형식으로 작성 (Markdown + React 컴포넌트)
3. `sidebars.js`에서 메뉴 구조 업데이트

## 📂 프로젝트 구조

```
site-docusaurus/
├── docs/           # 문서 파일
├── resources/   # 기존 위키에서 사용했던 기술 자료, 회사 소개 자료.
├── src/            # React 컴포넌트 및 스타일
├── static/         # 정적 파일 (이미지 등)
├── blog/           # 블로그 포스트
└── docusaurus.config.js  # 사이트 설정
```

## 📞 문의

- **이메일**: mdex.dev02@gmail.com
- **GitHub Issues**: 버그 리포트 및 기능 제안

## 📄 라이선스

Copyright © 2025 FSR Sensor Wiki. Built with Docusaurus and Vercel.