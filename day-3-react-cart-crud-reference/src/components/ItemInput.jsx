import { useState } from "react";
import s from "./ItemInput.module.css";

export default function ItemInput(props) {
  const {
    fruit,
    // isCreateMode,
    // handleEdit,
    handleEditQuantity,
    handleDelete,
    // setCreateMode,
  } = props;
  const { id, name, price, quantity } = fruit;

  const [_name, setName] = useState(name);
  const [_price, setPrice] = useState(price);
  const [_quantity, setQuantity] = useState(quantity);

  // const handleEditQuantity = (newFruit) => {
    // {
    // id,
    // name,
    // price,
    // quantity
    //   quantity: newQuantity,
    // }
    // fruits = [{}, {}, {}, {}, {}]
    
  //   수량 변경할 객체가 몇번째에 있는지 찾고
  //   const idx = fruits.findIndex((f) => f.id === newFruit.id);
  
  //   
  //   if (idx !== -1) {
        // fruits 복사
  //     const copy = fruits.slice();
        // copy에 newFruit을 끼워넣는다.
  //     copy.splice(idx, 1, newFruit);
  
        // fruits 갱신 함수 호출
  //     setFruits(copy);
  //   }
  // };

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(e.target.value);
    handleEditQuantity({
      ...fruit,
      quantity: newQuantity,
    });
  };

  return (
    <>
      <div className={s.inputWrapper}>
        <span className={s.inputWrapperItem}>{_name}</span>
        <span className={s.inputWrapperItem}>{_price}</span>
        <input
          className={s.inputWrapperInput}
          id={`quantityInput_${id}`}
          name={`quantityInput_${id}`}
          type="number"
          value={_quantity}
          onChange={handleQuantityChange}
          min={0}
          step={1}
        />
        <div className={s.buttonWrapper}>
          {
            <>
              <button type="button" onClick={() => handleDelete(id)}>
                🗑️
              </button>
            </>
          }
        </div>
      </div>
    </>
  );
}
