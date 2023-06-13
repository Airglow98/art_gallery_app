/* import { url } from "inspector"; */
import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { create } from "zustand";
import { useState } from "react";
import { useImmer } from "use-immer";

const useStore = create((set) => ({
  data: null,
  setData: (newData) => set({ data: newData }),
}));

export { useStore };

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);
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
    updateArtPiecesInfo((draft) => {
      // find the movie in the state
      const info = draft.find((info) => info.slug === slug);
      // if the movie is already in the state, toggle the isFavorite property
      if (info) {
        info.isFavorite = !info.isFavorite;
        console.log("fall1");
      } else {
        // if the movie is not in the state, add it with isFavorite set to true
        draft.push({ slug, isFavorite: true });
        console.log("fall2");
      }
    });
  }
  console.log(artPiecesInfo);
  {
    return (
      <>
        <SWRConfig value={{ fetcher }}>
          <Layout />
          <GlobalStyle />
          <Component
            handleToggleFavorite={handleToggleFavorite}
            {...pageProps}
          />
        </SWRConfig>
      </>
    );
  }
}
