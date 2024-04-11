import { useCallback, useState } from "react";
import s from "./ItemInput.module.css";
import timeAgo from "../util/timeAgo";
import debounce from 'lodash/debounce'

export default function ItemInput({
  todo,
  isCreateMode,
  handleEdit,
  handleDelete,
  setCreateMode,
}) {
  const { id, msg, status, createdAt, updatedAt, finishedAt } = todo;
  const [_status, setTodoStatus] = useState(status === "DONE");
  const [_msg, setTodoText] = useState(msg);
  
  const cacheHandleEdit = useCallback((msg) => {
    handleEdit({
      id,
      msg,
      status: _status ? "DONE" : "IN_PROGRESS",
      createdAt,
      updatedAt: new Date().toISOString(),
      finishedAt,
    });
  }, []);

  const debouncedSendRequest = useCallback(debounce((msg) => cacheHandleEdit(msg), 500), [])

  const handleCheckbox = () => {
    const newStatus = !_status;
    setTodoStatus(newStatus);
    handleEdit({
      id,
      msg: _msg,
      status: newStatus ? "DONE" : "IN_PROGRESS",
      createdAt,
      updatedAt: new Date().toISOString(),
      finishedAt: newStatus ? new Date().toISOString() : null,
    });
  };

  const handleText = (e) => {
    setTodoText(e.target.value);
    !isCreateMode && debouncedSendRequest(e.target.value);
  };

  return (
    <>
      <div className={s.inputWrapper}>
        <input
          className={s.inputWrapperCheckbox}
          data-testid={isCreateMode && "createTodoRadio"}
          id={`todoRadio_${id}`}
          name={`todoRadio_${id}`}
          type="checkbox"
          checked={_status}
          onChange={handleCheckbox}
        />
        {_status ? (
          <input
            className={s.inputWrapperDone}
            id={`todoInput_${id}`}
            name={`todoInput_${id}`}
            type="text"
            value={_msg}
            readOnly
            onChange={(e) => setTodoText(e.target.value)}
          />
        ) : (
          <input
            className={s.inputWrapperTodo}
            id={`todoInput_${id}`}
            name={`todoInput_${id}`}
            type="text"
            value={_msg}
            onChange={handleText}
          />
        )}
        <span className={s.inputWrapperItem}>{timeAgo(new Date(updatedAt))}</span>
        <div className={s.buttonWrapper}>
          {isCreateMode ? (
            <button type="button" onClick={() => setCreateMode(false)}>
              🚫
            </button>
          ) : (
            <>
              <button type="button" onClick={() => handleDelete(String(id))}>
                🗑️
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
