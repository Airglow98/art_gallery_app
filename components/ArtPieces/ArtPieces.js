import ArtPiecePreview from "../ArtPiecesPreview/ArtPiecesPreview"

export default function ArtPieces({pieces}){
    return(
        <>
        <ul>
          { pieces.map((piece)=>  <ArtPiecePreview key={piece.slug}
          image={piece.imageSource} title={piece.name} artist={piece.artist} />
           )}
        </ul>
        </>
    )
}