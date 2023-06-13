import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  handleToggleFavorite,
}) {
  return (
    <li>
      <h2>{title}</h2>
      <FavoriteButton onToggleFavorite={handleToggleFavorite} />
      <Image role="img" src={image} height={216} width={144} alt="A picture" />
      <p>{artist}</p>
    </li>
  );
}
