import { HOST } from './api'

export default function createOneFruit(newFruit) {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(newFruit),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}
