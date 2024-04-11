import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function getOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url)
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const getOneFruitAPI = createAsyncThunk('fruit/getOne', getOneFruit)