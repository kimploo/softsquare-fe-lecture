import { useState } from "react";
import Page1 from "./page/1-useReducer";
import Page2 from "./page/2-useContext";
import Page3 from "./page/3-useCallback";
import s from "./Layout.module.css";

export default function Layout() {
  const pages = [Page1, Page2, Page3];
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
