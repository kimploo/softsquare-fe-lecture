import { HOST } from './api'

export default function deleteOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: 'DELETE'
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}
