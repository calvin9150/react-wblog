import { ReducerType } from "@/reducers";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentsList = styled.div`
  width: 100%;
  font-size: 18px;

  div {
    padding: 15px 0;
    border-bottom: 1px solid #0000001f;
  }
`;

const Comments: FC<AppProps> = ({ Comments }) => {
  console.log("코멘트 : ");
  console.log(Comments);
  return (
    <>
      <CommentsList>
        <div>{Comments.content}</div>
      </CommentsList>
    </>
  );
};

export default Comments;
