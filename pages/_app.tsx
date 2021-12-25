import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider} from "@chakra-ui/provider";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <ChakraProvider>
        <Head>
          <title>Luca Del Corona | Portfolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;