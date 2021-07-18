import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { addComment, deletePost, loadPost } from "@/actions/post";
import useInput from "@/hooks/useInput";
import { ReducerType } from "@/reducers";
import Comments from "../Comments";

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
  border-bottom: 2px ridge rgba(135, 137, 137, 0.26);
  font-size: 40px;
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 100px;
  min-height: 150px;
  overflow: hidden;
`;

const Comment = styled.div`
  width: 100%;
  height: 250px;
  margin: 20px 0;
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

const CommentsLayout = styled.div`
  border-top: 3px ridge rgba(135, 137, 137, 0.267);
  padding: 30px 10px;
`;

const Post: FC<AppProps> = ({ post }) => {
  const dispatch = useDispatch();
  const title = post.title;
  const content = post.content;
  const postId = post.id;
  const userId = useSelector((state: ReducerType) => state.user.user.id);
  const { mainPosts, addCommentDone } = useSelector(
    (state: ReducerType) => state.post
  );

  const [count, setCount] = useState(0);
  const [commentText, setCommentText] = useState("");

  const createContent = () => {
    return { __html: content };
  };

  const onSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addComment({ content: commentText, postId, userId }));
      setCommentText("");
      e.target.reset();
    },
    [dispatch, commentText, postId, userId]
  );

  useEffect(() => {
    if (addCommentDone) {
      dispatch(loadPost({ postId }));
    }
  }, [addCommentDone]);

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
        <CommentsLayout>
          {mainPosts[0]?.Comments.map((comments) => (
            <Comments key={comments.id} Comments={comments}></Comments>
          ))}
        </CommentsLayout>
        <Comment>
          <p>{count}/200</p>
          <form onSubmit={onSubmitComment}>
            <textarea
              maxLength={200}
              onChange={(e) => {
                setCount(e.target.value.length);
                setCommentText(e.target.value);
              }}
            ></textarea>

            <button type="submit">댓글 등록</button>
          </form>
        </Comment>
      </Layout>
    </>
  );
};

export default Post;
