# 프론트엔드 설정

## Prettier
저장 및 자동 정렬시 코드 스타일을 맞춰주는 역할을 한다.

### 1. 저장 설정
먼저 저장할때 코드스타일이 적용되도록 하기 위해 자동저장을 해제한다.

Settings -> Appearnce & Behavior -> System Settings에 들어가 다음과 같이 설정한다.
![01 자동저장](https://user-images.githubusercontent.com/44297538/110923011-c4b30680-8363-11eb-8e41-2f54d811c756.jpg)

### 2. IntelliJ Prettier Plugin 설치
Setting -> Plugins에 가서 Prettier를 검색하고 설치한다. 검색창에 Prettier를 쳐도 나오지 않으면 Search in Marketplace를 누르면 나온다.
![02 프리티어플러그인](https://user-images.githubusercontent.com/44297538/110923016-c4b30680-8363-11eb-9c63-c38cb1f7b283.JPG)

### 3. 패키지 설치
터미널에서 다음 명령어로 Prettier package를 설치한다. 만약 `yarn`이 설치되어 있다면 `yarn global add prettier`를 입력, 설치되어있지 않다면 `npm install –global prettier`로 설치한다. 아마 써보면 편해서 또 쓸수 있으니까 global로 설치하자.

### 4. Prettier 설정
Setting -> Languages & Frameworks -> JavaScript -> Prettier에 들어가 다음 사진과 같이 설정한다.
![03 프리티어설정](https://user-images.githubusercontent.com/44297538/110923007-c381d980-8363-11eb-83bd-a6797a4a6a48.jpg)
Prettier package에서 다음과 같이 지정해준다. 아래에 On code reformat, On save에 체크해주자. 두 옵션을 체크하면 코드 리포맷, 저장 시 자동으로 코드 스타일을 변경해준다.

### 5. Prettier 옵션 변경
필요하다고 생각될때만 하면 된다. 이 옵션을 바꾸면 모두에게 동기화되니 이야기를 하고 바꿀 것. frontend 폴더에 .prettierrc라는 파일이 있다.(지금은 없을텐데 곧 올릴거다) 그 파일을 변경하면 코드 
