import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TodoContext,  useCreateTodo,  useDeleteTodo,  useGetTodo, useUpdateTodo } from "./new-features/todo/context";
// import { createTodoAPI } from "./features/todo/api/createOneTodo.mjs";

export default function App() {
  const newId = String(Math.trunc(Math.random() * 9995) + 5)
  const [isCreateMode, setCreateMode] = useState(false);
  const { state } = useContext(TodoContext)
  const fetchTodo = useGetTodo()
  const createTodo = useCreateTodo();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();
  
  useEffect(() => {
    fetchTodo()
  }, [])
  
  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;
  if (!state.data) return <p>No data loaded!</p>;
  
  const handleNewTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const _msg = formData.get(`todoInput_${newId}`)
    const newTodo = {
      // id: newId,
      status: "IN_PROGRESS",
      msg: _msg,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      finishedAt: null,
      userId: 1,
    }
    createTodo({ todo: newTodo })
    setCreateMode(false);
  }

  const handleEdit = (newTodo) => {
    const { id } = newTodo
    updateTodo({ id, todo: newTodo })
  };
  
  const handleDelete = (id) => {
    deleteTodo(id)
  };

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewTodo} className={s.form}>
          <div className={s.fieldset}>
            <h2>Getting Things Done</h2>
            <ItemHeader></ItemHeader>
            {state.data.map((t) => (
              <ItemInput
                key={t.id}
                todo={t}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isCreateMode={false}
              ></ItemInput>
            ))}
            {isCreateMode ? <ItemInput key='newFruitId' 
              todo={{
                id: newId,
                msg: '',
                status: "IN_PROGRESS",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                finishedAt: null,
              }} 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setCreateMode={setCreateMode}
              isCreateMode={isCreateMode}
            ></ItemInput> : null}
            <SumFooter isCreateMode={isCreateMode} setCreateMode={setCreateMode}></SumFooter>
          </div>
        </form>
      </div>
    </>
  );
}
