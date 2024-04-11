import { createContext, useContext } from "react";
import getAllFruits from "./api/getAllFruits.mjs";

export const initialFruit = {
  data: [],
  loading: false,
  error: null
};

export const FruitContext = createContext(initialFruit);

export default function useFruit() {
  const { dispatch } = useContext(FruitContext);

  const fetchData = async () => {
      dispatch({ type: 'GET_FRUIT_INIT' });
      try {
          const response = await getAllFruits();
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          dispatch({ type: 'GET_FRUIT_SUCCESS', payload: data });
      } catch (error) {
          dispatch({ type: 'GET_FRUIT_FAILURE', payload: error.message });
      }
  };

  return fetchData;
}
