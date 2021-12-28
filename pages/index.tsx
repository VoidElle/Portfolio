import Head from "next/head";
import { Container, Heading, Text, Grid, Divider, Avatar } from "@chakra-ui/react";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {

  const width = "90ch";
  const padding = 6;

  return(
      <div>
          <Head>
              <title>Luca Del Corona | Portfolio</title>
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
            <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
                <Avatar borderWidth="6px" borderColor="gray.100" h={32} w={32} src="/img/me.jpg" />
            </Container>
            <Container pt={4} maxW={width} px={padding}>
                <Heading fontFamily="Work Sans, sans-serif" fontSize={{ base: "2.3em", md: "3em" }}>
                    Hi, I&apos;m Luca 👋
                </Heading>
                <Text textColor="gray.500">
                    I&apos;m a full stack developer, currently specialized in mobile development.
                    <br />
                    Check out my projects below!
                </Text>
            </Container>
            <Container pt={16} maxW={width} px={padding}>
                <Heading fontFamily="Work Sans, sans-serif">
                    About me 👨‍💻
                </Heading>
                <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
                    My name is Luca Del Corona. I&apos;m a high school student at ITI Galileo Galilei in Leghorn, Italy. I started my journey with web development, doing some basic HTML - CSS - Javascript. Then i started to learn Java with the purpose to write some Minecraft&apos;s plugins, and after making some basics things i discovered how big is the world of developers. Right now I&apos;m currently learning mobile development creating some project (Making also the backend). All of my public projects can be found in my Github profile.
                </Text>
            </Container>
            <Skills padding={padding} width={width} />
            <Container pt={16} maxW={width} px={padding}>
                <Heading fontFamily="Work Sans, sans-serif" mb={3}>
                    Projects 🔨
                </Heading>
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
                    <Project title="TapIt" url="https://tapit.com/" description="
                        TapIt is a new mobile game, currently only available for Android.
                        The game will show two sections.
                        Your job is to press on your section of the screen to expand.
                        The first to fill the screen with his color wins!" image="/img/projects/tapit.png" />
                </Grid>
            </Container>
              <Container pt={16} maxW={width} px={padding}>
                  <Heading pb={2} fontFamily="Work Sans, sans-serif">
                      Hobbies 🎧
                  </Heading>
                  <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
                      I spend my free time riding my bike and listening to music. I&apos;m currently planning to expand my garage
                  </Text>
                  <Grid mt={8} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} h={{ base: "120vh", md: "45vh"}} gap={4}>
                      <Container position="relative" border="2px solid white">
                          <Image objectFit="cover" src="/img/hobbies/bike.jpg" layout="fill" alt="Espresso cup" />
                      </Container>
                      <Container position="relative" border="2px solid white">
                          <Image objectFit="cover" src="/img/hobbies/coding.jpg" layout="fill" alt="Cold brew glass"/>
                      </Container>
                      <Container position="relative" border="2px solid white">
                          <Image objectFit="cover" src="/img/hobbies/gtr.jpg" layout="fill" alt="Toby"/>
                      </Container>
                  </Grid>
              </Container>
            <Container pt={16} pb={10} maxW={width} px={padding}>
                <Heading pb={2} fontFamily="Work Sans, sans-serif">
                    My Favorite Technologies ⭐️
                </Heading>
                <Technologies
                    items={[
                        {
                            name: "Flutter",
                            description: "Flutter is a framework for developing native apps for iOS, Android, web and desktop",
                            src: "/img/technologies/flutter.svg",
                            alt: "Flutter logo"
                        },
                        {
                            name: "Spring",
                            description: "Spring is an open source framework for developing applications on the Java platform",
                            src: "/img/technologies/spring.svg",
                            alt: "Spring logo"
                        },
                        {
                            name: "MongoDB",
                            description: "MongoDB is a non-relational, document-oriented DBMS. Classified as a NoSQL database",
                            src: "/img/technologies/mongodb.svg",
                            alt: "Spring logo"
                        },
                        {
                            name: "Node.js",
                            description: "Node.js is an event-oriented cross-platform open source runtime system for running JavaScript code",
                            src: "/img/technologies/node.svg",
                            alt: "Spring logo"
                        },
                        {
                            name: "Jetbrains IDEs",
                            description: "JetBrains is a Czech software development company founded in 2000 whose tools are marketed by software developers",
                            src: "/img/technologies/jetbrains.svg",
                            alt: "Next.js logo"
                        },
                        {
                            name: "Github",
                            description: "GitHub is a hosting service for software projects",
                            src: "/img/technologies/github.svg",
                            alt: "MongoDB logo"
                        },
                        {
                            name: "Docker",
                            description: "Docker is an open-source project that automates the process of deploying applications within software containers",
                            src: "/img/technologies/docker.svg",
                            alt: "MongoDB logo"
                        }
                    ]}
                />
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