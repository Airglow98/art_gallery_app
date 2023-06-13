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
  const [artPiecesInfo, setArtPiecesInfo] = useState(false);
  const { data, setData } = useStore();
  const [modifiedData, setModifiedData] = useState({ ...data });
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
  /*  function handleToggleFavorite(slug) {
    modifiedData.map((dataObject) => {
      if (dataObject.slug === slug) {
        return { ...dataObject, isFavorite: !artPiecesInfo };
      }
      return dataObject;
    });
  } */

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
