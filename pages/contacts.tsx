import { Container, Heading, Text, Grid, Divider, Link, Flex, Icon } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from '../components/Footer'

/**
 * The properties of a social component.
 * @interface Social
 */
interface Social {

    /**
     * The name of the social media.
     * @type {string}
     */
    name: string;

    /**
     * The link to the social media.
     * @type {string}
     */
    href: string;

    /**
     * The description of the social media.
     * @type {string}
     */
    description: string;
}

/**
 * The array which contains all the social media.
 * @type {Social[]}
 */
const socials: Social[] = [
    {
        name: "Instagram 📷",
        href: "https://www.instagram.com/luca.del.corona/",
        description: "Check out my latest photos!",
    },
    {
        name: "GitHub 👨‍💻",
        href: "https://github.com/VoidElle",
        description: "See all of my projects and code.",
    },
    {
        name: "LinkedIn 💻",
        href: "https://www.linkedin.com/in/luca-del-corona/",
        description: "See my professional profile.",
    },
    {
        name: "Email ✉️",
        href: "mailto:lucadelc@gmail.com",
        description: "Send me an email. Wether you're a client or a fan!",
    },
];

/**
 * The color of the background
 * @type {string}
 */
const backgroundColor = "gray.100";

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
 * The component that represents a Contacts.
 */
const Contacts = () => {
    return (
        <div>
            <Head>
                <title>Luca Del Corona | Contacts</title>
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
                <Container pt={16} maxW={"90ch"} px={6} pb={4}>
                    <Heading fontFamily="Work Sans, sans-serif" fontSize={{ base: "2.3em", md: "3em" }}>
                        Contact Me 🌱
                    </Heading>
                </Container>
                <Container maxW={"90ch"} px={6}>
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                        {
                            socials.map((i: Social) => {
                                return (
                                    <Flex justifyContent="center" alignItems="start" py={3} px={4} bgColor={backgroundColor} flexDir="column" key={i.name}>
                                        <Link href={i.href} target="_blank" w={"full"}>
                                            <Flex rounded="md" justifyContent="space-between" alignItems="start" w={"full"}>
                                                <Heading fontFamily="Work Sans, sans-serif">
                                                    {i.name}
                                                </Heading>
                                                <Icon viewBox="0 0 24 24" fontSize="3xl">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </Icon>
                                            </Flex>
                                        </Link>
                                        <Text textColor="gray.400">
                                            {i.description}
                                        </Text>
                                    </Flex>
                                );
                            })
                        }
                    </Grid>
                </Container>
                <Container maxW={width} px={padding} py={8}>
                    <Text textColor="gray.400" fontSize="1.1em">
                        Feel free to contact me through any of these links!
                    </Text>
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

export default Contacts;