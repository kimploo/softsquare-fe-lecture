import { HOST } from './api'

export default function getOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url)
  .then(res => {
    if (res.ok) return res.json()
  })
}
