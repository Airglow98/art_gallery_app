import { useState } from "react";
import ArtPiecePreview from "../ArtPiecesPreview/ArtPiecesPreview";
import Spotlight from "../Spotlight/Spotlight";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <Spotlight
        image={pieces.map((piece) => {
          const image = piece.imageSource;
          return image;
        })}
        artist={pieces.map((piece) => {
          const artist = piece.artist;
          return artist;
        })}
      />
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
