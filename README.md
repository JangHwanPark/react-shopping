## Lexus Website Clone

이 프로젝트는 렉서스의 공식 웹사이트를 클론하여 제작된 웹 애플리케이션입니다.

사용자는 렉서스의 다양한 차량 모델을 탐색하고, 개인화된 차량 구성을 만들며,

로그인, 마이 어카운트 접근, 시승 신청 등의 기능을 이용할 수 있습니다.

<br>

## 기능

- 모델별 소개: 렉서스의 각 차량 모델에 대한 상세 정보 제공. 
- 내 차량 만들기: 사용자가 선호하는 옵션을 선택하여 개인화된 차량 구성. 
- 로그인: Google 계정을 이용한 로그인 기능. 
- 마이 어카운트: 사용자 계정 관리 및 설정. 
- 시승 신청: 원하는 차량 모델에 대한 시승 신청.

<br>

## 기술 스택

- 프론트엔드: React, JavaScript, SCSS 
- 백엔드: Firebase (Authentication, Firestore Database, Hosting)

<br>

## 프로젝트 구조
```text
/src
    /components        # 재사용 가능한 UI 컴포넌트
    /hooks             # 커스텀 훅
    /data              # 데이터 모델
    /pages             # 각 페이지 컴포넌트
    /scss              # SCSS 스타일 시트
    /utils             # 유틸리티 코드
    App.js             # 메인 애플리케이션 컴포넌트
    index.js           # 엔트리 포인트
```

## 로컬 개발 시작하기

이 프로젝트를 로컬 환경에서 실행하기 위한 단계입니다

1. 리포지토리 클론
```text
git clone https://your-repository-url.com
cd react-shopping
```

2. 의존성 설치
```text
yarn install
```

3. 로컬 서버에서 애플리케이션 실행
```text
yarn start
```