import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function getAllFruits() {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url)
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const getAllFruitsAPI = createAsyncThunk('fruit/getAll', getAllFruits)