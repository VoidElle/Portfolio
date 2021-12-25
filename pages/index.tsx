import Head from "next/head";
import { Container, Heading, Text, Grid, Divider, Badge, Flex } from "@chakra-ui/react";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {

  const width = "90ch";
  const padding = 10;

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
          <Container pt={{ base: "12", md: "32" }} maxW={width} px={padding}>
              <Heading fontFamily="Work Sans" fontSize={{ base: "2.3em", md: "3em" }}>
                  Hi, I&apos;m Luca Del Corona 👋
              </Heading>
              <Text textColor="gray.500">
                  I&apos;m a full stack developer. Currently specialized in mobile development.
                  Check out my projects below!
              </Text>
          </Container>
          <Container pt={16} maxW={width} px={padding}>
              <Heading fontFamily="Work Sans">
                  About me 👨‍💻
              </Heading>
              <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
                  My name is Luca Del Corona. I&apos;m a high school student at ITI Galileo Galilei in Leghorn, Italy. I started my journey with web development, doing some basic HTML - CSS - Javascript. Then i started to learn Java with the purpose to write some Minecraft&apos;s plugins, and after making some basics things i discovered how big is the world of developers. Right now I&apos;m currently learning mobile development creating some project (Making also the backend). All of my public projects can be found in my Github profile.
              </Text>
              <br />
              <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
                  I spend my free time riding my bike and listening to music. I&apos;m currently planning to expand my garage :)
              </Text>
          </Container>
          <Container pt={16} maxW={width} px={padding}>
              <Heading fontFamily="Work Sans" mb={1}>My Skills 💪</Heading>
              <Flex justifyContent="start" alignItems="center" direction="row" wrap="wrap" gap={4}>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="teal">Dart</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="messenger">Flutter</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="yellow">Java</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="red">Javascript</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="cyan">Node.js</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="green">HTML</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="blue">CSS</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="blue">Docker</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="blackAlpha">GitHub Actions</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="purple">Bootstrap</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="green">MongoDB</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="yellow">MySQL</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="cyan">PostgreSQL</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="orange">MariaDB</Badge>
                  <Badge mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme="orange">Git</Badge>
              </Flex>
          </Container>
          <Container pt={16} maxW={width} px={padding}>
              <Heading fontFamily="Work Sans" mb={3}>
                  My Projects 🔨
              </Heading>
              <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
                  <Project title="Tap It!" url="https://tapit.com/" description="" />
                  <Project title="EasyTickets" url="https://easytickets.com/" description="" />
                  <Project title="Good Games" url="https://goodgames.com/" description="" />
              </Grid>
          </Container>
          <Container pt={16} pb={10} maxW={width} px={padding}>
              <Heading pb={2} fontFamily="Work Sans">
                  My Favorite Technologies ⭐️
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
          <Container pb={10} maxW={width} px={padding}>
              <Divider />
          </Container>
          <Container maxW={width} px={padding}>
              <Footer />
          </Container>
      </div>
  );
};