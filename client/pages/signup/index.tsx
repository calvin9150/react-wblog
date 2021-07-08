import useInput from "@/hooks/useInput";
import styled from "styled-components";
import Head from "next/head";
import { useCallback, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 300px;
  margin: 100px auto;
`;

const Form = styled.form`
  width: 500px;
  margin: 30px auto;
  font-size: 20px;

  & input {
    width: 200px;
    height: 20px;
    float: right;
  }

  & div {
    margin-bottom: 50px;
  }
`;

const Label = styled.label`
  margin: 50px 50px;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [passwordEqual, setPasswordEqual] = useState(true);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.tartget.value);
      setPasswordEqual(e.target.value !== passwordCheck);
    },
    [password]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.tartget.value);
      setPasswordEqual(e.target.value !== password);
    },
    [passwordCheck]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, nickname, password);
      if (!passwordEqual) {
        alert("비밀번호가 서로 맞지 않습니다.");
      }
    },
    [email, nickname, password, passwordCheck]
  );

  return (
    <>
      <Head>
        <title>Wblog 회원가입</title>
      </Head>
      <Container>
        <Form onSubmit={onSubmit}>
          <div>
            <Label htmlFor="email-input">이메일</Label>
            <input
              type="email"
              id="email-input"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <Label htmlFor="nickname-input">닉네임</Label>
            <input
              type="text"
              id="nickname-input"
              value={nickname}
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <Label htmlFor="password-input">비밀번호</Label>
            <input
              type="password"
              id="password-input"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <Label htmlFor="passwordCheck-input">비밀번호 확인</Label>
            <input
              type="password"
              id="passwordCheck-input"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
        </Form>
        <button>
          <a href="/signup">회원가입</a>
        </button>
      </Container>
    </>
  );
};

export default Signup;
