import { useState } from 'react';

export default function ExamplePage() {
  const [hi, setHi] = useState('안녕하세요');

  function onClickHi() {
    let hi = document.getElementById('qqq');
    hi.innerText = '반갑습니다.';
  }

  function onClickHi2() {
    setHi('반갑습니다.');
  }

  return (
    <div>
      <button id="qqq" onClick={onClickHi}>
        안녕하세요
      </button>
      <button onClick={onClickHi2}>{hi}</button>
    </div>
  );
}
