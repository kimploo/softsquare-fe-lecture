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
          <button type="submit">✅ TODO 등록</button>
        ) : (
          <button type="button" onClick={handleCreateButton}>
            ❇️ TODO 추가
          </button>
        )}
        {/* <span>{"🧺 총액 : " + sum}</span> */}
      </div>
    </>
  );
}
