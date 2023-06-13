import Image from "next/image";
import { useState, useEffect } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  slug,
  image,
  artist,
  handleToggleFavorite,
}) {
  const [spotlightImage, setSpotlightImage] = useState({
    image: "",
    artist: "",
  });

  function getRandomArtPiece(image) {
    const randomImageIndex = Math.floor(Math.random() * image.length);
    setSpotlightImage({
      image: image[randomImageIndex],
      artist: artist[randomImageIndex],
    });
  }

  useEffect(() => {
    getRandomArtPiece(image);
  }, []);
  return (
    <>
      <FavoriteButton onToggleFavorite={handleToggleFavorite} slug={slug} />
      <Image alt="" src={spotlightImage.image} width={144} height={216} />
      <p>{spotlightImage.artist}</p>
    </>
  );
}
