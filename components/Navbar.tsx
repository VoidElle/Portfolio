import React from "react";
import { Button, Flex, Container, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";
import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

interface NavbarProps {
    width: string;
    padding: number;
}

const Navbar = (props: NavbarProps) => {

    const { toggleColorMode } = useColorMode();

    return (
        <Container pt={{ base: "12", md: "28" }} maxW={props.width || "90ch"} px={props.padding || 6}>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                    <Link href="/" passHref>
                        <StyledLink textColor="gray.600" pr={2}>
                            Home
                        </StyledLink>
                    </Link>
                    <Link href="/certifications" passHref>
                        <StyledLink textColor="gray.600" px={2}>
                            Certifications
                        </StyledLink>
                    </Link>
                    <Link href="/contacts" passHref>
                        <StyledLink textColor="gray.600" px={2}>
                            Contacts
                        </StyledLink>
                    </Link>
                </Flex>
                <Flex>
                    <Button variant="solid" w={4} onClick={toggleColorMode} outlineColor="transparent">
                        <SunIcon />
                    </Button>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Navbar;