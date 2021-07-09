import { signin } from "@/actions/user";
import useInput from "@/hooks/useInput";
import { User } from "@/reducers/user";
import Head from "next/head";
import { FC, FormEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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

const Login: FC = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        signin({
          email,
          password,
        })
      );
    },
    [email, password]
  );

  return (
    <>
      <Head>
        <title>Wblog 로그인</title>
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
            <Label htmlFor="password-input">비밀번호</Label>
            <input
              type="password"
              id="password-input"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button type="submit">로그인</button>
        </Form>
        <button>
          <a href="/signup">회원가입</a>
        </button>
      </Container>
    </>
  );
};

export default Login;
