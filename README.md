# PghdApp

PGHD 데이터를 업로드하고, 수정, 삭제 기능이 있는 애플리케이션 입니다.

## Getting Started

로그인이 안되었을때의 View는 `src/components/main.tsx`부터 시작합니다. 
모든 style은 `src/components/style.tsx`에 적용되어 있습니다. 
추가적으로 테스트전에 **Installing**을 꼭 확인 후 **Running the tests**을 해야 큰 에러없이 테스트가 가능합니다.

### Prerequisites

프로젝트 시작전 설정 및 설치 방법입니다.

**react-native ios, android설정**
`Creating a new application 과정은 제외` [https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment] 해당 url의 ios, android 설정이 필요합니다.
만약 `adb error`가 있다면 `brew cask install android-platform-tools` 실행해주세요.

```
npm install
react-native link
```

### Installing

ios, android install

**ios**

```
sudo gem install cocoapods
"cd ios" 
pod install

```

**rn-apple-healthkit**

꼭 반드시 ios 폴더에서 pod install을 한 후 cd .. 후 link 해주세요.
자세한 내용은 [HEALTHKIT.md](https://github.com/KimJunYoung1/PghdApp/blob/develop/HEALTHKIT.md)에 있습니다.

```
react-native link rn-apple-healthkit

```

**android**

만약 `android/app`에 `debug.keystore` file이 없다면 [https://github.com/facebook/react-native/issues/25629] 이 링크로 들어간 후 "@bondehagen"이 올린 url click 후 다운로드 합니다.
다운로드가 완료 됐다면 `debug.keystore` file을 `android/app`으로 옮겨야합니다.

### Setting

settings.json에 들어가서 해당 코드로 추가 설정이 필요합니다.

```
{
  "workbench.colorTheme": "Spirited Away",
  "window.zoomLevel": 1,
  "liveServer.settings.donotShowInfoMsg": true,
  "eslint.autoFixOnSave": true,
  "terminal.integrated.rendererType": "dom",
  "editor.formatOnSave": true,
  "prettier.singleQuote": false,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true,
  "files.associations": {
    ".gitignore": "ignore"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.format.enable": false,
  "prettier.tslintIntegration": true,
  "eslint.alwaysShowStatus": true,
  "workbench.sideBar.location": "left",
  "typescript.updateImportsOnFileMove.enabled": "always"
}

```

### And repeat

만약 새 라이브러리나 모듈을 설치했다면 아래의 과정을 다시 해주어야합니다.
```
npm install
react-native link

```

**ios**
```
"cd ios"
pod install

```

### Running the tests
---
**file build** [app.js](https://github.com/KimJunYoung1/PghdApp/blob/develop/app.js)는 TypeScript를 compile전이기 때문에 `src`file을 가르키고 있습니다.
npm run tsc후 build file이 정상적으로 생겼다면 [app.js](https://github.com/KimJunYoung1/PghdApp/blob/develop/app.js)의 6번째줄을 `./build/navigator/stack-navi.tsx`로 변경해주세요.
만약 정상적으로 build file이 생성되지 않는다면 [tsconfig.json](https://github.com/KimJunYoung1/PghdApp/blob/develop/tsconfig.json)을 확인하여 설정추가 및 수정이 필요합니다.
```
npm run tsc
```

**ios simulator**

```
react-native run-ios
```

**android emulator**
테스트시 경로 문제가 해결이 안됐습니다.
android를 테스트하기 위해선 [app.js](https://github.com/KimJunYoung1/PghdApp/blob/develop/src/redux/redux-work.js) 6번째 줄을 `mypage-root.android.tsx`로 변경해야 테스트가 가능합니다.

```
npm start
react-native run-android
```


## Built With

- [React Native](https://facebook.github.io/react-native/) - 기본 프레임워크
- [React Navigation](https://reactnavigation.org/)
- [React Native HealthKit](https://github.com/KimJunYoung1/PghdApp/blob/develop/HEALTHKIT.md) - 해당 파일에 작성된 url 확인
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
