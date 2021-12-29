import { Container, Heading, Flex, Badge } from "@chakra-ui/react";
import skills from "../data/skills.json";

/**
 * The properties of a skill component.
 * @interface SkillsProps
 */
interface SkillsProps {

    /**
     * The padding of the skill
     * @type {number}
     */
    padding: number;

    /**
     * The width of the skill
     * @type {string}
     */
    width: string;
}

/**
 * The interface of a Skill.
 * @interface Skill
 */
interface Skill {

    /**
     * The name of the skill.
     * @type {string}
     */
    name: string;

    /**
     * The color of the skill.
     * @type {number}
     */
    color: string;
}

/**
 * The component that represents a Skill.
 * @param props The properties of the component
 */
const Skills = (props: SkillsProps) => {
    return (
        <Container pt={16} maxW={props.width} px={props.padding}>
            <Heading fontFamily="Work Sans, sans-serif" mb={1}>
                My Skills 💪
            </Heading>
            <Flex justifyContent="start" alignItems="center" direction="row" wrap="wrap" gap={4}>
                {
                    skills.list.map((i: Skill) => {
                        return(
                            <Badge key={i.name} mx={1} my={1} fontSize={{ base: '0.9em', md: '1em' }} colorScheme={i.color}>{i.name}</Badge>
                        );
                    })
                }
            </Flex>
        </Container>
    );
};

export default Skills;