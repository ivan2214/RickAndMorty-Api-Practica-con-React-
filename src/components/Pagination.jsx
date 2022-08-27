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
              <Button onClick={handlePrevius} colorScheme="blue">
                Anterior
              </Button>
            ) : null}
          </ListItem>
          <ListItem listStyleType="none">
            {next ? (
              <Button onClick={handleNext} colorScheme="blue">
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

