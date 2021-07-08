import Head from "next/head";
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

const Login = () => {
  return (
    <>
      <Head>
        <title>Wblog 로그인</title>
      </Head>
      <Container>
        <Form>
          <div>
            <Label htmlFor="email-input">이메일</Label>
            <input type="email" id="email-input" />
          </div>

          <div>
            <Label htmlFor="password-input">비밀번호</Label>
            <input type="password" id="password-input" />
          </div>
        </Form>
        <button>로그인</button>
        <button>
          <a href="/signup">회원가입</a>
        </button>
      </Container>
    </>
  );
};

export default Login;
