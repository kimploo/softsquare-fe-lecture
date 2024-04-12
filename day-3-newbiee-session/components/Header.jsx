import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.itemWrapper}>
      <span className={s.itemHeaderItem}>상품</span>
      <span className={s.itemHeaderItem}>가격</span>
      <span className={s.itemHeaderItem}>수량</span>
      <div className={s.buttonWrapper}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
