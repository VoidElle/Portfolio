import React from "react";
import { Grid } from "@chakra-ui/react";
import Technology from "./Technology";

/**
 * The properties of the technologies component.
 * @interface TechnologiesProps
 */
interface TechnologiesProps {

    /**
     * The technologies to display.
     * @type {Technology[]}
     */
    items: Technology[];
}

/**
 * The Technology interface.
 * @interface Technology
 */
interface Technology {


    /**
     * The name of the technology.
     * @type {string}
     */
    name: string;

    /**
     * The source of the image of the technology.
     * @type {string}
     */
    src: string;

    /**
     * The description of the technology.
     * @type {string}
     */
    description: string;

    /**
     * The alt of the image of the technology.
     * @type {string}
     */
    alt: string;
}

/**
 * The component that represents the Technologies.
 * @param props The properties of the component
 */
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