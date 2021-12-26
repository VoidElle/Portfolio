import React from "react";
import {
    Container,
    Heading,
    Flex,
    Badge
} from "@chakra-ui/react";

interface SkillsProps {
    padding: number,
    width: string
}

const Skills = ({ padding, width }: SkillsProps) => {
    return (
        <Container pt={16} maxW={width} px={padding}>
            <Heading fontFamily="Work Sans, sans-serif" mb={1}>
                My Skills 💪
            </Heading>
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
    );
};

export default Skills;