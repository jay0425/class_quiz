import axios from 'axios';

export default function ExamplePage0401() {
  async function onClickAsync() {
    const result = await axios.get('https://koreanjson.com/users');
    console.log(result);
  }
  return (
    <>
      <button onClick={onClickAsync}>[REST-API 요청하기]</button>
    </>
  );
}
