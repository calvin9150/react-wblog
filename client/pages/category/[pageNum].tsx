import { useRouter } from "next/router";
import axios from "axios";

import { loadPost } from "@/actions/post";
import { loadUser } from "@/actions/user";
import wrapper from "@/store/store";
import { useSelector } from "react-redux";

const Post = () => {
  const router = useRouter();
  const { pageNum } = router.query;
  const { id } = router.query;
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div>
      <h1> {pageNum} 번 post </h1>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    await context.store.dispatch(loadUser());
    await context.store.dispatch(loadPost({ postId: context.params.id }));

    return {
      props: {},
    };
  }
);

export default Post;
