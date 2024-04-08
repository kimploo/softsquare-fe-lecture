
import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

export default function Page() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);

  const [fruits, setFruit] = useState(fruitsData);
  const addFruit = () => {
    const newFruit = {
      name, 
      color,
      price
    }
    
    // React 참조값 상태에 뭔가를 추가할 일이 있을 때는 "새로운 참조값"을 상태 갱신 함수에 넣어야 한다.
    // JavaScript가 fruits가 변경되었다고 인식하기 위해서는 새로운 배열을 생성해서 변경해줘야 한다.
    // {} === {} // false
    // [] === [] // false
    setFruit([...fruits, newFruit])
  }

  return (
    <div className={s.appContainer}>
      <div>
        <div className={s.inputWrapper}>
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={s.inputWrapper}>
          <label>색상</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className={s.inputWrapper}>
          <label>가격</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
            max={15000}
            step={1000}
          />
        </div>
        <button onClick={addFruit}>추가</button>
      </div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (<li className={s.itemListItem} key={f.name + i}>
          <span>{f.name}</span>
          <span>{f.color}</span>
          <span>{f.price}</span>
        </li>))}
      </ul>
    </div>
  );
}
