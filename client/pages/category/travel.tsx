import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadTravel } from "@/actions/post";
import { loadUser } from "@/actions/user";
import Posts from "@/components/Posts";
import { ReducerType } from "@/reducers";

function Travel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadTravel());
  }, []);

  const { mainPosts } = useSelector((state: ReducerType) => state.post);
  return (
    <>
      <Head>
        <title>Wblog 여행</title>
      </Head>
      <h1> travel </h1>
      <Link href="/edit">글쓰기</Link>
      {mainPosts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
}

export default Travel;
