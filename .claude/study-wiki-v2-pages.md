# Wiki V2 Pages Study - 2단계 확장 페이지 구조

## Version 2.0 범위
V1 완성 후 추가할 주요 기능 페이지들:
- 🔧 기술 문서 (Technical Docs)
- 🎓 튜토리얼 (Tutorials)
- 🤖 AI/ML 통합 (AI Integration)
- 📖 활용 사례 (Use Cases)
- 🛠️ 지원 (Support)

## 1. 전체 사이트 구조 - V2 추가분

```
FSR 센서 위키 (루트)
│
├── [V1 콘텐츠...]
│
├── 🔧 기술 문서 (Technical Docs)
│   ├── 하드웨어
│   │   ├── 센서 사양서
│   │   ├── 회로도
│   │   ├── PCB 디자인
│   │   └── 기구 설계
│   ├── 소프트웨어
│   │   ├── Arduino 라이브러리
│   │   ├── 예제 코드
│   │   ├── 통신 프로토콜
│   │   └── API 레퍼런스
│   └── 측정 가이드
│       ├── 교정 방법
│       ├── 감도 조정
│       └── 노이즈 필터링
│
├── 🎓 튜토리얼 (Tutorials)
│   ├── 초급
│   │   ├── 첫 번째 프로젝트
│   │   ├── LED 제어하기
│   │   └── 시리얼 모니터 사용법
│   ├── 중급
│   │   ├── 자세 감지 시스템
│   │   ├── 게임 컨트롤러 만들기
│   │   └── 데이터 로깅
│   └── 고급
│       ├── 머신러닝 연동
│       ├── IoT 통합
│       └── 실시간 시각화
│
├── 🤖 AI/ML 통합 (AI Integration)
│   ├── Teachable Machine 연동
│   │   ├── 센서 데이터 수집
│   │   ├── 모델 학습
│   │   └── 모델 배포
│   ├── Web Serial API
│   ├── Web Bluetooth
│   └── TensorFlow.js 활용
│
├── 📖 활용 사례 (Use Cases)
│   ├── 의료/헬스케어
│   │   ├── 자세 교정
│   │   └── 재활 치료
│   ├── 교육
│   │   ├── STEAM 교육
│   │   └── 코딩 교육
│   ├── 산업
│   │   ├── 품질 검사
│   │   └── 안전 모니터링
│   └── 엔터테인먼트
│       ├── 게임 인터페이스
│       └── 인터랙티브 아트
│
└── 🛠️ 지원 (Support)
    ├── FAQ
    ├── 문제 해결
    ├── 다운로드
    │   ├── 드라이버
    │   ├── 소프트웨어
    │   └── 문서
    └── 연락처
```

## 2. 기술 문서 (/technical-docs)

### 2.1 하드웨어 문서

#### 2.1.1 센서 사양서 (/technical-docs/hardware/datasheets)
```markdown
# 센서 사양서 모음

## 원형 센서 시리즈
- [RA9P 데이터시트](./ra9p-datasheet.pdf)
- [RA12P 데이터시트](./ra12p-datasheet.pdf)
- [RA18 데이터시트](./ra18-datasheet.pdf)
- [RA30P 데이터시트](./ra30p-datasheet.pdf)

## 사각형 센서 시리즈
- [QA6P 데이터시트](./qa6p-datasheet.pdf)
- [QA3040P 데이터시트](./qa3040p-datasheet.pdf)

## 방석 센서
- [MDXS-16-5610 데이터시트](./mdxs-16-5610-datasheet.pdf)
```

#### 2.1.2 회로도 (/technical-docs/hardware/schematics)
```markdown
# 회로도 및 연결 가이드

## 기본 측정 회로
### 전압 분배 회로
[회로도 이미지]
```cpp
const int fsrPin = A0;
const int fsrReading;
const float voltage;

void setup() {
  Serial.begin(9600);
}

void loop() {
  fsrReading = analogRead(fsrPin);
  voltage = fsrReading * (5.0 / 1023.0);
  Serial.println(voltage);
  delay(100);
}
```

## Arduino 쉴드 회로도
- [4채널 쉴드 회로도](./4ch-shield-schematic.pdf)
- [32채널 쉴드 회로도](./32ch-shield-schematic.pdf)
```

#### 2.1.3 PCB 디자인 (/technical-docs/hardware/pcb)
```markdown
# PCB 디자인 파일

## 다운로드 가능한 파일
| 제품 | Eagle | KiCad | Gerber |
|------|-------|-------|--------|
| 4채널 쉴드 | [다운로드] | [다운로드] | [다운로드] |
| 32채널 쉴드 | [다운로드] | [다운로드] | [다운로드] |

## PCB 제작 가이드
- 권장 PCB 두께: 1.6mm
- 동박 두께: 1oz
- 표면 처리: HASL
```

### 2.2 소프트웨어 문서

#### 2.2.1 Arduino 라이브러리 (/technical-docs/software/arduino-library)
```markdown
# MDEX FSR Arduino 라이브러리

## 설치 방법
1. Arduino IDE 열기
2. 스케치 > 라이브러리 포함하기 > 라이브러리 관리
3. "MDEX FSR" 검색
4. 설치 클릭

## 기본 사용법
```cpp
#include <MDEXFSR.h>

MDEXFSR sensor(A0);  // 아날로그 핀 A0

void setup() {
  sensor.begin();
  sensor.setThreshold(500);  // 임계값 설정
}

void loop() {
  int pressure = sensor.read();
  float force = sensor.getForce();  // Newton 단위
  
  if (sensor.isPressed()) {
    Serial.println("Pressed!");
  }
}
```

## API 레퍼런스
### 클래스: MDEXFSR
- `begin()`: 센서 초기화
- `read()`: 원시 ADC 값 읽기
- `getForce()`: 힘 값 계산 (N)
- `calibrate()`: 센서 교정
```

#### 2.2.2 통신 프로토콜 (/technical-docs/software/protocols)
```markdown
# 통신 프로토콜 사양

## Serial 프로토콜
### 명령어 형식
```
[CMD][CH][VALUE][CHECKSUM]
```
- CMD: 명령어 (1 byte)
- CH: 채널 번호 (1 byte)
- VALUE: 데이터 (2 bytes)
- CHECKSUM: 체크섬 (1 byte)

### 명령어 목록
| 명령어 | 코드 | 설명 |
|--------|------|------|
| READ | 0x01 | 센서 값 읽기 |
| CALIBRATE | 0x02 | 교정 시작 |
| SET_THRESHOLD | 0x03 | 임계값 설정 |

## I2C 프로토콜
- 기본 주소: 0x48
- 속도: 100kHz / 400kHz
```

### 2.3 측정 가이드

#### 2.3.1 교정 방법 (/technical-docs/measurement/calibration)
```markdown
# FSR 센서 교정 가이드

## 교정이 필요한 이유
- 센서 간 편차 보정
- 정확한 힘 측정
- 드리프트 보상

## 2점 교정 방법
1. **영점 교정**
   - 무부하 상태 측정
   - 오프셋 값 저장

2. **스팬 교정**
   - 알려진 무게 적용 (예: 1kg)
   - 스케일 팩터 계산

## 교정 코드 예제
```cpp
void calibrateSensor() {
  // 영점 교정
  Serial.println("Remove all weight");
  delay(3000);
  int zeroPoint = analogRead(fsrPin);
  
  // 스팬 교정
  Serial.println("Place 1kg weight");
  delay(3000);
  int spanPoint = analogRead(fsrPin);
  
  // 계산
  float scale = 1000.0 / (spanPoint - zeroPoint);
  saveCalibration(zeroPoint, scale);
}
```
```

## 3. 튜토리얼 (/tutorials)

### 3.1 초급 튜토리얼

#### 3.1.1 첫 번째 프로젝트 (/tutorials/beginner/first-project)
```markdown
# 첫 번째 FSR 프로젝트

## 학습 목표
- FSR 센서 연결 방법 이해
- Arduino로 센서 값 읽기
- 시리얼 모니터로 데이터 확인

## 필요 부품
- [ ] FSR 센서 1개
- [ ] Arduino Uno
- [ ] 10kΩ 저항
- [ ] 점퍼 와이어
- [ ] 브레드보드

## Step 1: 회로 연결
[회로도 이미지]
1. FSR 한쪽 → 5V
2. FSR 다른쪽 → A0 & 10kΩ 저항
3. 저항 다른쪽 → GND

## Step 2: 코드 작성
```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.print("FSR Reading: ");
  Serial.println(sensorValue);
  delay(100);
}
```

## Step 3: 테스트
1. 코드 업로드
2. 시리얼 모니터 열기 (9600 baud)
3. 센서 누르기
4. 값 변화 확인

## 문제 해결
- 값이 0인 경우: 연결 확인
- 값이 1023인 경우: 저항 확인
```

### 3.2 중급 튜토리얼

#### 3.2.1 자세 감지 시스템 (/tutorials/intermediate/posture-detection)
```markdown
# 자세 감지 시스템 만들기

## 프로젝트 개요
의자에 여러 FSR 센서를 배치하여 앉은 자세를 감지하고 
경고를 제공하는 시스템

## 필요 부품
- [ ] FSR 센서 4개
- [ ] Arduino Uno
- [ ] LED 3개 (빨강, 노랑, 초록)
- [ ] 부저
- [ ] 10kΩ 저항 4개

## 시스템 구성
```
    [전면]
   S1    S2
   
   S3    S4
    [후면]
```

## 코드 구현
```cpp
const int sensors[4] = {A0, A1, A2, A3};
int readings[4];
enum Posture {GOOD, WARNING, BAD};

Posture checkPosture() {
  for(int i = 0; i < 4; i++) {
    readings[i] = analogRead(sensors[i]);
  }
  
  // 자세 판단 로직
  int balance = abs((readings[0] + readings[1]) - 
                    (readings[2] + readings[3]));
  
  if(balance < 100) return GOOD;
  else if(balance < 200) return WARNING;
  else return BAD;
}
```
```

### 3.3 고급 튜토리얼

#### 3.3.1 머신러닝 연동 (/tutorials/advanced/ml-integration)
```markdown
# FSR 센서와 머신러닝 통합

## TensorFlow.js를 이용한 제스처 인식

### 데이터 수집
```javascript
class FSRDataCollector {
  constructor(serialPort) {
    this.port = serialPort;
    this.data = [];
  }
  
  async collect(label, duration) {
    const samples = [];
    const startTime = Date.now();
    
    while(Date.now() - startTime < duration) {
      const reading = await this.readSensor();
      samples.push(reading);
    }
    
    this.data.push({
      label: label,
      samples: samples
    });
  }
}
```

### 모델 학습
```javascript
async function trainModel(data) {
  const model = tf.sequential({
    layers: [
      tf.layers.dense({units: 16, activation: 'relu', inputShape: [4]}),
      tf.layers.dense({units: 8, activation: 'relu'}),
      tf.layers.dense({units: 3, activation: 'softmax'})
    ]
  });
  
  model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });
  
  await model.fit(xs, ys, {
    epochs: 50,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
      }
    }
  });
  
  return model;
}
```
```

## 4. AI/ML 통합 (/ai-integration)

### 4.1 Teachable Machine 연동

#### 4.1.1 개요 (/ai-integration/teachable-machine/overview)
```markdown
# Teachable Machine과 FSR 센서 통합

## 왜 Teachable Machine인가?
- 코딩 없이 ML 모델 생성
- 실시간 학습 및 테스트
- 웹 기반 인터페이스
- 쉬운 모델 배포

## MDEX 센서 통합 아키텍처
```
FSR 센서 → Arduino → Web Serial → Teachable Machine
                         ↓
                    모델 학습
                         ↓
                    모델 내보내기
                         ↓
                 Arduino/웹앱 배포
```

## 지원 통신 방식
- Web Serial API (권장)
- Web Bluetooth
- WebSocket
```

#### 4.1.2 센서 데이터 수집 (/ai-integration/teachable-machine/data-collection)
```markdown
# 센서 데이터 수집 가이드

## Web Serial 설정
```javascript
// Web Serial 연결
async function connectSerial() {
  const port = await navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });
  
  const reader = port.readable.getReader();
  
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    
    const data = new TextDecoder().decode(value);
    processSensorData(data);
  }
}

// Teachable Machine에 데이터 전송
function processSensorData(data) {
  const values = data.split(',').map(Number);
  
  // Teachable Machine 인터페이스로 전송
  window.postMessage({
    type: 'sensor-data',
    values: values
  }, '*');
}
```

## 데이터 라벨링
1. 클래스 생성 (예: "앉음", "일어섬", "기댐")
2. 각 클래스별 데이터 수집
3. 최소 100개 샘플/클래스 권장
```

#### 4.1.3 모델 학습 (/ai-integration/teachable-machine/training)
```markdown
# 모델 학습 가이드

## 학습 파라미터 설정
- **Epochs**: 50 (기본값)
- **Batch Size**: 16
- **Learning Rate**: 0.001

## 고급 설정
```javascript
const trainingConfig = {
  epochs: 50,
  batchSize: 16,
  learningRate: 0.001,
  // 압력 센서용 커스텀 설정
  preprocessing: {
    normalize: true,
    smoothing: 5  // 이동 평균
  }
};
```

## 모델 검증
- 훈련/검증 분할: 80/20
- 교차 검증 사용
- 혼동 행렬 확인
```

### 4.2 Web Serial API (/ai-integration/web-serial)
```markdown
# Web Serial API 가이드

## 브라우저 지원 확인
```javascript
if ('serial' in navigator) {
  console.log('Web Serial API supported!');
} else {
  console.log('Web Serial API not supported.');
}
```

## Arduino 코드
```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensor1 = analogRead(A0);
  int sensor2 = analogRead(A1);
  int sensor3 = analogRead(A2);
  int sensor4 = analogRead(A3);
  
  Serial.print(sensor1); Serial.print(",");
  Serial.print(sensor2); Serial.print(",");
  Serial.print(sensor3); Serial.print(",");
  Serial.println(sensor4);
  
  delay(50);
}
```

## 웹 애플리케이션
```html
<!DOCTYPE html>
<html>
<head>
  <title>FSR Serial Monitor</title>
</head>
<body>
  <button id="connect">Connect</button>
  <div id="data"></div>
  
  <script>
    document.getElementById('connect').addEventListener('click', async () => {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      
      const textDecoder = new TextDecoderStream();
      const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        document.getElementById('data').textContent = value;
      }
    });
  </script>
</body>
</html>
```
```

## 5. 활용 사례 (/use-cases)

### 5.1 의료/헬스케어

#### 5.1.1 자세 교정 시스템 (/use-cases/healthcare/posture-correction)
```markdown
# 스마트 자세 교정 시스템

## 시스템 개요
- 실시간 자세 모니터링
- 스마트폰 앱 연동
- 장시간 앉은 자세 경고

## 구현 사례
### 병원 재활 센터 적용
- 환자: 척추 측만증 환자 30명
- 기간: 3개월
- 결과: 자세 개선율 75%

## 기술 스펙
- 센서: MDXS-16-5610 방석센서
- 처리: Arduino + 블루투스
- 앱: React Native
```

### 5.2 교육

#### 5.2.1 STEAM 교육 (/use-cases/education/steam)
```markdown
# STEAM 교육용 압력 센서 키트

## 교육 목표
- 센서 원리 이해
- 데이터 수집 및 분석
- 창의적 문제 해결

## 커리큘럼 (10차시)
1. 센서란 무엇인가?
2. 압력과 저항의 관계
3. Arduino 기초
4. 첫 번째 센서 프로젝트
5. 데이터 시각화
6. 게임 컨트롤러 만들기
7. 스마트 의자 프로젝트
8. 머신러닝 기초
9. AI 모델 학습
10. 최종 프로젝트 발표

## 교육 자료
- [교사용 가이드](./teacher-guide.pdf)
- [학생용 워크북](./student-workbook.pdf)
- [프로젝트 예제](./project-examples.zip)
```

## 6. 지원 (/support)

### 6.1 FAQ (/support/faq)
```markdown
# 자주 묻는 질문

## 일반 질문

### Q: FSR 센서와 로드셀의 차이점은?
**A:** FSR은 저렴하고 얇지만 정확도가 낮습니다. 
로드셀은 정밀하지만 크고 비쌉니다.

### Q: 센서 수명은 얼마나 되나요?
**A:** 정상 사용시 100만 회 이상 작동합니다.

## 기술 질문

### Q: 센서 값이 불안정해요
**A:** 다음을 확인하세요:
1. 전원 안정성
2. 풀업 저항 값 (10kΩ 권장)
3. 배선 연결 상태
4. 노이즈 필터링 코드 적용

### Q: 여러 센서를 동시에 사용할 수 있나요?
**A:** 네, Arduino Uno는 6개 아날로그 핀을 제공합니다.
더 많은 센서는 멀티플렉서를 사용하세요.
```

### 6.2 문제 해결 (/support/troubleshooting)
```markdown
# 문제 해결 가이드

## 센서 관련 문제

### 문제: 센서 값이 항상 0
#### 해결 방법:
1. 배선 확인
   - VCC 연결 확인
   - GND 연결 확인
2. 멀티미터로 연속성 테스트
3. 다른 아날로그 핀 시도

### 문제: 센서 값이 항상 1023
#### 해결 방법:
1. 풀다운 저항 확인
2. 센서 단락 확인
3. 전압 분배 회로 재확인

## Arduino 관련 문제

### 문제: 시리얼 통신 안됨
#### 해결 방법:
1. COM 포트 확인
2. 보드 타입 설정 확인
3. 드라이버 재설치
```

### 6.3 다운로드 (/support/downloads)
```markdown
# 다운로드 센터

## 드라이버
- [CH340 USB 드라이버 (Windows)](./drivers/ch340-windows.zip)
- [CH340 USB 드라이버 (Mac)](./drivers/ch340-mac.zip)
- [FTDI 드라이버](./drivers/ftdi.zip)

## 소프트웨어
- [MDEX FSR Monitor v1.2](./software/fsr-monitor.exe)
- [Arduino IDE 1.8.19](https://arduino.cc)
- [Processing 4.0](https://processing.org)

## 문서
- [전체 매뉴얼 (PDF)](./docs/complete-manual-kr.pdf)
- [빠른 시작 가이드](./docs/quick-start-kr.pdf)
- [API 문서](./docs/api-reference.pdf)

## 예제 코드
- [기본 예제 모음](./examples/basic-examples.zip)
- [고급 프로젝트](./examples/advanced-projects.zip)
- [ML 예제](./examples/ml-examples.zip)
```

## 7. V2 구현 계획

### Phase 1 (Week 5-6)
1. 기술 문서 구조 생성
2. 하드웨어 문서 마이그레이션
3. Arduino 라이브러리 문서화
4. 다운로드 섹션 구축

### Phase 2 (Week 7-8)
1. 초급 튜토리얼 3개 작성
2. 중급 튜토리얼 2개 작성
3. 코드 예제 테스트
4. 이미지/다이어그램 제작

### Phase 3 (Week 9-10)
1. AI/ML 통합 섹션
2. Teachable Machine 가이드
3. Web Serial API 문서
4. 샘플 웹 애플리케이션

### Phase 4 (Week 11-12)
1. 활용 사례 작성
2. FAQ 정리
3. 문제 해결 가이드
4. 지원 채널 설정

## 8. 인터랙티브 요소 - V2

### 8.1 코드 플레이그라운드
```javascript
// CodeSandbox 임베드
<iframe
  src="https://codesandbox.io/embed/fsr-sensor-demo"
  style="width:100%; height:500px;"
  sandbox="allow-scripts allow-same-origin"
/>
```

### 8.2 실시간 센서 시뮬레이터
```javascript
// P5.js 기반 시뮬레이터
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 1023, 0);
}

function draw() {
  background(220);
  let val = slider.value();
  let force = map(val, 0, 1023, 0, 10);
  
  fill(map(val, 0, 1023, 0, 255), 0, 0);
  circle(200, 200, force * 20);
  
  text(`ADC: ${val}`, 10, 20);
  text(`Force: ${force.toFixed(1)}N`, 10, 40);
}
```

### 8.3 3D 모델 뷰어
```html
<!-- Three.js 기반 3D 뷰어 -->
<model-viewer 
  src="/models/fsr-sensor.glb"
  alt="FSR 센서 3D 모델"
  camera-controls
  auto-rotate>
</model-viewer>
```

## 9. 검색 및 네비게이션 - V2

### 9.1 고급 검색
- Algolia DocSearch 통합
- 필터: 카테고리, 난이도, 언어
- 자동완성 및 제안
- 검색 결과 하이라이팅

### 9.2 진도 추적
```javascript
// 사용자 진도 저장
const progress = {
  tutorials: {
    beginner: ['first-project', 'led-control'],
    intermediate: ['posture-detection'],
    advanced: []
  },
  lastVisited: '/tutorials/intermediate/game-controller'
};

localStorage.setItem('userProgress', JSON.stringify(progress));
```

## 10. 성능 최적화 - V2

### 10.1 코드 분할
```javascript
// 동적 임포트
const TutorialComponent = lazy(() => 
  import('./components/Tutorial')
);

// 라우트 기반 분할
const routes = [
  {
    path: '/tutorials/*',
    component: lazy(() => import('./pages/Tutorials'))
  },
  {
    path: '/ai-integration/*',
    component: lazy(() => import('./pages/AIIntegration'))
  }
];
```

### 10.2 이미지 최적화
- 모든 이미지 WebP 변환
- 지연 로딩 구현
- srcset을 통한 반응형 이미지
- CDN 활용 (Cloudinary/Imgix)

### 10.3 캐싱 전략
```javascript
// Service Worker 캐싱
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    // API 캐시: Network First
    event.respondWith(networkFirst(event.request));
  } else if (event.request.url.includes('/static/')) {
    // 정적 자산: Cache First
    event.respondWith(cacheFirst(event.request));
  }
});
```