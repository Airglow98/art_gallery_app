/* import { url } from "inspector"; */
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
const fetcher = (url)=>fetch(url).then((response)=>response.json())

export default function App({ Component, pageProps }) {
  const {data,error,isLoading} = useSWR("https://example-apis.vercel.app/api/art")
if(error)
return 
<div>failed to load</div>;
if(isLoading)
return 
<div>loading...</div>;
console.log(data)
  return (
    <>
    <SWRConfig value={{fetcher}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
    
    </>
  );
}
