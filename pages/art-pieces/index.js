import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useStore } from "../_app";
import { useRouter } from "next/router";

export default function ArtPiecesIndex({ handleToggleFavorite }) {
  const { data } = useStore();
  const router = useRouter();
  function handleClick(slug) {
    router.push(`/art-pieces/${slug}`);
  }

  return (
    <>
      <ArtPieces pieces={data} handleToggleFavorite={handleToggleFavorite} />
    </>
  );
}
