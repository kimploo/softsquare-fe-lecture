import { HOST } from './api'

export default function updateOneFruit({ id, newFruit }) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(newFruit),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}
