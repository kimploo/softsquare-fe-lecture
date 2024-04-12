import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import { useEffect, useState } from "react";
import getAllFruits from "./api/getAllFruits";
import createOneFruit from "./api/createOneFruit";
import updateOneFruit from "./api/updateOneFruit";
import deleteOneFruit from "./api/deleteOneFruit";

export default function App() {
  const newId = String(Math.trunc(Math.random() * 9995) + 5)
  const [fruits, setFruits] = useState([]);
  const [isCreateMode, setCreateMode] = useState(false);
  const sum = fruits.reduce((a, b) => a + (b.price * b.quantity), 0)
  
  // 차이점 1
  useEffect(() => {
    getAllFruits()
    .then(fruits => setFruits(fruits))
  }, [])
  
  const handleNewFruit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const _name = formData.get(`nameInput_${newId}`)
    const _price = formData.get(`priceInput_${newId}`)
    const _quantity = formData.get(`quantityInput_${newId}`)
    const newFruit = {
      id: newId,
      name: _name,
      price: Number(_price),
      quantity: Number(_quantity)
    }
    // 서버에 CREATE 요청을 보내고
    createOneFruit(newFruit)
    .then(() => {
      // 요청이 성공했으면, 과일 목록 전체 받아온다.
      getAllFruits()
      // 이것도 잘 받아워지면 과일 목록 전체 상태를 변한다
      .then(fruits => setFruits(fruits))
    })
    setCreateMode(false);
  }

  const handleCreate = (newFruit) => {
    // 이전에 fruits를 전부 새로운 배열에 넣고, 새로운 과일을 전달한다.
    createOneFruit(newFruit)
    .then(() => {
      getAllFruits
      .then(fruits => setFruits(fruits))
    })
  }

  const handleEdit = (newFruit) => {
    const { id  } = newFruit
    const idx = fruits.findIndex((f) => f.id === id);
    if (idx !== -1) { 
      updateOneFruit({ id, newFruit })
      .then(() => 
        getAllFruits()
        .then(fruits => setFruits(fruits))
      )
    }
  };
  
  const handleDelete = (id) => {
    deleteOneFruit(id)
    .then(() => 
    getAllFruits()
    .then(fruits => setFruits(fruits)))
  };

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewFruit} className={s.form}>
          <div className={s.fieldset}>
            <h2>장바구니 애플리케이션</h2>
            <ItemHeader></ItemHeader>
            {fruits.map((f) => (
              <ItemInput
                key={f.id}
                fruit={f}
                handleCreate={handleCreate}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isCreateMode={false}
              ></ItemInput>
            ))}
            {isCreateMode ? <ItemInput key='newFruitId' 
              fruit={{
                id: newId,
                name: '',
                price: 0,
                quantity: 0
              }} 
              handleCreate={handleCreate}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setCreateMode={setCreateMode}
              isCreateMode={isCreateMode}
            ></ItemInput> : null}
            <SumFooter sum={sum} isCreateMode={isCreateMode} setCreateMode={setCreateMode}></SumFooter>
          </div>
        </form>
      </div>
    </>
  );
}
