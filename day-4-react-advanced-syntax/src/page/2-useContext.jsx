import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const initialState = 0;
const StateContext = createContext(initialState);

// Java의 Enum처럼 사용 
export const ActionTypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

export const reducer = (state, action) => {
  console.log('reducer state', state)
  console.log('reducer action', action)

  switch (action.type) {
    case ActionTypes.ADD:
      return ++state;
    case ActionTypes.SUBTRACT:
      return --state;
    default:
      return state;
  }
};

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Counter></Counter>
    </StateContext.Provider>
  );
}

function ChildCounter() {
  const { state, dispatch } = useContext(StateContext);
  return <div>
          <h2>useReducer</h2>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: ActionTypes.ADD })}>+</button>
      <button onClick={() => dispatch({ type: ActionTypes.SUBTRACT })}>
        -
      </button>
  </div>
}

function Counter() {

  return (
    <div>
      <ChildCounter></ChildCounter>
    </div>
  );
}

