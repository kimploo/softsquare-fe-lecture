
import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

export default function Page() {
  const [fruits, setFruits] = useState(fruitsData.map(f => {
    f.quantity = 0;
    return f
  }));
  const handleQuantityChange = () => {
    // TODO: 과일 수량 변경 기능 구현
  }

  return (
    <div className={s.appContainer}>
      <div>
      </div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (<li className={s.itemListItem} key={f.name + i}>
          <span>{f.name}</span>
          <span>{f.color}</span>
          <span>{f.price}</span>
          <input
            className={s.inputWrapperInput}
            id={`quantityInput_${i}`}
            name={`quantityInput_${i}`}
            type="number"
            // defaultValue={f.quantity}
            onChange={/* TODO */ null}
            min={0}
            step={1}
        />
        </li>))}
      </ul>
    </div>
  );
}
