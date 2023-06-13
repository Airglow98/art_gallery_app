import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useStore } from "../_app";

export default function ArtPiece() {
  const router = useRouter();
  const { data } = useStore();
  const { slug } = router.query;
  const thisArtPeace = data.find((piece) => piece.slug === slug);
  console.log(thisArtPeace);
  if (!thisArtPeace) {
    return <div>This art piece does not exist</div>;
  }
  const { imageSource, name, artist, year, genre } = thisArtPeace;
  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
