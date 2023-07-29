import React from "react";
import { Box, Image, Stack, Heading, Text, Tag } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  const isVegetarian = recipe.healthLabels.includes("Vegetarian");
  const isVegan = recipe.healthLabels.includes("Vegan");

  return (
    <Box
      borderRadius="xl"
      width="100%"
      height="36rem"
      onClick={() => onClick(recipe)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)", boxShadow: "md" }}
      mt={4}
      p={4}
      bg="white"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <Image
        h={64}
        w="100%"
        src={recipe.image}
        borderRadius="xl"
        objectFit="cover"
      />
      <Stack mt="6" spacing="2">
        <Text fontWeight="bold">
          {recipe.mealType === "Lunch/Dinner"
            ? "LUNCH/DINNER"
            : recipe.mealType}
        </Text>
        <Heading size="md" mb="2">
          {recipe.label}
        </Heading>
        {isVegetarian && (
          <Tag size="sm" variant="subtle" mb="1" colorScheme="purple">
            Vegetarian
          </Tag>
        )}
        {isVegan && (
          <Tag size="sm" variant="subtle" mb="1" colorScheme="purple">
            Vegan
          </Tag>
        )}
        {recipe.dietLabels.map((label) => (
          <Tag key={label} colorScheme="green" size="md" variant="subtle">
            {label}
          </Tag>
        ))}
        {recipe.cautions.map((caution) => (
          <Tag key={caution} colorScheme="red" size="md" variant="subtle">
            {caution}
          </Tag>
        ))}
        <Text>Dish: {recipe.dishType}</Text>
      </Stack>
    </Box>
  );
};

export default RecipeCard;
