import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { AppProps } from "next/app";
import theme from "../theme";

/**
 * This is the main app component.
 * It is used to render the main app component.
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;