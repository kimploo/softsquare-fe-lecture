import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

export default function Page() {
  const [fruits, setFruits] = useState(fruitsData);
  const handleDelete = (idx) => {
    // TODO: 과일 삭제 기능 구현
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
            <button type="button" onClick={/* TODO */ null}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
