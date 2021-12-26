import Head from "next/head";
import {Container, Heading, Grid, Divider} from "@chakra-ui/react";
import Certification from "../components/Certification";
import Footer from "../components/Footer";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const width = "90ch";
const padding = 10;

interface Certification {
    title: string,
    text: string,
    href: string,
    src: string
}

const certificationsObj: Certification[] = [
    {
        title: "Certified Javascript Developer | W3Schools",
        text: "This certification was given to me by W3Schools. Upon passing their exam.",
        href: "https://courses.w3schools.com/certificates/certified-javascript-developer-539.pdf",
        src: "/w3-javascript.png"
    },
    {
        title: "Certified Javascript Developer | W3Schools",
        text: "This certification was given to me by W3Schools. Upon passing their exam.",
        href: "https://courses.w3schools.com/certificates/certified-javascript-developer-539.pdf",
        src: "/w3-javascript.png"
    },
    {
        title: "Certified Javascript Developer | W3Schools",
        text: "This certification was given to me by W3Schools. Upon passing their exam.",
        href: "https://courses.w3schools.com/certificates/certified-javascript-developer-539.pdf",
        src: "/w3-javascript.png"
    }
];

const Certifications = (): JSX.Element => {

    const border = useColorModeValue("gray.300", "gray.600")

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
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <Navbar width={width} padding={padding} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25, type: "tween" }}>
                <Container pt={24} maxW={width} px={padding} pb={16}>
                    <Heading fontFamily="Work Sans, sans-serif" mb={3}>
                        My Certifications 🥇
                    </Heading>
                    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
                        {
                            certificationsObj.map((i: Certification) => {
                                return (
                                    <Certification key={i.title} title={i.title} text={i.text} href={i.href} src={i.src} />
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