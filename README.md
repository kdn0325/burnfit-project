# [BurnFit] Front-end 개발 과제

## 실행 방법

```bash

# yarn 환경에서 패키지 설치
yarn install

# iOS 환경 설정
cd ios && pod install && cd ..

# 앱 실행
yarn start
yarn ios      # iOS 시뮬레이터 실행
yarn android  # Android 에뮬레이터 실행
```

---

## 개발 환경

- **yarn** `1.22.22`
- **React Native Cli** `0.81.0`
- **Cocoapod** `1.16.2`
- **React Native Reanimated**` 4.0.2`

---

## 📂 폴더 구조

```plaintext
src
├── App.tsx                                            // 루트
├── components
│ ├── Calendar.tsx                                 // 캘린더 컴포넌트
│ ├── CalendarGrid.tsx                          // 캘린더 셀
│ ├── CalendarHeader.tsx                     // 캘린더 (월 표기)
│ └── CalendarWeekdays.tsx                // 캘린더 (요일 표기)
├── navigation
│ └── BottomTabs.tsx                            // 바텀 탭 네비게이션
├── screens
│ ├── Calendar
│ │ └── CalendarScreen.tsx                   // Calendar 스크린
│ ├── Home
│ │ └── HomeScreen.tsx                        // Home 스크린
│ ├── Library
│ │ └── LibraryScreen.tsx                      //  Library 스크린
│ ├── MyPage
│ │ └── MyPageScreen.tsx                    // MyPage 스크린
│ └── index.ts
├── types
│ └── Calendar.ts                                    // Calendar 타입
└── util
└── calendarUtils.ts                                // 달력 구현 유틸 함수
```

## 📸 스크린샷 / GIF

| <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/91298955/478434080-2e6dbaac-ffc4-4f72-9253-70f3f8662040.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T131402Z&X-Amz-Expires=300&X-Amz-Signature=52e0cfb33c2eef8e26cabd5961610e888c4c6ff9203bb43ed19d3203269a65a2&X-Amz-SignedHeaders=host" width="350px"> | <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/91298955/478434085-6f5607c7-5457-4354-bfc3-a7d7e00c11f2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T131419Z&X-Amz-Expires=300&X-Amz-Signature=64800e304e23fddf0cdf8662dba7a6c567b13c79c4a547ae2ba6724cfb06a833&X-Amz-SignedHeaders=host" width="350px"> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                                                                                          안드로이드                                                                                                                                                                                                          |                                                                                                                                                                                                            아이폰                                                                                                                                                                                                            |

---

## 💡 구현 과제 목표

- https://bunnit.notion.site/BurnFit-Front-end-20e8af48937680a798ebc5e2f3d1d1e1
