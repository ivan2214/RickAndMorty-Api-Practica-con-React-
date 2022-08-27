import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, toVarDefinition } from "@chakra-ui/react";

export default function Card({ item }) {
  const { nameOrigin, urlOrigin } = item.origin;
  const { nameLocation, urlLocation } = item.location;
  const episodios = item.episode;
  const { id, name, status, species, type, gender, image, url, created } = item;

  return (
    <Box
      width="30%"
      display="flex"
      flexWrap="wrap"
      justifyContent={"center"}
      alignItems="center"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image borderRadius="lg" objectFit="cover" src={image} alt={species} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {gender}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {name}
        </Box>

        <Box>
          {`$ ${status}`}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
}
