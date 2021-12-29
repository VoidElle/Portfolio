import Head from "next/head";
import { Container, Heading, Grid, Divider, Text } from "@chakra-ui/react";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

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
 * The properties of the Certifications component.
 * @interface NavbarProps
 */
interface Certification {

    /**
     * The title of the certification
     * @type {string}
     */
    title: string;

    /**
     * The text of the certification
     * @type {string}
     */
    text: string;

    /**
     * The href of the certification
     * @type {string}
     */
    href: string;

    /**
     * The source of the image of the certification
     * @type {string}
     */
    src: string;
}

/**
 * The array which contains the properties of the Certifications component.
 * @type {Certification[]}
 */
const certificationsObj: Certification[] = [

];

/**
 * The Certifications component.
 * @returns {JSX.Element}
 */
const Certifications = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Luca Del Corona | Certifications</title>
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
                        My Certifications 🥇
                    </Heading>
                    <Text mb={4} textColor="gray.500">
                        These are most of the certifications I&apos;ve gotten since starting
                        my career.
                    </Text>
                    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
                        {
                            certificationsObj.map((i: Certification) => {
                                return (
                                    <Certification key={i.title} title={i.title} href={i.href} src={i.src} text={i.text} />
                                );
                            })
                        }
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

export default Certifications;