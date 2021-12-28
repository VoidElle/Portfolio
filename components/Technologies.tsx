import React from "react";
import { Grid } from "@chakra-ui/react";
import Technology from "./Technology";

interface TechnologiesProps {
  items: Technology[];
}

interface Technology {
    name: string;
    src: string;
    description: string;
    alt: string;
}

const Technologies = (props: TechnologiesProps) => {
    return (
        <Grid templateColumns={{ base: "1fr", md: "50% 50%" }} gap={2} mt={2} textColor="gray.500">
            {
                props.items.map((i: Technology) => {
                    return (
                        <Technology title={i.name} key={i.name} src={i.src} description={i.description} alt={i.alt} />
                    );
                })
            }
        </Grid>
    );
};

export default Technologies;