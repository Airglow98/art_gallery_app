import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useStore } from "../_app";

export default function ArtPiecesIndex({ handleToggleFavorite }) {
  const { data } = useStore();
  return (
    <>
      <ArtPieces pieces={data} handleToggleFavorite={handleToggleFavorite} />
    </>
  );
}
