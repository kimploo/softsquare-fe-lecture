import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function getAllTodos() {
  const url = new URL(HOST)
  url.pathname = '/todo';
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + import.meta.env.VITE_DEV_SECRET_KEY,
    }
  }, )
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const getAllTodosAPI = createAsyncThunk('todo/getAll', getAllTodos)