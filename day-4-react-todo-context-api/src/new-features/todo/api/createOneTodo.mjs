import { HOST } from '../../api.mjs'

export default function createOneTodo({ todo }) {
  const url = new URL(HOST)
  url.pathname = '/todo';
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Authorization": "Bearer " + import.meta.env.VITE_DEV_SECRET_KEY
    }, 
    body: JSON.stringify(todo)
  })
}
