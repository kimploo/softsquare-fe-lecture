import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

// fruits = [
//   {
//     name: "사과",
//     color: "빨강",
//     price: 5000,
//     origin: {
//       country: "한국",
//       region: "경북",
//       note: "달콤하고 아삭아삭한 맛",
//     },
//   },
//   {
//     name: "바나나",
//     color: "노랑",
//     price: 3000,
//     origin: {
//       country: "필리핀",
//       region: "다바오",
//       note: "부드럽고 달콤한 맛",
//     },
//   },
//   {
//     name: "체리",
//     color: "빨강",
//     price: 12000,
//     origin: {
//       country: "미국",
//       region: "워싱턴",
//       note: "신선하고 즙이 많음",
//     },
//   },
//   {
//     name: "딸기",
//     color: "빨강",
//     price: 9000,
//     origin: {
//       country: "한국",
//       region: "경기",
//       note: "달콤하고 향이 강함",
//     },
//   },
//   {
//     name: "포도",
//     color: "보라",
//     price: 4000,
//     origin: {
//       country: "프랑스",
//       region: "보르도",
//       note: "풍부한 향과 새콤달콤한 맛",
//     },
//   },
// ];

export default function Page() {
  // 페이지가 렌더링 된 후 변화해야 하는 값을 다루기 위해 useState를 씁니다. state hook이라고도 부름
  console.log('rerender')

  // 예시 1. 화면 변화 (DOM 조작)
  // ES6문법, 결국 리턴받는건 그냥 하나의 배열
  
  // const [상태변수, 상태갱신함수] = useState(초기값) 
  // setIsOn(false)
  const [isOn, setIsOn] = useState(true);

  // 예시 2. input
  const [name, setName] = useState("");
  console.log('name', name)
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);

  // 예시 3. 리스트 아이템
  const [fruits, setFruit] = useState(fruitsData);
  const addFruit = () => {
    // ES6
    const newFruit = {
      name, 
      color,
      price
    }
    
    // JavaScript가 fruits가 변경되었다고 인식하기 위해서는 새로운 배열을 생성해서 변경해줘야 한다.
    // {} === {} // false
    // [] === [] // false
    setFruit([...fruits, newFruit])
  }

  return (
    <div className={s.appContainer}>
      <div>
        {/* boolean state의 경우 !를 활용하여 toggle 해주면 무난 */}
        <button onClick={() => setIsOn(!isOn)} >{isOn ? "✅" : "❎"}</button>
      </div>
      <div>
        {/* input state를 관리할 때는 아래와 같이 controlled component로 관리하는게 정석 */}
        {/* 개발자에 따라서 useRef를 활용한 최적화를 하기도 함 */}
        <div className={s.inputWrapper}>
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={s.inputWrapper}>
          <label>색상</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className={s.inputWrapper}>
          <label>가격</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
            max={15000}
            step={1000}
          />
        </div>
        <button onClick={addFruit}>추가</button>
      </div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (<li className={s.itemListItem} key={f.name + i}>
          <span>{f.name}</span>
          <span>{f.color}</span>
          <span>{f.price}</span>
        </li>))}
      </ul>
    </div>
  );
}
