import Spotlight from "@/components/Spotlight/Spotlight";
import { useStore } from "./_app";

export default function Index() {
  const { data } = useStore();
  return (
    <Spotlight
      image={data.map((piece) => {
        const image = piece.imageSource;
        return image;
      })}
      artist={data.map((piece) => {
        const artist = piece.artist;
        return artist;
      })}
    />
  );
}
