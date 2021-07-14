import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "@/actions/user";
import { loadPosts } from "@/actions/post";
import Posts from "@/components/Posts";
import { ReducerType } from "@/reducers";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadPosts());
  }, []);

  const { mainPosts } = useSelector((state: ReducerType) => state.post);

  return (
    <>
      <h1>홈페이지</h1>
      {mainPosts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
}

export default Home;
