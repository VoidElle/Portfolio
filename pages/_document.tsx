import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";

/**
 * This is the document that is rendered for each page.
 * It's the main entry point for every page.
 */
class MyDocument extends Document {

    /**
     * This function is called by Next.js to get the initial props of the document.
     * @param ctx The context of the document.
     */
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    /**
     * The render function
     * It renders the page and the theme
     * @return {JSX.Element}
     */
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;