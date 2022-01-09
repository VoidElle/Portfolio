import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Container, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";

/**
 * The width of the page
 * @type {string}
 */
const width: string = "90ch";

/**
 * The padding of the page
 * @type {number}
 */
const padding: number = 6;

/**
 * The 500 page
 * This page is shown when there's an internal error
 * @returns {JSX.Element}
 */
const InternalError = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Luca Del Corona | 500</title>
                <meta name="description" content="Luca Del Corona portfolio" />
                <meta property="og:url" content="https://www.lucadelcorona.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Luca Del Corona | Portfolio" />
                <meta property="og:description" content="Luca Del Corona portfolio" />
                <meta property="og:image" content="https://source.unsplash.com/collection/94997000/" />
                <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
            </Head>
            <Navbar width={width} padding={padding} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25, type: "tween" }}>
                <Container pt={16} maxW={width} px={padding} pb={16}>
                    <Heading fontFamily="Work Sans, sans-serif" fontSize={{ base: "2.3em", md: "3em" }}>
                        Wait, this was unexpected ❌
                    </Heading>
                    <Text mb={4} textColor="gray.500">
                        Yeah, this is embarrassing.
                        <br />
                        This is probably a bug in the website.
                        It just crashed...
                    </Text>
                    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
                    </Grid>
                </Container>
                <Container pb={10} maxW={width} px={padding}>
                    <Divider />
                </Container>
                <Container maxW={width} px={padding}>
                    <Footer />
                </Container>
            </motion.div>
        </div>
    );
};

export default InternalError;