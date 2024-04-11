import s from "./SumFooter.module.css";

/**
 * `SumFooter` 컴포넌트는 과일 추가 기능과 총액을 표시하는 UI를 제공합니다.
 * 사용자가 과일 추가 모드인 경우, 과일 정보를 입력하고 제출할 수 있는 버튼을 제공합니다.
 * 과일 추가 모드가 아닐 경우, 과일을 추가할 수 있는 버튼을 표시합니다.
 * 과일의 총액도 함께 표시됩니다.
 *
 * @param {Object} props 컴포넌트에 전달되는 props
 * @param {number} props.sum 현재까지의 과일 총액
 * @param {boolean} props.isCreateMode 과일 추가 모드 여부
 * @param {Function} props.setCreateMode 과일 추가 모드를 설정하는 함수
 */
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
