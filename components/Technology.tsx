import { Flex, Text, Heading, Image, Grid } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

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

    const bg = useColorModeValue("gray.100", "gray.700");
    const text = useColorModeValue("gray.700", "gray.400");
    const imagebg = useColorModeValue("gray.200", "gray.600");

    return (
        <Grid bgColor={bg} p={3} rounded="md" gap={3} placeItems="stretch" templateColumns={props.src ? "1fr 5fr" : "1fr"}>
            {
                props.src && (
                    <Image w={16} borderRadius="30px" bgColor={imagebg} h={16} p={2} src={props.src} alt={props.alt} />
                )
            }
            <Flex flexDir="column">
                <Heading fontSize="xl" textColor={text} fontWeight="bold">
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