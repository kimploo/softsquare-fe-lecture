import { useEffect, useState } from "react";
import s from "./page.module.css";

function RunsEveryRender() {
  const [count, setCount] = useState(0);

  // TODO: 컴포넌트가 리렌더링될 때 마다 아래 코드를 실행하도록 변경하세요.
  console.log("새로운 render마다 실행");

  return (
    <>
      <span>새로운 render 마다 useEffect</span>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

function OnlyOnMount() {
  const [count, setCount] = useState(0);

  // TODO: 최초 마운트 1회에만 실행하도로 코드를 변경하세요
  console.log("최초 마운트 1회에만 실행");

  return (
    <>
      <span>최초 마운트 1회에만 useEffect</span>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

function OnMountAndDependencyChanges() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // TODO: count2가 변경될 때 마다 아래 코드를 실행하도록 변경하세요
  console.log("count2 변경 마다 실행");

  return (
    <>
      <span>count2에만 useEffect</span>
      {count1}
      <button onClick={() => setCount1(count1 + 1)}>+</button>

      {count2}
      <button onClick={() => setCount2(count2 + 1)}>+</button>
    </>
  );
}

export default function Page() {
  return (
    <div className={s.appContainer}>
      <RunsEveryRender></RunsEveryRender>
      <OnlyOnMount></OnlyOnMount>
      <OnMountAndDependencyChanges></OnMountAndDependencyChanges>
    </div>
  );
}
