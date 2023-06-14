import Image from "next/image";
import { useState, useEffect } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  slug,
  image,
  artist,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const isFavorite = artPiecesInfo.find(
    (info) => info.slug === slug
  )?.isFavorite;

  return (
    <>
      <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
      <Image alt="image" src={image} width={144} height={216} />
      <p>{artist}</p>
    </>
  );
}
