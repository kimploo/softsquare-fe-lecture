import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "../../api.mjs";

export default function deleteOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const deleteFruitAPI = createAsyncThunk('fruit/delete', deleteOneFruit)