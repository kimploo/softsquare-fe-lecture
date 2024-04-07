import React from 'react'
import s from './page.module.css'

function NewReactComponent() {
  return <div>NewReactComponent입니다.</div>
}

export default function Page() {
  // JSX는 JavaScript XML의 약자로, JavaScript에 HTML(및 XML) 문법 규칙을 적용한 새로운 문법이다.
  // HTML과 문법이 비슷하기 때문에 코드를 보며 화면을 상상하면서 개발할 수 있는 것이 장점.
  // React에서 많이 사용한다. React Element를 생성할 때 사용한다.
  
  // 규칙 1.
  // HTML처럼 원하는 요소 이름과 opening tag, closing tag를 작성한다.
  // JavaScript의 표현식 `'hello world'`, `1 + 2 + 3 + 4`도 변수에 할당할 수 있는 것 처럼 JSX 표현식도 변수에 할당할 수 있다.
  // const jsxDiv = <div></div>;
  // const jsDiv = /*#__PURE__*/React.createElement("div", null);
  
  // 규칙 2.
  // HTML은 클래스 이름을 지정할 때 `class` 속성을 사용하지만 JSX는 `className`으로 작성한다.
  // eslint-disable-next-line react/no-unknown-property
  // const divWithClass = <div class="message">이 메시지는 div에 class 속성을 사용합니다.</div>
  // const divWithClassName = <div className="message">이 메시지는 div에 className 속성을 사용합니다.</div>
  // const divWithModuleCSS = <div className={s.message}>이 메시지는 div에 classNamed와 module css를 함께 사용합니다.</div>
  
  // const randomInt = Math.trunc(Math.random() * 10)

  return (
    <div className={s.appContainer}>
      {/* 규칙 3, JSX 중간에 JavaScript/JSX 표현식을 넣으려면 중괄호를 이용한다. */}
      {/* {jsxDiv}
      {jsDiv}
      
      {divWithClass}
      {divWithClassName}
      {divWithModuleCSS}
      
      {randomInt} */}
      
      {/* 규칙 4. 리엑트 컴포넌트의 이름은 대문자로 시작하고, PascalCase 규칙을 따른다. */}
      {/* <NewReactComponent></NewReactComponent>
      <NewReactComponent /> */}
      
      {/* TIP. 조건에 따라 다른 컴포넌트 or 엘리먼트를 렌더링하고 싶으면 하나의 표현식으로 마무리 해야한다. */}
      {/* {randomInt % 2 === 0 ? <div>randomInt는 짝수입니다.</div> : <div>randomInt는 홀수입니다.</div>}
      {randomInt % 2 === 0 && <div>randomInt가 짝수인 경우에 볼 수 있습니다.</div>} */}
    </div>
  )
}
