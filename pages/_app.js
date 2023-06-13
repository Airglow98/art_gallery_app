/* import { url } from "inspector"; */
import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { create } from "zustand";
import { useState } from "react";

const useStore = create((set) => ({
  data: null,
  setData: (newData) => set({ data: newData }),
}));

export { useStore };

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const { data, setData } = useStore();

  const { error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher,
    {
      onSuccess: setData, // Speichere die abgerufenen Daten im Zustand
    }
  );
  if (error) return;
  <div>failed to load</div>;
  if (isLoading) return;
  <div>loading...</div>;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      console.log(slug);

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout />
        <GlobalStyle />
        <Component handleToggleFavorite={handleToggleFavorite} {...pageProps} />
      </SWRConfig>
    </>
  );
}
