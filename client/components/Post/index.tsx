import { deletePost } from "@/actions/post";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Layout = styled.div`
  width: 50%;
  min-height: 600px;
  margin: 50px auto;
  /* border: 1px solid royalblue; */
`;

const Title = styled.div`
  width: 100%;
  min-height: 70px;
  margin-bottom: 50px;
  border-bottom: 1px ridge rgba(135, 137, 137, 0.26);
  font-size: 40px;
`;

const Content = styled.div`
  width: 100%;
  min-height: 150px;
  /* border: 1px solid black; */
  overflow: hidden;
`;

const Post: FC<AppProps> = ({ post }) => {
  const dispatch = useDispatch();
  const title = post.title;
  const content = post.content;
  const id = post.id;

  const createContent = () => {
    return { __html: content };
  };

  // const deleteClick = useEffect(() => {
  //   dispatch(deletePost(id));
  // }, []);

  return (
    <>
      <Layout>
        <Link href={{ pathname: "/category", query: { postId: post.id } }}>
          <Title>{title}</Title>
        </Link>
        <Content dangerouslySetInnerHTML={createContent()} />
        {/* <button onClick={deleteClick}>삭제</button> */}
      </Layout>
    </>
  );
};

export default Post;
