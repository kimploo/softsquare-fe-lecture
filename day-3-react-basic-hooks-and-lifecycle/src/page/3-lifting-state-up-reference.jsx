import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

function FruitItem({ i, fruit, isHide, setHide }) {
  console.log(fruit)
  const { name, color, price } = fruit;
  return (
    <li className={s.itemListItem} key={name + i}>
      <span>{name}</span>
      <span>{color}</span>
      {isHide ? null : <span>{price}</span>}
      <button type="button" onClick={() => setHide(!isHide)}>
        🥷
      </button>
    </li>
  );
}

export default function Page() {
  const [fruits] = useState(fruitsData);
  const [isHide, setHide] = useState(false);

  return (
    <div className={s.appContainer}>
      <div></div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (
          <FruitItem
            key={f.name + i}
            i={i}
            fruit={f}
            isHide={isHide}
            setHide={setHide}
          />
        ))}
      </ul>
    </div>
  );
}

// App 에서 하위 컴포넌트에 상태 갱신 함수를 props 해준다 이렇게 이해하면 되나요?

// 여러 하위 컴포넌트에서 사용한 상태가 있을 때
// 이 상태를 하위 컴포넌트에 위치시키지 않고, 공통 부모 컴포넌트에 상태를 정의를 먼저 한다.
// 이 상태를 하위 컴포넌트에서 갱신하기 위해서는
// 부모 컴포넌트에 있는 상태 갱신 함수를 아래로 props로 전달을 해준다.
