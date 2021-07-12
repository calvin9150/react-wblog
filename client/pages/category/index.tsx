import { loadUser } from "@/actions/user";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PostAll() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <>
      <Head>
        <title>Wblog 카테고리</title>
      </Head>
      <h1> category index </h1>
    </>
  );
}
