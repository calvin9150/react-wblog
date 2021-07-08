import { useRouter } from "next/router";

export default function PageDetail() {
  const router = useRouter();
  const { pageNum } = router.query;

  return (
    <div>
      <h1> {pageNum} 번 post </h1>
    </div>
  );
}
