import { useState } from "react";
import { useReducer } from "react";

function countReducer(state, action) {
  console.log('countReducer state', state)
  console.log('countReducer action', action)
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Page() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const reducerCount = state.count;

  return (
    <div>
      <div>
        <h2>useState</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>useReducer</h2>
        <p>Count: {reducerCount}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
}
  /**
   * useReducer는 
   * 하나의 상태를 다양한 방식으로 변경을 해야 할 때
   * 상태 변경이 잦을때 
   * 단순한 상태 갱신 함수로는 사용이 번거로울 때 
   * 
   * state: 상태
   * dispatch: reducer가 어떤 조건으로 작동하도록 정의하는 것
   * 
   */