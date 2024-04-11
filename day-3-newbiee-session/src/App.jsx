/* eslint-disable react/prop-types */
/**
 * 대문자로 시작하고, 리엑트가 호출하는 자바스크립트 함수는 React Component
 */

import { useEffect } from "react";
import { useState } from "react"

 
// 저는 그 상태 변수 부분이 부모 컴포넌트에서 자식 컴포넌트로
// 전달되는 부분이 좀 어렵습니다

/**
 * function useState(초기값) {
 *  let 상태변수 = 초기값;
 *  const 상태갱신함수 = function (새로운상태변수) {
 *    상태변수 = 새로운상태변수
 *  }
 *  return [상태변수, 상태갱신함수]
 * }
 * 
 * useState 호출이 다 끝나고 ... 컴포넌트가 새롭게 렌더링 된다.
 * 
 */
 
function JustImage(props) {
  console.log('렌더링 했니? 컴포넌트 호출 했니?')
  console.log('props', props)
  
  const { isTrue } = props;

  return isTrue ? <img src="https://images.unsplash.com/photo-1712135595414-a812efd36c16?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  style={{
    width: 300,
    // display: isTrue ? 'block' : 'none'
  }}
  ></img> : null
}

export default function App() {
  // const arr = useState(true); // [상태변수 = true, 상태갱신함수]
  // const stateVar = arr[0]
  // const setState = arr[1]
  const [isTrue, setIsTrue] = useState(true);
  
  useEffect(() => {
    // 컴포넌트가 새롭게 랜더링 될 떄 실행하는 함수
    // 렌더링이 끝나고 실행된다.
    console.log('useEffect')
    // 컴포넌트 내부의 상태가 바뀔 때 마다 
    // 컴포넌트는 새롭게 렌더링이 된다 즉, 호출된다.
    // 그래서 useEffect가 실행되었다
  }, [isTrue])
  
  // event handler
  // DOM 엘리먼트의 이벤트 실행 시 작동하는 callback 함수

  return (
    <div>
      <button onClick={() => {
        console.log('click')        
        setIsTrue(!isTrue)
      }}>{isTrue.toString()}</button>
      <JustImage
      // {...{
      //   isTrue: isTrue
      // }}
        isTrue={true}
      ></JustImage>
    </div>
  )
}

