import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

interface TechnologiesProps {
  items: string[];
}

const Technologies = (props: TechnologiesProps) => {
    return(
        <UnorderedList textColor="gray.500">
            {props.items.map((i: string) => {
                return(
                    <ListItem key={i} fontSize={{ base: "0.8em", md: "0.9em" }}>
                        {i}
                    </ListItem>
                );
            })}
        </UnorderedList>
    );
};

export default Technologies;