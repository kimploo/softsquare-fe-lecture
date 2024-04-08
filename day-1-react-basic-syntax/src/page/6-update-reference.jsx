
import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

export default function Page() {
  const [fruits, setFruits] = useState(fruitsData.map(f => {
    f.quantity = 0;
    return f
  }));
  const handleQuantityChange = (e, i) => {
    const newFruit = {
      ...fruits[i],
      quantity: e.target.value
    }
    // const copy = fruits.slice();
    // copy.splice(i, 1, newFruit);
    // setFruits(copy);

    setFruits([...fruits.slice(0, i), newFruit, ...fruits.slice(i + 1)])
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
            defaultValue={f.quantity}
            // 익명 함수를 잘 활용하여 필요한 전달인자를 잘 전달해보자.
            onChange={(e) => handleQuantityChange(e, i)}
            min={0}
            step={1}
        />
        </li>))}
      </ul>
    </div>
  );
}
