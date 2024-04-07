import { useState } from "react";
import Page0 from "./page/0-class-reference";
import Page1 from "./page/1-JSX-기초-reference";
import Page2 from "./page/2-JSX-map-reference";
import Page3 from "./page/3-useState-reference";
import Page4 from "./page/4-props-reference";
import Page5 from "./page/5-create-reference";
import Page6 from "./page/6-update-reference";
import Page7 from "./page/7-delete-reference";
import s from "./Layout.module.css";

export default function Layout() {
  const pages =[Page0, Page1, Page2, Page3, Page4, Page5, Page6, Page7];
  const [idx, setIdx] = useState(0);
  const handlePrev = () => {
    if (idx < 1) return;
    setIdx(idx - 1);
  };
  const handleNext = () => {
    if (pages.length <= idx + 1) return;
    setIdx(idx + 1);
  };

  return (
    <main className={s.mainContainer}>
      <div className={s.pageButtonContainer}>
        <button className={s.pageButton} onClick={handlePrev}>
          ←
        </button>
        <button className={s.pageButton} onClick={handleNext}>
          →
        </button>
      </div>

      <div className={s.pageContainer}>{pages.map((E, i) => <E key={i}/>)[idx]}</div>
    </main>
  );
}
