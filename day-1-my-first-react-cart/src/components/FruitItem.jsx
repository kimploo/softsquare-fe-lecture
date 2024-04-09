/* eslint-disable react/prop-types */
import s from "./FruitItem.module.css";

// props
// 함수 전달인자 아닌가? 맞음
export default function FruitItem(props) {
  console.log(`FruitItem props {
    id: props.id
    name: props.name
    price: props.price
  }`, props)
  const { id, name, price } = props;

  return (
    <div key={id} className={s.inputWrapper}>
      <span className={s.inputWrapperItem}>{name}</span>
      <span className={s.inputWrapperItem}>{price}</span>
      <input
        className={s.inputWrapperInput}
        id={`quantityInput_${id}`}
        name={`quantityInput_${id}`}
        type="number"
        min={0}
        step={1}
      />
      <button type="button">📝</button>
      <button type="button">🗑️</button>
    </div>
  );
}
