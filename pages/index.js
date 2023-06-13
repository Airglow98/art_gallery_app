import Spotlight from "@/components/Spotlight/Spotlight";
import { useStore } from "./_app";
import { useState } from "react";

export default function Index({ handleToggleFavorite }) {
  const { data } = useStore();
  return (
    <>
      {
        <Spotlight
          image={data.map((piece) => {
            const image = piece.imageSource;
            return image;
          })}
          artist={data.map((piece) => {
            const artist = piece.artist;
            return artist;
          })}
          handleToggleFavorite={handleToggleFavorite}
          slug={data.map((piece) => {
            const slug = piece.slug;
            return slug;
          })}
        />
      }
    </>
  );
}
