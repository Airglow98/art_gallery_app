import Image from "next/image";
import Link from "next/link";
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} height={216} width={144} alt={title}></Image>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <button><Link href={"/art-pieces"}>Back</Link></button>

    </>
  );
}
