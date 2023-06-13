import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiece({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const thisArtPeace = pieces.find((piece) => piece.slug === slug);
  if (!thisArtPeace) {
    return <div>This art piece does not exist</div>;
  }
  const { imageSource, title, artist, year, genre } = thisArtPeace;
  return (
    <ArtPieceDetails
      image={imageSource}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
