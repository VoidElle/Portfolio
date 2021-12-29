import { Flex, Text, Heading, Image, Grid } from "@chakra-ui/react";

/**
 * The properties of the technology component.
 * @interface TechnologyProps
 */
interface TechnologyProps {

    /**
     * The source of the image of the technology.
     * @type {string}
     */
    src: string;

    /**
     * The title of the technology.
     * @type {string}
     */
    title: string;

    /**
     * The alt of the image of the technology.
     * @type {string}
     */
    alt: string;

    /**
     * The description of the technology.
     * @type {string}
     */
    description: string;
}

/**
 * The component that represents a Technology.
 * @param props The properties of the component
 */
const Technology = (props: TechnologyProps) => {
    return (
        <Grid bgColor={"gray.100"} p={3} rounded="md" gap={3} placeItems="stretch" templateColumns={props.src ? "1fr 5fr" : "1fr"}>
            {
                props.src && (
                    <Image w={16} borderRadius="30px" bgColor={"gray.200"} h={16} p={2} src={props.src} alt={props.alt} />
                )
            }
            <Flex flexDir="column">
                <Heading fontSize="xl" textColor={"gray.700"} fontWeight="bold">
                    {props.title}
                </Heading>
                <Text fontSize="md">
                    {props.description}
                </Text>
            </Flex>
        </Grid>
    );
};

export default Technology;