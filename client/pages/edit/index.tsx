import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { loadUser } from "@/actions/user";
import WysiwygEditor from "@/components/Toast/WysiwygEditor";

const Container = styled.div`
  width: 80%;
  margin: 100px auto;
`;

export default function Signup() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <>
      <Head>
        <title>Wblog 글쓰기</title>
      </Head>
      <h1> 글쓰기 </h1>
      <Container>
        <WysiwygEditor onChange={(value) => console.log(value)} />
      </Container>
    </>
  );
}
