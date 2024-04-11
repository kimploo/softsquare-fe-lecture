import s from "./SumFooter.module.css";

export default function SumFooter({ sum, isCreateMode, setCreateMode }) {
  const handleCreateButton = (e) => {
    e.preventDefault();
    setCreateMode(true);
  };

  return (
    <>
      <div className={s.wrapper}>
        {isCreateMode ? (
          <button type="submit">🍎 과일 정보 작성 완료 후 클릭</button>
        ) : (
          <button type="button" onClick={handleCreateButton}>
            🍏 과일 추가
          </button>
        )}
        <span>{"🧺 총액 : " + sum}</span>
      </div>
    </>
  );
}
