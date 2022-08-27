import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, toVarDefinition } from "@chakra-ui/react";

export default function Card({ item }) {
  const { rate, count } = item.rating;
  const { id, title, price, desciption, category, image } = item;

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
      <Image borderRadius="lg" objectFit="cover" src={image} alt={desciption} />

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
            {category}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box>
          {`$ ${price}`}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rate ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {desciption}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
