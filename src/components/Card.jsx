import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Text, toVarDefinition } from "@chakra-ui/react";

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

      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        p="6"
        flexDirection="column"
      
      >
        <Text
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          color="whiteAlpha.900"
        >
          {gender}
        </Text>

        <Text
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          color="whiteAlpha.900"
        >
          {name}
        </Text>

        {status ? (
          <Badge variant="solid" colorScheme="green">
            Success
          </Badge>
        ) : (
          <Badge variant="solid" colorScheme="red">
            died
          </Badge>
        )}
      </Box>
    </Box>
  );
}
