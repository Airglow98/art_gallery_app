import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useStore } from "../_app";
import { useRouter } from "next/router";

export default function ArtPiecesIndex({}) {
  const { data } = useStore();
  const router = useRouter();
  function handleClick(slug) {
    router.push(`/art-pieces/${slug}`);
  }

  return (
    <>
      <ArtPieces pieces={data} onClick={handleClick} />
    </>
  );
}
