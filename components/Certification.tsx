import React from "react";
import {Stack, Heading, Text, Image, Link} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface CertificationProps {
    title: string;
    src: string;
    text: string;
    href: string;
}

const Certification = (props: CertificationProps) => {

    const border = useColorModeValue("gray.300", "gray.600");

    return(
        <Stack rounded="md" borderWidth="2px" borderColor={border}>
            <Image roundedTop="md" src={props.src} h={40} w={"full"} objectFit={"cover"} alt="Certification Image"/>
            <Stack px={4} pb={4} pt={2}>
                <Heading fontWeight="regular" fontSize={{ base: "0.9em", md: "1em" }}>
                    <Link href={props.href}>
                        {props.title}
                    </Link>
                </Heading>
                <Text fontWeight="regular" fontSize={{ base: "0.8em", md: "0.9em" }}>
                    {props.text}
                </Text>
            </Stack>
        </Stack>
    );
};

export default Certification;