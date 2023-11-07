import { useState } from 'react';

export default function ExamplePage4() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [emailErrer, setEmailError] = useState('');
  const [emailCheckErrer, setEmailCheckError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setEmailError('');
    }

    if (email.includes('@') === false) {
      setEmailCheckError('이메일 형식을 확인해주세요!!');
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError('');
    }
  };

  const onChangePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
    if (event.target.value) {
      setPasswordCheckError('');
    }
  };

  const onClickSubmit = async (event) => {
    if (!email) {
      setEmailError('이메일을 입력해주세요!!');
    }

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요!!');
    }

    if (password !== passwordCheck) {
      setPasswordCheckError('비밀번호가 일치하지 않습니다!!');
    }

    if (email && password && passwordCheck && email.includes('@')) {
      alert('정상적으로 포스팅되었습니다.');
    }
  };

  return (
    <>
      <input type="text" placeholder="이메일" onChange={onChangeEmail} />
      <div style={{ color: 'red' }}>{emailErrer}</div>
      <div style={{ color: 'red' }}>{emailCheckErrer}</div>
      <input type="password" placeholder="비밀 번호" onChange={onChangePassword} />
      <div style={{ color: 'red' }}>{passwordError}</div>
      <input type="password" placeholder="비밀 번호 확인" onChange={onChangePasswordCheck} />
      <div style={{ color: 'red' }}>{passwordCheckError}</div>
      <button onClick={onClickSubmit}>가입하기</button>
    </>
  );
}
