import { Button, Flex, Container, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";
import { DownloadIcon } from "@chakra-ui/icons";

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
const Navbar = (props: NavbarProps): JSX.Element => {
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
                    <Link href="/cv.pdf" passHref={true}>
                        <a target={"_blank"}>
                            <Button variant="outline" size="sm" rightIcon={<DownloadIcon />} _hover={{ bg: "gray.800", color: "white" }}>
                                CV
                            </Button>
                        </a>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Navbar;