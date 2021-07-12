import { loadUser } from "@/actions/user";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Programming() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <>
      <Head>
        <title>Wblog 프로그래밍</title>
      </Head>
      <h1> js </h1>
      <Link href="/edit">글쓰기</Link>
    </>
  );
}
