import ArtPiecePreview from "../ArtPiecesPreview/ArtPiecesPreview";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            handleToggleFavorite={handleToggleFavorite}
          />
        ))}
      </ul>
    </>
  );
}
