import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import { useState } from "react";
import { data } from './data'

export default function App() {
  const newId = Math.trunc(Math.random() * 9995) + 5
  const [isCreateMode, setCreateMode] = useState(false);
  const [fruits, setFruits] = useState(data.fruits);
  const sum = fruits.reduce((a, b) => a + (b.price * b.quantity), 0)
  
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
    setFruits([...fruits, newFruit]);
    setCreateMode(false);
  }

  const handleCreate = (newFruit) => {
    setFruits([...fruits, newFruit]);
  }

  const handleEdit = (newFruit) => {
    const { id  } = newFruit
    const idx = fruits.findIndex((f) => f.id === id);
    if (idx !== -1) { 
      setFruits([...fruits.slice(0, idx), newFruit, ...fruits.slice(idx + 1)])
    }
  };
  
  const handleEditQuantity = (newFruit) => {
    const idx = fruits.findIndex((f) => f.id === newFruit.id);
    if (idx !== -1) {
      const copy = fruits.slice();
      copy.splice(idx, 1, newFruit);
      setFruits(copy);
    }
  };

  const handleDelete = (id) => {
    const idx = fruits.findIndex((f) => f.id === id);
    setFruits(fruits.filter((f, i) => i !== idx))
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
                handleEditQuantity={handleEditQuantity}
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
              handleEditQuantity={handleEditQuantity}
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
