import { HOST } from './api'

export default function getAllFruits() {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url)
  .then(res => {
    if (res.ok) return res.json()
  })
}
