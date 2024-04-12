import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import { useState } from "react";
import { data } from './data'
import { useMemo } from "react";

export default function App() {
  const newId = Math.trunc(Math.random() * 9995) + 5
  const [isCreateMode, setCreateMode] = useState(false);
  const [fruits, setFruits] = useState(data.fruits);
  // 과일의 가격과 수량을 계산해서 합을 구하는 것
  const sum = useMemo(() => { 
    return fruits.reduce((a, b) => a + (b.price * b.quantity), 0)
  }, [fruits])
  
  const handleNewFruit = (e) => {
    // 브라우저 기본 동작이 있습니다.
    // 새로운 과일을 등록했습니다. -> (조선컴) -> 무조건 새로운 페이지를 불어와야 합니다.
    e.preventDefault(); // 브라우저가 기본적으로 새로고침하는 기본동작을 prevent 한다 preventDefault
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
    // 메모리에 있는 상태 변수를 직접 변경
    setFruits([...fruits, newFruit]);
    setCreateMode(false);
  }

  const handleCreate = (newFruit) => {
    // 이전에 fruits를 전부 새로운 배열에 넣고, 새로운 과일을 전달한다.
    setFruits([...fruits, newFruit]);
  }

  const handleEdit = (newFruit) => {
    const { id  } = newFruit
    const idx = fruits.findIndex((f) => f.id === id);
    if (idx !== -1) { 
    
      // 이전에 fruits를 전부 새로운 배열에 넣고, 변경할 과일을 전달한다.
      setFruits([...fruits.slice(0, idx), newFruit, ...fruits.slice(idx + 1)])
    }
  };
  
  const handleEditQuantity = (newFruit) => {
    const idx = fruits.findIndex((f) => f.id === newFruit.id);
    if (idx !== -1) {
      // fruits 복사
      const copy = fruits.slice();
      
      // copy에 newFruit을 끼워넣는다.
      copy.splice(idx, 1, newFruit);
      
      // fruits 갱신 함수 호출
      setFruits(copy);
    }
  };

  const handleDelete = (id) => {
    const idx = fruits.findIndex((f) => f.id === id);
    // 내가 지정한 idx와 일치하지 않는 과일만 남기고 필터링 해라
    // 내가 지정한 idx를 삭제한다
    setFruits(fruits.filter((f, i) => i !== idx))
  };

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewFruit} className={s.form}>
          <div className={s.fieldset}>
            <h2>장바구니 애플리케이션</h2>
            {/* <button onClick={() => setIsOn(!isOn)}>{isOn.toString()}</button> */}
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
