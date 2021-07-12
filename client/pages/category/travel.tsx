import { loadUser } from "@/actions/user";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Travel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <>
      <Head>
        <title>Wblog 여행</title>
      </Head>
      <h1> travel </h1>
      <Link href="/edit">글쓰기</Link>
    </>
  );
}
