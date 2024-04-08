# softwaresq-fe-lecture

## Day 1

### 프론트엔드 프레임워크의 발전과 React

아래 주요 키워드에 대해서 대략적인 개념 이해를 했으면 OK

- 웹 문서의 시작, 최초의 인터넷
- 웹 애플리케이션의 등장, Ajax
- 웹 애플리케이션이 복잡도 증가, 프레임워크 등장, Angular
- 좀 더 가벼운 프레임워크스러운 라이브러리, React
- 더 견고한 React 개발을 위해, Next.js

### React Getting Started (Webpack)

Webpack을 함께 설치해보며 아래 내용에 대해서 대략적으로 이해했으면 OK

- 생소한 React 코드가 어떻게 빌드를 통해 바닐라 HTML/CSS/JS가 되는지 과정을 이해
- 빌드를 위해 다양한 툴이 필요하다는 것을 이해 (자세히 알 필요 없음)

### React Getting Started (Vite)

Vite로 React 개발 서버를 켤 수 있으면 OK

- Vite 개발자 공식 문서를 보고 Vite 보일러플레이트 코드를 가져올 수 있다.

### JSX

아래 JSX의 의미 대해서 이해한다.

- JSX는 HTML과 유사한 확장 문법이고, JavaScript와 마크업을 함께 쓸 수 있다

아래 JSX 원칙을 읽고 코드를 직접 작성할 수 있어야 한다.

- HTML처럼 원하는 요소 이름과 opening tag, closing tag가 있어야 JSX 표현식이 된다.
- JavaScript의 표현식 `'hello world'`, `1 + 2 + 3 + 4`도 변수에 할당할 수 있는 것 처럼 JSX 표현식도 변수에 할당할 수 있다.
- HTML은 클래스 이름을 지정할 때 `class` 속성을 사용하지만 JSX는 `className`으로 작성한다.
  - 그 외에도 기존 HTML과 다른 규칙이 일부 있지만, 차차 알아가는 것으로!
- JSX 중간에 JavaScript/JSX 표현식을 넣으려면 중괄호를 이용한다.
- 리엑트 컴포넌트의 이름은 대문자로 시작하고, PascalCase 규칙을 따른다.
- JSX와 map을 사용하여 반복된 마크업 코드를 줄일 수 있다.

## Day 2

### 무작정 장바구니 애플리케이션 만들어보기

- 브라우저가 HTML을 파싱하는 과정에 대해서 이해한다.
- CSS Flexbox, Flex Container, Flex Item에 대해서 이해한다.
- CSS Flexbox로 아래 간단한 프론트엔드 작업을 할 수 있다.
  - Centering
  - 간단한 Grid
  
### React 기초

- 컴포넌트 기반으로 생각하기
- props
- state
- React CRUD
- class, function 비교
  - 라이프사이클