
import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

export default function Page() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);

  const [fruits, setFruit] = useState(fruitsData);
  const addFruit = () => {
    // TODO: 과일 추가 기능을 구현하세요.
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
        <button onClick={/* TODO */ null}>추가</button>
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
