import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "@/actions/user";
import { loadPosts } from "@/actions/post";
import Posts from "@/components/Posts";
import { ReducerType } from "@/reducers";
import wrapper from "@/store/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

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
      {mainPosts.map((post: { id: React.Key | null | undefined }) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
}
export const getServerSideProps = wrapper.getServerSideProps((context) => {
  (context.store.dispatch as ThunkDispatch<any, void, AnyAction>)(loadUser());
  (context.store.dispatch as ThunkDispatch<any, void, AnyAction>)(loadPosts());
});

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, next }) => {
//       await store.dispatch(loadUser());
//       await store.dispatch(loadPosts());
//     }
// );

export default Home;
