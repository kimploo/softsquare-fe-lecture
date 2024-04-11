import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "../../api.mjs";

export default function updateOneFruit({ id, fruit }) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(fruit)
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const updateOneFruitAPI = createAsyncThunk('fruit/update', updateOneFruit)
