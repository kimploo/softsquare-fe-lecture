/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./page.module.css";
import { fruits } from "../sampleData.mjs";

// React 컴포넌트도 HTML 엘리먼트처럼 위계 질서가 있다.
// 부모 - 자식 요소, 조상 - 후손 요소 들어봤으면 비슷하다.

function ChildComponent(/* TODO */) {
  return (
    <>
      {/* TODO */}
    </>
  );
}

// 컴포넌트에서 다른 React 컴포넌트를 불러와 렌더링하면 불러온 컴포넌트가 자식 컴포넌트
// 같은 자식 컴포넌트를 여러개 렌더링하는 경우 key값을 지정해야 한다.
function ParentComponent() {
  return (
    <div>
      <span>부모 컴포넌트</span>
      {/* TODO */}
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
