import { loadUser } from "@/actions/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PageDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });
  const router = useRouter();
  const { pageNum } = router.query;

  return (
    <div>
      <h1> {pageNum} 번 post </h1>
    </div>
  );
}
