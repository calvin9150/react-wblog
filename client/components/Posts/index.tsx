import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { deletePost } from "@/actions/post";

const Layout = styled.div`
  width: 50%;
  height: 180px;
  margin: 30px auto;
  border-bottom: 1px ridge rgba(135, 137, 137, 0.178);
  cursor: pointer;
  :hover {
    div :first-child {
      color: #738ddb;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  min-height: 50px;
  /* border: 1px solid gray; */
  font-size: 30px;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
  /* border: 1px solid black; */
  font-size: 15px;
  overflow: hidden;
`;

const Posts: FC<AppProps> = ({ post }) => {
  const dispatch = useDispatch();
  const regex = /(<([^>]+)>)/gi;
  const title = post.title;
  const content = post.content.replace(regex, "");
  const id = post.id;

  const createContent = () => {
    return { __html: content };
  };

  return (
    <>
      <Layout>
        <Link href={{ pathname: "/category", query: { postId: post.id } }}>
          <Title>{title}</Title>
        </Link>
        <Link href={{ pathname: "/category", query: { postId: post.id } }}>
          <Content dangerouslySetInnerHTML={createContent()} />
        </Link>
      </Layout>
    </>
  );
};

export default Posts;
