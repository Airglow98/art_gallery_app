/* import { useState, useEffect } from "react";

export default function Spotlight({ image, artist }) {
  const [spotlightImage, setSpotlightImage] = useState([image, artist]);
  console.log(spotlightImage);
  function getRandomArtPiece(images) {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    setSpotlightImage(images[randomImageIndex]);
  }
  return <>{spotlightImage}</>;
}
 */
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Spotlight({ image, artist }) {
  const [spotlightImage, setSpotlightImage] = useState({
    image: "",
    artist: "",
  });
  console.log(artist);

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

  console.log(spotlightImage);

  return (
    <>
      <Image alt="" src={spotlightImage.image} width={144} height={216} />
      <p>{spotlightImage.artist}</p>
    </>
  );
}
