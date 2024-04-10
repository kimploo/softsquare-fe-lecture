import { useState } from "react";
import s from "./ItemInput.module.css";

export default function ItemInput({
  fruit,
  isCreateMode,
  handleEdit,
  handleEditQuantity,
  handleDelete,
  setCreateMode,
}) {
  const { id, name, price, quantity } = fruit;
  const [isEditMode, setIsEditMode] = useState(false);
  const [_name, setName] = useState(name);
  const [_price, setPrice] = useState(price);
  const [_quantity, setQuantity] = useState(quantity);

  const handleEditButton = () => {
    handleEdit({
      id,
      name: _name,
      price: Number(_price),
      quantity: Number(_quantity),
    });
    setIsEditMode(false);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value)
    setQuantity(e.target.value);
    handleEditQuantity({
      ...fruit,
      quantity: newQuantity,
    });
  };

  return (
    <>
      <div className={s.inputWrapper}>
        {isCreateMode || isEditMode ? (
          <>
            <input
              className={s.inputWrapperInput}
              id={`nameInput_${id}`}
              name={`nameInput_${id}`}
              type="name"
              value={_name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className={s.inputWrapperInput}
              id={`priceInput_${id}`}
              name={`priceInput_${id}`}
              type="number"
              value={_price}
              onChange={(e) => setPrice(e.target.value)}
              min={0}
              step={1000}
            />
          </>
        ) : (
          <>
            <span className={s.inputWrapperItem}>{_name}</span>
            <span className={s.inputWrapperItem}>{_price}</span>
          </>
        )}
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
          {isEditMode ? (
            <>
              <button type="button" onClick={() => handleEditButton()}>
                📝
              </button>
              <button type="button" onClick={() => setIsEditMode(false)}>
                🚫
              </button>
            </>
          ) : isCreateMode ? (
            <button type="button" onClick={() => setCreateMode(false)}>
              🚫
            </button>
          ) : (
            <>
              <button type="button" onClick={() => setIsEditMode(true)}>
                📝
              </button>
              <button type="button" onClick={() => handleDelete(id)}>
                🗑️
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
