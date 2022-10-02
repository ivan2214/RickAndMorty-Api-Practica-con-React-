import { Button, ListItem, Menu, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ prev, next, onPrevius, onNext }) => {
  const handlePrevius = () => {
    onPrevius();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <Menu>
        <UnorderedList display="flex" gap="4">
          <ListItem listStyleType="none">
            {prev ? (
              <Button onClick={handlePrevius} colorScheme="blue" bg="blue.900" _hover={{bg:"blue.600"}}>
                Anterior
              </Button>
            ) : null}
          </ListItem>
          <ListItem listStyleType="none">
            {next ? (
              <Button onClick={handleNext} colorScheme="blue" bg="blue.900" _hover={{bg:"blue.600"}}>
                Siguiente
              </Button>
            ) : null}
          </ListItem>
        </UnorderedList>
      </Menu>
    </>
  );
};

export default Pagination;

