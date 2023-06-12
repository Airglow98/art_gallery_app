import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("Render list with  title", () => {
  render(
    <ArtPieces pieces={[{ name: "Orange Red and Green Abstract Painting" }]} />
  );
  const artPiecesTitle = screen.getByText(
    "Orange Red and Green Abstract Painting"
  );
  expect(artPiecesTitle).toBeInTheDocument();
});

test("Render list with artist", () => {
  render(<ArtPieces pieces={[{ artist: "Steve Johnson", slug: "123" }]} />);
  const artPiecesArtist = screen.getByText("Steve Johnson");
  expect(artPiecesArtist).toBeInTheDocument();
});

test("Render list with  image", () => {
  render(
    <ArtPieces
      pieces={[
        {
          imageSource:
            "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        },
      ]}
    />
  );
  const artPiecesImage = screen.getByRole("img");
  expect(artPiecesImage).toBeInTheDocument();
});
