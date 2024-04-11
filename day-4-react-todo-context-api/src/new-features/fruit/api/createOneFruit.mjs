import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function createOneTodo(fruit) {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(fruit)
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const createFruitAPI = createAsyncThunk('fruit/create', createOneTodo)