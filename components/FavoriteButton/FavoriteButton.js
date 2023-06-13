import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button
      type="button"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      <Image
        src="/assets/heart.svg"
        alt="Favorite Button"
        width={30}
        height={30}
      />
    </button>
  );
}
