import { deletePost } from "@/actions/post";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
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
  overflow: hidden;
`;

const Comment = styled.div`
  width: 100%;
  height: 200px;
  margin: 50px 0;
  border-top: 2px ridge rgba(135, 137, 137, 0.267);

  p {
    color: #8080807b;
  }

  textarea {
    width: 100%;
    height: 100px;
    font-size: 17px;
    box-sizing: border-box;
    outline: none;
    border: 1px ridge rgba(135, 137, 137, 0.267);
  }

  button {
    height: 50px;
    width: 100px;
    float: right;
    border: 1px ridge rgba(135, 137, 137, 0.267);
    border-radius: 15px 15px;
    background-color: #a5a5a528;
    :hover {
      background-color: #0044ff29;
    }
  }
`;

const Post: FC<AppProps> = ({ post }) => {
  const dispatch = useDispatch();
  const title = post.title;
  const content = post.content;
  const id = post.id;

  const [count, setCount] = useState(0);

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
        <Comment>
          <p>{count}/200</p>
          <textarea
            maxLength={200}
            onChange={(e) => setCount(e.target.value.length)}
          ></textarea>
          <button>댓글 등록</button>
        </Comment>
      </Layout>
    </>
  );
};

export default Post;
