import { useState } from "react";
import ArtPiecePreview from "../ArtPiecesPreview/ArtPiecesPreview";
import Spotlight from "../Spotlight/Spotlight";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        ))}
      </ul>
    </>
  );
}
