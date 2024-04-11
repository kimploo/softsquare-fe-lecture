import { useReducer } from "react";
import { TodoContext, initialTodo } from "./context";

function reducer(state, action) {
  switch (action.type) {
    case "GET_TODO_INIT":
      return { ...state, loading: true, error: null };
    case "GET_TODO_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_TODO_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_TODO_INIT":
      return { ...state, loading: true, error: null };
    case "CREATE_TODO_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "CREATE_TODO_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_TODO_INIT":
      return { ...state, loading: true, error: null };
    case "UPDATE_TODO_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "UPDATE_TODO_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_TODO_INIT":
      return { ...state, loading: true, error: null };
    case "DELETE_TODO_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "DELETE_TODO_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTodo);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
