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
    width: 80%;
  }

  .content {
  }

  .date {
    width: 17%;
    font-size: 15px;
    color: #80808099;
  }
`;

const Comments: FC<AppProps> = ({ Comments }) => {
  const dateRegex = /[A-za-z]/g;
  const date = Comments?.createdAt.replace(dateRegex, " ").substr(0, 19);
  return (
    <>
      <CommentsList>
        <div className="content">
          <div>
            <strong>{Comments.User?.nickname}</strong>
          </div>
          <div>{Comments.content}</div>
        </div>

        <div className="date">{date}</div>
      </CommentsList>
    </>
  );
};

export default Comments;
