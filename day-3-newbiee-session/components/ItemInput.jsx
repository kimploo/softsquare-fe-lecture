import s from "./ItemInput.module.css";

export default function ItemInput(props) {
  console.log(props)
  const id = props.id
  const name = props.name
  const price = props.price
  const quantity = props.quantity
  const handleDelete = props.handleDelete

  return (
    <div className={s.inputWrapper}>
      <span className={s.inputWrapperItem}>{name}</span>
      <span className={s.inputWrapperItem}>{price}</span>
      <input 
        type="number"
        className={s.inputWrapperInput}
        value={quantity}
      />
      <div className={s.buttonWrapper}>
        <button type="button">📝</button>
        <button 
          type="button"
          onClick={
            function() {
              handleDelete(id)
            }
          }
        >🗑️</button>
      </div>
    </div>
  );
}

  // name={firstFruit.name}
  // price={firstFruit.price}
  // quantity={firstFruit.quantity}
  // {
  //   name: firstFruit.name,
  //   price: firstFruit.price,
  //   quantity: firstFruit.quantity,
  // }