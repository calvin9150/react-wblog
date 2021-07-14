import { FC } from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 80%;
  height: 200px;
  margin: 50px auto;
  border: 1px solid royalblue;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid gray;
`;

const Content = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid black;
  overflow: hidden;
`;

const Posts: FC<any> = ({ post }) => {
  const title = post.title;
  const content = post.content;
  const id = post.id;

  const createContent = () => {
    return { __html: content };
  };

  return (
    <>
      <Layout>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={createContent()} />
      </Layout>
    </>
  );
};

export default Posts;
