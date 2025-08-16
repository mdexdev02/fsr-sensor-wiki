# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a product tutorial wiki project for selling pressure sensors, measurement circuits, and software services. The goal is to create a wiki-style website to provide customers with product documentation, usage methods, and product characteristics.

The project is in early development stage with the following structure:
- **wiki-vercel/**: Main directory for Vercel deployment (currently empty)
- **resources/**: Resources directory (currently empty)
- **기획/**: Planning directory (currently empty)

## Deployment Information

- **Hosting Platform**: Vercel
- **Deployment Directory**: wiki-vercel/
- **Service Accounts**:
  - Vercel: mdex.dev02@gmail.com
  - GitHub: mdex.dev02@gmail.com
  - Firebase: mdex.dev02@gmail.com

## Development Notes

1. The wiki will feature multiple product categories with sub-menus for:
   - Hardware specifications
   - Usage methods
   - Reference materials

2. Content management should be streamlined as articles will be continuously updated

3. Ignore all .zip files (used for local backups)

## 자주 하는 작업
- 새 제품 추가 시: docs/products/에 .md 생성 → sidebars.js 업데이트
- 이미지는 항상 /static/img/에 저장
- 커밋 메시지는 한국어로 작성

## 프로젝트 규칙
- 파일명: 영문 소문자, 하이픈 사용
- 모든 제품 문서는 동일한 템플릿 구조
- 배포 전 npm run build로 확인


## Current Status

The project is in initial setup phase. The main implementation will be in the `wiki-vercel` directory for Vercel deployment.