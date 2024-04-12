import { useState, useCallback } from 'react';

export default function Page() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  const increment1 = useCallback(() => {
    console.log('useCallback increment1: ' + count1)
    setCount1(count1 + 1);
  }, []);
  
  const increment2 = useCallback(() => {
    console.log('useCallback increment2: ' + count2)
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <p>
        Count1: {count1}
      </p>
      <p>
        Count2: {count2}
      </p>      
      <Button1 onClick={increment1} />
      <Button2 onClick={increment2} />
    </div>
  );
}

function Button1({ onClick }) {
  console.log('button1')
  return <button onClick={onClick}>Increment1</button>;
}

function Button2({ onClick }) {
  console.log('button2')
  return <button onClick={onClick}>Increment2</button>;
}
