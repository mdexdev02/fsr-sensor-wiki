# 이미지 관리 전략 - 하이브리드 방식

## 기본 원칙

### 1. 페이지 전용 이미지 → 같은 폴더
```
docs/
└── basics/
    ├── what-is-fsr.mdx
    ├── what-is-fsr-structure.png      # 이 페이지만 사용
    ├── what-is-fsr-diagram.svg        # 이 페이지만 사용
    ├── how-it-works.mdx
    └── pressure-resistance-graph.png   # 이 페이지만 사용
```

### 2. 공용 이미지 → static 폴더
```
static/
└── img/
    ├── logo.png                 # 사이트 로고
    ├── favicon.ico              # 파비콘
    ├── products/                # 여러 페이지에서 참조하는 제품 이미지
    │   ├── ra9p.jpg
    │   └── ra12p.jpg
    └── icons/                   # 공용 아이콘
        ├── arduino.svg
        └── download.svg
```

## 이미지 사용 가이드라인

### 페이지 전용 이미지 (같은 폴더)
- ✅ 사용하는 경우:
  - 특정 페이지에서만 사용하는 다이어그램
  - 페이지 고유의 설명 이미지
  - 튜토리얼 단계별 스크린샷
  - 페이지 특화 그래프나 차트

- 참조 방법:
```markdown
![FSR 구조](./what-is-fsr-structure.png)
```

### 공용 이미지 (static 폴더)
- ✅ 사용하는 경우:
  - 제품 사진 (여러 페이지에서 참조)
  - 회사 로고
  - 공통 아이콘
  - 배너 이미지

- 참조 방법:
```markdown
![RA9P 센서](/img/products/ra9p.jpg)
```

## FSR 기초 챕터 이미지 구조

```
site-docusaurus/
├── docs/
│   └── basics/
│       ├── intro.md
│       ├── what-is-fsr/
│       │   ├── index.mdx
│       │   ├── fsr-structure.png        # FSR 구조 다이어그램
│       │   ├── fsr-layers.svg           # 상판/하판 설명
│       │   └── fsr-comparison-table.png # 장단점 비교표
│       ├── how-it-works/
│       │   ├── index.mdx
│       │   ├── pressure-resistance.png   # 압력-저항 그래프
│       │   ├── circuit-basic.svg        # 기본 회로도
│       │   └── measurement-flow.png     # 측정 흐름도
│       ├── electrical-characteristics/
│       │   ├── index.mdx
│       │   ├── response-time.png        # 응답 시간 그래프
│       │   └── temperature-drift.png    # 온도 특성 그래프
│       ├── mechanical-characteristics/
│       │   ├── index.mdx
│       │   ├── force-range.png          # 압력 범위 다이어그램
│       │   └── bending-radius.svg       # 굴곡 반경 설명
│       └── applications/
│           ├── index.mdx
│           ├── medical-use.jpg          # 의료 응용 예시
│           ├── industrial-use.jpg       # 산업 응용 예시
│           └── consumer-use.jpg         # 소비자 제품 예시
│
└── static/
    └── img/
        ├── logo.png                     # MDEX 로고
        ├── products/                    # 제품 공용 이미지
        │   ├── sensors/
        │   │   ├── ra9p.jpg
        │   │   ├── ra12p.jpg
        │   │   ├── ra18.jpg
        │   │   └── qa6p.jpg
        │   └── kits/
        │       ├── starter-kit.jpg
        │       └── coding-kit.jpg
        └── common/                      # 공용 아이콘/이미지
            ├── download-icon.svg
            ├── arduino-logo.svg
            └── github-icon.svg
```

## 이미지 명명 규칙

### 파일명 규칙
- 소문자 사용
- 하이픈으로 단어 구분
- 설명적인 이름 사용

#### 좋은 예:
- `fsr-structure-diagram.png`
- `pressure-resistance-graph.svg`
- `ra9p-product-photo.jpg`

#### 나쁜 예:
- `IMG_001.png`
- `그림1.jpg`
- `FSR_DIAGRAM_FINAL_v2.PNG`

### 파일 형식 선택
- **PNG**: 다이어그램, 스크린샷, 투명 배경 필요 시
- **JPG**: 사진, 복잡한 이미지
- **SVG**: 아이콘, 로고, 벡터 다이어그램
- **WebP**: (선택) 성능 최적화 시

## 이미지 최적화

### 크기 가이드라인
- 일반 이미지: 최대 1200px 너비
- 썸네일: 400px × 300px
- 아이콘: 64px × 64px
- 파일 크기: 가능한 200KB 이하

### 최적화 도구
```bash
# ImageMagick으로 리사이즈
convert original.png -resize 1200x1200 optimized.png

# 품질 조정
convert original.jpg -quality 85 optimized.jpg

# WebP 변환
cwebp -q 80 original.png -o optimized.webp
```

## 이미지 import 예시

### MDX에서 이미지 사용
```jsx
// what-is-fsr.mdx
import FSRStructure from './fsr-structure.png';
import ComparisonTable from './comparison-table.svg';

# FSR 센서란?

<img src={FSRStructure} alt="FSR 센서 구조" />

또는 마크다운 방식:

![FSR 센서 구조](./fsr-structure.png)

공용 이미지 참조:

![RA9P 제품](/img/products/sensors/ra9p.jpg)
```

## 이미지 소스 및 마이그레이션 계획

### 1단계: 기존 이미지 수집
- [ ] Google Sites (https://sites.google.com/site/mdexfsr2016/)에서 복구
- [ ] mdex-shop.com에서 제품 이미지 다운로드
- [ ] resources 폴더의 기존 이미지 활용

### 2단계: 새 이미지 제작
- [ ] 깨진 다이어그램 재제작
- [ ] 회로도 SVG 변환
- [ ] 인포그래픽 디자인

### 3단계: 최적화 및 배치
- [ ] 모든 이미지 최적화
- [ ] 하이브리드 구조에 따라 배치
- [ ] MDX 파일에서 참조 업데이트

## 체크리스트

### FSR 기초 챕터 이미지 준비
- [ ] FSR 구조 다이어그램
- [ ] 압력-저항 관계 그래프
- [ ] 기본 측정 회로도
- [ ] 전기적 특성 그래프
- [ ] 기계적 특성 다이어그램
- [ ] 응용 분야별 예시 사진

### 공용 이미지 준비
- [ ] 회사 로고
- [ ] 제품 사진 (센서별)
- [ ] 아두이노 로고
- [ ] 다운로드 아이콘
- [ ] GitHub 아이콘