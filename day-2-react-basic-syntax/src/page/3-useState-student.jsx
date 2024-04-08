import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

export default function Page() {
  // 페이지가 렌더링 된 후 변화해야 하는 값을 다루기 위해 useState를 씁니다. state hook이라고도 부름

  // 예시 1. 화면 변화 (DOM 조작)
  // ES6문법, 결국 리턴받는건 그냥 하나의 배열
  // const [isOn, setIsOn] = useState(true);

  // 예시 2. input
  // const [name, setName] = useState("");
  // const [color, setColor] = useState("");
  // const [price, setPrice] = useState(0);

  // 예시 3. 리스트 아이템
  // const [fruits, setFruit] = useState(fruitsData);
  // const addFruit = () => {}

  return (
    <div className={s.appContainer}>
      <div>
        {/* boolean state의 경우 !를 활용하여 toggle 해주면 무난 */}
      </div>
      <div>
        {/* 과일 추가 Form */}
        {/* input state를 관리할 때는 아래와 같이 controlled component로 관리하는게 정석 */}
        {/* 개발자에 따라서 useRef를 활용한 최적화를 하기도 함 */}
      </div>
      <ul className={s.itemListWrapper}>
        {/* 과일 나열 */}
      </ul>
    </div>
  );
  
  // 대부분의 경우 이렇게 명시적으로 코드를 짜고 나서 React의 동작 원리에 대해서 깊게 고민할 필요는 없다.
  // React는 declarative(명시적인) 코드 작성을 지향하기 때문에, 대부분 작성한 그대로 작동한다. 다만 아래의 원칙 정도는 기억하자.
    // A component mounts when it’s added to the screen.
    // A component updates when it receives new props or state, usually in response to an interaction.
    // A component unmounts when it’s removed from the screen.
    
  // 값을 직접 변경하지 않고, callback 함수를 활용할 수 있다. 
  // https://react.dev/learn/queueing-a-series-of-state-updates
}
