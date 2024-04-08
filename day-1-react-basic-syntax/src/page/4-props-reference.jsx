/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./page.module.css";
import { fruits } from "../sampleData.mjs";

// React 컴포넌트도 HTML 엘리먼트처럼 위계 질서가 있다.
// 부모 - 자식 요소, 조상 - 후손 요소 들어봤으면 비슷하다.
// 아래와 같이 JSDoc을 적어주면 다른 개발자가 보기 편하다. 나중에 TypeScript를 쓰면 간소화 할 수 있다.

/**
 * ChildComponent 함수는 목록 항목을 렌더링하는 리액트 함수형 컴포넌트입니다.
 * 
 * @param {Object} props - 이 컴포넌트에 전달되는 props 객체입니다.
 * @param {string} props.name - 렌더링할 항목의 이름입니다.
 * @param {string} props.color - 항목의 색상을 나타내는 문자열입니다.
 * @param {number|string} props.price - 항목의 가격을 나타내는 숫자 또는 숫자 형태의 문자열입니다.
 * @returns {JSX.Element} li 요소로 구성된 JSX를 반환합니다. 이 요소는 이름, 색상, 그리고 가격 정보를 포함합니다.
 */
function ChildComponent(props) {
  const { price } = props;

  return (
    <li>
      <span>{props.name}</span>
      <span>{props.color}</span>
      <span>{price}</span>
    </li>
  );
}

// 컴포넌트에서 다른 React 컴포넌트를 불러와 렌더링하면 불러온 컴포넌트가 자식 컴포넌트
// 같은 자식 컴포넌트를 여러개 렌더링하는 경우 key값을 지정해야 한다.
function ParentComponent() {
  return (
    <div>
      <span>부모 컴포넌트</span>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (
          <ChildComponent key={i + f.name} name={f.name} color={f.color} price={f.price} />
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div className={s.appContainer}>
      <ParentComponent></ParentComponent>
    </div>
  );
}
