import { createContext, useContext } from "react";
import getAllTodos from "./api/getAllTodos.mjs";
import updateOneTodo from "./api/updateOneTodo.mjs";
import deleteOneTodo from "./api/deleteOneTodo.mjs";
import createOneTodo from "./api/createOneTodo.mjs";

export const initialTodo = {
  data: [],
  loading: false,
  error: null,
};

export const TodoContext = createContext(initialTodo);

export function useGetTodo() {
  const { dispatch } = useContext(TodoContext);

  const fetchData = async () => {
    dispatch({ type: "GET_TODO_INIT" });
    try {
      const response = await getAllTodos();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: "GET_TODO_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_TODO_FAILURE", payload: error.message });
    }
  };

  return fetchData;
}

export function useCreateTodo() {
  const { dispatch } = useContext(TodoContext);

  const create = async ({ todo }) => {
    dispatch({ type: "CREATE_TODO_INIT" });
    try {
      const createRes = await createOneTodo({ todo });
      if (!createRes.ok) {
        throw new Error(`HTTP error! status: ${createRes.status}`);
      }
      const getRes = await getAllTodos();
      if (!getRes.ok) {
        throw new Error(`HTTP error! status: ${getRes.status}`);
      }
      const data = await getRes.json();
      dispatch({ type: "CREATE_TODO_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "CREATE_TODO_FAILURE", payload: error.message });
    }
  };

  return create;
}

export function useUpdateTodo() {
  const { dispatch } = useContext(TodoContext);

  const update = async ({ id, todo }) => {
    dispatch({ type: "UPDATE_TODO_INIT" });
    try {
      const updateRes = await updateOneTodo({ id, todo });
      if (!updateRes.ok) {
        throw new Error(`HTTP error! status: ${updateRes.status}`);
      }
      const getRes = await getAllTodos();
      if (!getRes.ok) {
        throw new Error(`HTTP error! status: ${getRes.status}`);
      }
      const data = await getRes.json();
      dispatch({ type: "GET_TODO_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_TODO_FAILURE", payload: error.message });
    }
  };

  return update;
}

export function useDeleteTodo() {
  const { dispatch } = useContext(TodoContext);

  const deleteTodo = async (id) => {
    dispatch({ type: "UPDATE_TODO_INIT" });
    try {
      const deleteRes = await deleteOneTodo(id);
      if (!deleteRes.ok) {
        throw new Error(`HTTP error! status: ${deleteRes.status}`);
      }
      const getRes = await getAllTodos();
      if (!getRes.ok) {
        throw new Error(`HTTP error! status: ${getRes.status}`);
      }
      const data = await getRes.json();
      dispatch({ type: "GET_TODO_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_TODO_FAILURE", payload: error.message });
    }
  };

  return deleteTodo;
}
