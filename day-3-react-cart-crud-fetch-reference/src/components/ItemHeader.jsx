import s from "./ItemHeader.module.css";

export default function ItemHeader() {
  return (
    <>
      <div className={s.itemWrapper}>
        <span className={s.itemHeaderItem}>상품</span>
        <span className={s.itemHeaderItem}>가격</span>
        <span className={s.itemHeaderItem}>수량</span>
        <div className={s.buttonWrapper}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
