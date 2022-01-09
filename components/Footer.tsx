import { Container, Grid, Stack, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";

/**
 * The component that represents the footer.
 */
const Footer = (): JSX.Element => {
    return (
        <Container h={"20vh"} mb={16}>
            <Grid pt={8} templateColumns={"repeat(3, 1fr)"} textColor="gray.500">
                <Stack>
                    <StyledLink href="https://github.com/VoidElle">Github</StyledLink>
                </Stack>
                <Stack>
                    <Link href="/certifications" passHref>
                        <StyledLink>Certifications</StyledLink>
                    </Link>
                    <Link href="/contact" passHref>
                        <StyledLink>Contact</StyledLink>
                    </Link>
                </Stack>
                <Stack>
                    <StyledLink href="https://open.spotify.com/user/lucadelc">Spotify</StyledLink>
                </Stack>
            </Grid>
        </Container>
    );
};

export default Footer;