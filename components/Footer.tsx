import React from "react";
import {
    Container,
    Grid,
    Stack,
    Link as StyledLink
} from "@chakra-ui/react";

const Footer = (): JSX.Element => {
    return (
        <Container h={"20vh"} mb={16}>
            <Grid templateColumns={"repeat(3, 1fr)"} textColor="gray.500">
                <Stack>
                    <StyledLink href="https://www.instagram.com/luca.del.corona/" target="_blank">
                        Instagram
                    </StyledLink>
                </Stack>
                <Stack>
                    <StyledLink href="/certifications" passHref>
                        Certifications
                    </StyledLink>
                    <StyledLink href="https://github.com/VoidElle" target="_blank">
                        Github
                    </StyledLink>
                </Stack>
                <Stack>
                    <StyledLink href="https://open.spotify.com/user/lucadelc" target="_blank">
                        Spotify
                    </StyledLink>
                </Stack>
            </Grid>
        </Container>
    );
};

export default Footer;