import Head from "next/head";
import { Container, Heading, Text, Grid, Divider } from "@chakra-ui/react";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {
  const width = "80ch";
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
              <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          </Head>
          <Container pt={{ base: "4", md: "32" }} maxW={width}>
              <Heading fontFamily="Work Sans">
                  Hi, I&apos;m Luca Del Corona 👋
              </Heading>
              <Text textColor="gray.500">
                  I&apos;m a full stack developer. Currently specialized in mobile development.
                  Check out my projects below!
              </Text>
          </Container>
          <Container pt={16} maxW={width}>
              <Heading fontFamily="Work Sans">
                  About me
              </Heading>
              <Text textColor="gray.500" fontSize={{ base: "0.8em", md: "0.9md" }}>
                  My name is Luca Del Corona. I&apos;m a high school student at ITI Galileo Galilei in Leghorn, Italy. I started my journey with web development, doing some basic HTML - CSS - Javascript. Then i started to learn Java with the purpose to write some Minecraft&apos;s plugins, and after making some basics things i discovered how big is the world of developers. Right now I&apos;m currently learning mobile development creating some project (Making also the backend). All of my public projects can be found in my Github profile.
              </Text>
              <br />
              <Text textColor="gray.500" fontSize={{ base: "0.8em", md: "0.9md" }}>
                  I spend my free time riding my bike and listening to music. I&apos;m currently planning to expand my garage :)
              </Text>
          </Container>
          <Container pt={16} maxW={width}>
              <Heading fontFamily="Work Sans" mb={3}>
                  My Projects
              </Heading>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <Project title="Tap It!" description="" />
                  <Project title="EasyTickets" description="" />
                  <Project title="Good Games" description="" />
              </Grid>
          </Container>
          <Container pt={16} pb={10} maxW={width}>
              <Heading pb={2} fontFamily="Work Sans">
                  My Favorite Technologies
              </Heading>
              <Technologies
                  items={[
                      "Next.js",
                      "MongoDB",
                      "React",
                      "Tailwind CSS",
                      "ChakraUI",
                      "Vercel",
                  ]}
              />
          </Container>
          <Container pb={10} maxW={width}>
              <Divider />
          </Container>
          <Footer />
      </div>
  );
};