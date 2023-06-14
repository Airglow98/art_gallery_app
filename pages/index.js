import Spotlight from "@/components/Spotlight/Spotlight";
import { useStore } from "./_app";
import { useEffect, useState } from "react";

export default function Index({ handleToggleFavorite, artPiecesInfo }) {
  const { data } = useStore();
  const [spotlight, setSpotligth] = useState({});

  function getRandomArtPiece() {
    const randomImageIndex = Math.floor(Math.random() * data.length);
    return data[randomImageIndex];
  }

  useEffect(() => {
    const spotligth = getRandomArtPiece();
    setSpotligth(spotligth);
  }, []);

  return (
    <>
      {
        <Spotlight
          image={spotlight.imageSource}
          artist={spotlight.artist}
          slug={spotlight.slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      }
    </>
  );
}
