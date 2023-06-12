import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <h2>{title}</h2>

      <Image role="img" src={image} height={216} width={144} alt="A picture" />
      <p>{artist}</p>
    </li>
  );
}

export default function ArtPiecePreview({image,title,artist}){
return(
    <>
    <li> <Image role="img"
    src={image}
  height={216}
  width={144}
    alt="A picture"/>
  <title>{title}</title> 
  {artist}</li>
    </>
)}