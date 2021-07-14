import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadJavascript, loadPosts } from "@/actions/post";
import { loadUser } from "@/actions/user";
import { ReducerType } from "@/reducers";
import Posts from "@/components/Posts";

export default function Programming() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadJavascript());
  }, []);

  const { mainPosts } = useSelector((state: ReducerType) => state.post);

  return (
    <>
      <Head>
        <title>Wblog 프로그래밍</title>
      </Head>
      <h1> js </h1>
      <Link href="/edit">글쓰기</Link>
      {mainPosts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
}
