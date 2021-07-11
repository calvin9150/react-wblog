import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loadUser } from "@/actions/user";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <>
      <h1>홈페이지</h1>
    </>
  );
}

export default Home;
