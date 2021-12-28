import React from "react";
import { Button, Flex, Container, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";
import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

/**
 * The properties of the Navbar component.
 * @interface NavbarProps
 */
interface NavbarProps {

    /**
     * The width of the Navbar.
     * @type {string}
     */
    width: string;

    /**
     * The padding of the Navbar.
     * @type {string}
     */
    padding: number;
}

/**
 * The component that represents the Navbar.
 * @param props The properties of the component
 */
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