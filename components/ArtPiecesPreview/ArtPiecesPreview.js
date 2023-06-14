import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  handleToggleFavorite,
  slug,
}) {
  return (
    <li>
      <FavoriteButton onToggleFavorite={handleToggleFavorite} slug={slug} />
      <Link href={`/art-pieces/>${slug}`} passHref legacyBehavior>
        <div>
          <h2>{title}</h2>
          <Image
            role="img"
            src={image}
            height={216}
            width={144}
            alt="A picture"
          />
          <p>{artist}</p>
        </div>
      </Link>
    </li>
  );
}
