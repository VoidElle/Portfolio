import Head from "next/head";
import Image from "next/image";
import { Container, Heading, Text, Grid, UnorderedList, ListItem, Divider } from "@chakra-ui/react";
import Project from "../components/Project";

export default function Home() {
  return(
      <>
        <Container pt={32}>
            <Heading fontFamily="Work Sans">
                Hi, I&apos;m Luca Del Corona 👋
            </Heading>
            <Text textColor="gray.500">
                I&apos;m a full stack developer. Currently specialized in mobile development.
                Check out my projects below!
            </Text>
        </Container>
        <Container pt={16}>
            <Heading fontFamily="Work Sans">
                About me
            </Heading>
            <Text textColor="gray.500" fontSize={{ base: "0.8em", md: "0.9md" }}>
                I&apos;m a full stack developer with a passion for learning new technologies.
                I&apos;m currently working on a project called <a href="https://www.lucadelcorona.com">lucadelcorona.com</a>
                where I&apos;m building a website for a local business.
            </Text>
            <br />
            <Text textColor="gray.500" fontSize={{ base: "0.8em", md: "0.9md" }}>
                I spend my free time riding my bike and listening to music.
                I&apos;m currently planning to expand my garage :)
            </Text>
        </Container>
        <Container pt={16}>
            <Heading fontFamily="Work Sans" mb={3}>
                My Projects
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Project title="Tap It!" description="" />
                <Project title="EasyTickets" description="" />
                <Project title="Good Games" description="" />
            </Grid>
        </Container>
        <Container pt={16} pb={10}>
            <Heading fontFamily="Work Sans">
                My Favorite Technologies
            </Heading>
            <UnorderedList textColor="gray.500">
                <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                    Next.js
                </ListItem>
                <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                    MongoDB
                </ListItem>
                <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                    React
                </ListItem>
                <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                    Tailwind CSS
                </ListItem>
                <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                    Chakra UI
                </ListItem>
            </UnorderedList>
        </Container>
        <Container pb={10}>
            <Divider />
        </Container>
      </>
  );
};