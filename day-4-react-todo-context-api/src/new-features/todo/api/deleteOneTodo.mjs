import { HOST } from "../../api.mjs";

export default function deleteOneTodo(id) {
  const url = new URL(HOST)
  url.pathname = `/todo/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Authorization": "Bearer " + import.meta.env.VITE_DEV_SECRET_KEY,
    },
  })
}
