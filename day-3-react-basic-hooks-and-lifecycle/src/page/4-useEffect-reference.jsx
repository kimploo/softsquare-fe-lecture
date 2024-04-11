import { useEffect, useState } from "react";
import s from "./page.module.css";

/**
 * useEffect 외부 시스템과 동기화할 떄 사용한다.
 * https://react.dev/reference/react/useEffect
 * useEffect(setup, dependencies?)
 * @param setup 콜백 함수 dependency 조건에 맞게 실행된다.
 * @param dependencies? (optional) 의존성 배열, 이 안에 있는 변수가 변경될 떄 callback함수가 실행된다.
 * 
 */

// 리렌더링 할 때 마다
function RunsEveryRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("새로운 render마다 실행");
  });

  return (
    <>
      <span>새로운 render 마다 useEffect</span>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

// componentDidMount랑 거의 같다.
function OnlyOnMount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("최초 마운트 1회에만 실행");
  }, []);

  return (
    <>
      <span>최초 마운트 1회에만 useEffect</span>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

// 의존성 배열에 뭐가 있을 때 -> 그 변수가 변경될 때 마다 실행된다.
// state, props
function OnMountAndDependencyChanges() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("count2 변경 마다 실행");
  }, [count2]);

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
