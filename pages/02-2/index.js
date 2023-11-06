import { useState } from 'react';

export default function ExamplePage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    let count = Number(document.getElementById('qqq').innerText) + 1;
    document.getElementById('qqq').innerText = count;
  }

  function onClickCountUp2() {
    setCount(count + 1);
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <div>{count}</div>
      <button onClick={onClickCountUp2}>카운트 올리기!!</button>
    </div>
  );
}
