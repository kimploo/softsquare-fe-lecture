import { useReducer } from "react";
import { FruitContext, initialFruit } from "./context";

function reducer(state, action) {
  switch (action.type) {
    case "GET_FRUIT_INIT":
      return { ...state, loading: true, error: null };
    case "GET_FRUIT_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_FRUIT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_FRUIT_INIT":
      return { ...state, loading: true, error: null };
    case "UPDATE_FRUIT_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "UPDATE_FRUIT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function FruitProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialFruit);

  return (
    <FruitContext.Provider value={{ state, dispatch }}>
      {children}
    </FruitContext.Provider>
  );
}