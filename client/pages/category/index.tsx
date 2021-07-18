import { loadPost } from "@/actions/post";
import { loadUser } from "@/actions/user";
import Post from "@/components/Post";
import { ReducerType } from "@/reducers";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PostAll() {
  const dispatch = useDispatch();
  const router = useRouter();
  const postId: any = router.query.postId;
  type mainPosts = {
    [Comments: string]: string;
  };

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadPost({ postId }));
    console.log(postId);
  }, [postId]);

  const { mainPosts } = useSelector((state: ReducerType) => state.post);

  return (
    <>
      <h1>category {postId} 번 게시글</h1>
      {mainPosts.map((post: { id: React.Key | null | undefined }) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
