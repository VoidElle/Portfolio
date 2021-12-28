import { Stack, Heading, Text, Link, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

/**
 * The properties of a project component.
 * @interface ProjectProps
 */
interface ProjectProps {

    /**
     * The image of the project.
     * @type {string}
     */
    image: string;

    /**
     * The url of the project.
     * @type {string}
     */
    url: string;

    /**
     * The title of the project.
     * @type {string}
     */
    title: string;

    /**
     * The description of the project.
     * @type {string}
     */
    description: string;
}

/**
 * The component that represents a Project.
 * @param props The properties of the component
 */
const Project = (props: ProjectProps) => {

    const border = useColorModeValue("gray.300", "gray.600")

    return (
        <Stack borderWidth="0px" borderColor={border} p={2} rounded="md" pb={6} minHeight={28}>
            {
                props.image && (
                    <Image borderRadius="md" className="" src={props.image} alt={props.title} />
                )
            }
            <Heading pt={1} fontWeight="regular" fontSize={{ base: "0.9em", md: "1em" }}>
                {
                    props.url ? (
                        <Link href={props.url} target="_blank" rel="noreferrer">
                            {props.title}
                        </Link>
                    ) : (
                        props.title
                    )
                }
            </Heading>
            <Text textColor="gray.500" fontSize={{ base: "0.8em", md: "0.9em" }}>
                {props.description}
            </Text>
        </Stack>
    );
};

export default Project;