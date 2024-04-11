import { useEffect, useState } from "react";
import s from "./page.module.css";
const HOST = `http://localhost:3000`

// 나중에는 API 별로 정리를 하는 것을 추천합니다.
function getAllFruits() {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  // const urlString = 'http://localhost:3000/fruits';
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Network response was not ok.');
    })
}

function deleteOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "bearer token"
    },
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response was not ok.');
  })
}

/**
 * useEffect는 React가 외부 시스템(서버, Browser API, ...)와 소통하기 위해서 사용한다.
 * React는 React Component를 pure하게 유지하기를 권장한다. 하지만 프론트엔드 애플리케이션은 외부 시스템과의 소통이 잦다.
 * 불가피하게 사이드 이펙트가 생길 수 밖에 없는데, 이런 사이드 이펙트는 useEffect에서 관리한다.
 * 
 * useEffect의 callback 함수는 렌더링을 모두 마치고 난 다음(mount)에 실행되기 때문에 렌더링과 충돌하지 않는다. 
 * 
 * 
 */

export default function Page() {
  const [fruits, setFruits] = useState([]);
  
  /**
   * 컴포넌트 첫 마운트 시점에 보통 페이지에 정보를 보여주기 위해 데이터를 가져온다. (GET)
   */
  useEffect(() => {
    getAllFruits().then(res => setFruits(res.map(f => ({...f, quantity: 0}))))
  }, [])
  
  /**
   * POST, PUT, DELETE 요청의 경우 이미 컴포넌트가 렌더링을 마친 상황에서 주로 발생한다.
   * 위 요청 이후에는 서버 데이터가 변경되기 때문에 (멱등성, idempotence X) 서버에서 데이터를 새로 받아오고
   * 컴포넌트의 상태도 업데이트 하는 것이 일반적이다.
   * 
   */
  const handleDelete = (id) => {
    deleteOneFruit(id)
    .then(() => {
      getAllFruits()
      .then(res => setFruits(res.map((f, i) => ({...f, quantity: fruits[i].quantity}))))
    })
  }; 

  return (
    <div className={s.appContainer}>
      <div></div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (
          <li className={s.itemListItem} key={f.name + i}>
            <span>{f.name}</span>
            <span>{f.color}</span>
            <span>{f.price}</span>
            <button type="button" onClick={() => handleDelete(i)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
