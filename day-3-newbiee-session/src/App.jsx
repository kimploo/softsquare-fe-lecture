import { useState } from "react";
import Header from "../components/Header";
import ItemInput from "../components/ItemInput";
import s from "./App.module.css";
// import 써지게 하는거 윈도우는 컨트롤 + 무엇인가요?

// export default function data() {}
// import data from "./data"

// export function data() {}
import { data } from "./data";
console.log("data.js가 import 되었는지 확인", data);

export default function App() {
  // "과일 목록은 장바구니 애플리케이션에서 변화가 있는 데이터인가?"
  // 1. 일반 상태
  // 2. input 상태 (입력하면 변하는 미시적인 상태)
  // 3. list 상태 (외부 시스템에서 받아온 데이터를 관리하기 위한 상태)

  // 변수 이름은 최대한 현실 객체와 같게
  const [fruits, setFruits] = useState(data.fruits);
  
  const handleDelete = function (id) {
    const filtered = fruits.filter(function(fruit) {
      return fruit.id !== id
    })
    setFruits(filtered)
  }

  return (
    <main className={s.mainContainer}>
      <div className={s.pageContainer}>
        <div className={s.appContainer}>
          <div>
            <h1>장바구니 애플리케이션</h1>
          </div>
          <div>
            <Header></Header>
          </div>
          <div>
            {fruits.map(function (fruit) {
              return (
                <ItemInput
                  key={fruit.id}
                  id={fruit.id}
                  name={fruit.name}
                  price={fruit.price}
                  quantity={fruit.quantity}
                  handleDelete={handleDelete}
                ></ItemInput>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
