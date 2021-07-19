import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "@/actions/user";
import { loadPosts } from "@/actions/post";
import Posts from "@/components/Posts";
import { ReducerType } from "@/reducers";
import wrapper from "@/store/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";

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
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    await context.store.dispatch(loadUser());
    await context.store.dispatch(loadPosts());

    return {
      props: {},
    };
  }
);

// SSR 세팅 전
// export const getServerSideProps = wrapper.getServerSideProps((context) => {
//   (context.store.dispatch as ThunkDispatch<any, void, AnyAction>)(loadUser());
//   (context.store.dispatch as ThunkDispatch<any, void, AnyAction>)(loadPosts());
// });

// SSR test1
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, next }) => {
//       await store.dispatch(loadUser());
//       await store.dispatch(loadPosts());
//     }
// );

export default Home;
