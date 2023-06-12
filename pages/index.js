import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useStore } from "./_app";

export default function HomePage({}) {
  const { data } = useStore();
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
