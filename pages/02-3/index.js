import { useState } from 'react';

export default function ExamplePage() {
  const [numbers, setNumbers] = useState('000000');

  function onClickRandomNumber() {
    let number = document.getElementById('qqq');
    number.innerText = Math.floor(Math.random() * 1000000);
  }

  function onClickRandomNumber2() {
    setNumbers(Math.floor(Math.random() * 1000000));
  }

  return (
    <div>
      <div id="qqq">000000</div>
      <button onClick={onClickRandomNumber}>인증번호전송</button>
      <div id="aaa">{numbers}</div>
      <button onClick={onClickRandomNumber2}>인증번호전송</button>
    </div>
  );
}
