import { ReducerType } from "@/reducers";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentsList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid #00000013;

  div {
    padding: 10px 0;
    width: 90%;
  }

  .content {
  }

  .date {
    width: 17%;
    font-size: 15px;
    color: #80808099;
  }
`;

type Props = {
  comments: any;
};

const Comments = ({ comments }: Props) => {
  const dateRegex = /[A-za-z]/g;
  const date = comments?.createdAt.replace(dateRegex, " ").substr(0, 19);
  return (
    <>
      <CommentsList>
        <div className="content">
          <div>
            <strong>{comments.User?.nickname}</strong>
          </div>
          <div>{comments.content}</div>
        </div>

        <div className="date">{date}</div>
      </CommentsList>
    </>
  );
};

export default Comments;
