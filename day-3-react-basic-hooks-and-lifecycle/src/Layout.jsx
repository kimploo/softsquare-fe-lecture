import { useState } from "react";
import Page1 from "./page/1-class-vs-function-reference";
import Page3 from "./page/3-lifting-state-up-reference";
import Page4 from "./page/4-useEffect-reference";
import Page5 from "./page/5-useEffect-fetch-reference";
import s from "./Layout.module.css";

export default function Layout() {
  const pages = [Page1, Page3, Page4, Page5];
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
