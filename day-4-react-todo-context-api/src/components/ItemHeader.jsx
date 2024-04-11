import s from "./ItemHeader.module.css";

export default function ItemHeader() {
  return (
    <>
      <div className={s.itemWrapper}>
        <span className={s.itemHeaderStatus}>상태</span>
        <span className={s.itemHeaderItem}>TODO</span>
        <div className={s.buttonWrapper}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
