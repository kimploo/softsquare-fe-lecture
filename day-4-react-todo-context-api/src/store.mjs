import { configureStore } from '@reduxjs/toolkit';
import fruitReducer from './features/fruit/fruit.reducer';
import todoReducer from './features/todo/todo.reducer';

export const store = configureStore({
  reducer: {
    fruit: fruitReducer,
    todo: todoReducer
  },
});
