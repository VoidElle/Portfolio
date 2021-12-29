import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Container, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";

/**
 * The width of the page
 * @type {string}
 */
const width = "90ch";

/**
 * The padding of the page
 * @type {number}
 */
const padding = 6;

/**
 * The 404 page
 * This page is shown when a user tries to access a page that doesn't exist
 * @returns {JSX.Element}
 */
const NotFound = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Luca Del Corona | 404</title>
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
                        Are you lost ❓
                    </Heading>
                    <Text mb={4} textColor="gray.500">
                        Here, there is nothing to see.
                        <br />
                        Literally, why are you here?
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

export default NotFound;