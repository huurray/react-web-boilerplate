# react-web-boilerplate

> simple react web boilerplate by huurray.

## 기본 컨셉

- CRA Typescript 템플릿을 사용하여 생성한다.
- styles 폴더에 모듈화된 UI 컴포넌트(atoms)를 모아 사용한다.
- redux는 custom hooks를 사용하여 각 주제별 state와 dispatch를 동시에 관리한다.
- 해당 페이지에 생성되는 molecules는 각 페이지 폴더에 생성한다. 그러나 다른 페이지에도 사용되는 등 2번 이상 사용되면 components 폴더에 넣는다.
- api 호출 및 redux 저장 로직은 미들웨어를 사용하지 않고 custom hooks를 사용하여 관리한다.

## 디렉토리

```bash
├── src
    ├── api                # api 호출 및 데이터 처리
    ├── assets             # static 파일들
    ├── components         # 모듈화된 컴포넌트
    ├── hocs               # hocs
    ├── hooks              # hooks
    ├── lib                # js pure functions
    ├── pages              # 라우터 페이지 컴포넌트
    ├── stores             # 리덕스 slices(action, store, reducer)
    ├── styles
        ├── ui             # 모듈화된 UI컴포넌트
        ├── base.ts        # 스타일 리셋 및 글로벌 스타일 정의
        ├── colors.ts      # 컬러 정의
        ├── sizes.ts       # 사이즈 정의
        ├── typography.tsx # 텍스트 정의
        ├── index.tsx      # ui폴더의 컴포넌트를 임폴트하여 관리
    ├── App.tsx            # Provider, hocs 설정
    ├── Navigator.tsx      # 라우터 설정
    ├── index.tsx
```

## 명령어

```
  로컬(개발) 서버 실행
  npm start

  production 배포를 위한 production build 실행
  npm run build
```

## 기본 Packages

### 라우팅

    - react-router-dom

### 상태관리

    - @reduxjs/toolkit
    - react-redux

### 스타일링

    - styled-components
    - styled-reset

### API 호출

    - axios

## 추천 VS-Code Extension

1. **Code Spell Checker**

   스펠링을 체크해 오타를 줄여줌. 예외처리 가능.

2. **vscode-styled-components**

   styled-components 구문 사용시 Syntax를 하이라이팅해줌.
