import { useState } from "react";
import ArtPiecePreview from "../ArtPiecesPreview/ArtPiecesPreview";
import Spotlight from "../Spotlight/Spotlight";

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
