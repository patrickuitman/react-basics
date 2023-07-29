import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  VStack,
  Tag,
  Grid,
} from "@chakra-ui/react";

const RecipePage = ({ recipe, onBackButtonClick }) => {
  return (
    <Box p={4}>
      <Button onClick={onBackButtonClick} mb={4} colorScheme="blue">
        {" "}
        Back
      </Button>
      <VStack spacing={4} align="center">
        <Image
          src={recipe.image}
          alt={recipe.label}
          h="300px"
          w="100%"
          objectFit="cover"
        />
        <Heading size="lg" textAlign="center">
          {recipe.mealType}
        </Heading>
        <Text fontWeight="bold" textAlign="center">
          {recipe.label}
        </Text>
        <Text textAlign="center">
          Total Cooking Time: {recipe.totalTime} mins
        </Text>
        <Text textAlign="center">Servings: {recipe.yield}</Text>
        <Heading size="md" textAlign="center">
          Ingredients:
        </Heading>
        <Box textAlign="center">
          {recipe.ingredientLines.map((ingredient, index) => (
            <Text key={index}>{ingredient}</Text>
          ))}
        </Box>

        <VStack align="start" textAlign="center" mt={8}>
          <Heading size="md">Total Nutrients:</Heading>
          <Text>
            Energy: {Math.ceil(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </Text>
          <Text>
            Protein: {Math.ceil(recipe.totalNutrients.PROCNT.quantity)}{" "}
            {recipe.totalNutrients.PROCNT.unit}
          </Text>
          <Text>
            Fat: {Math.ceil(recipe.totalNutrients.FAT.quantity)}{" "}
            {recipe.totalNutrients.FAT.unit}
          </Text>
          <Text>
            Carbs: {Math.ceil(recipe.totalNutrients.CHOCDF.quantity)}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </Text>
          <Text>
            Cholesterol: {Math.ceil(recipe.totalNutrients.CHOLE.quantity)}{" "}
            {recipe.totalNutrients.CHOLE.unit}
          </Text>
          <Text>
            Sodium: {Math.ceil(recipe.totalNutrients.NA.quantity)}{" "}
            {recipe.totalNutrients.NA.unit}
          </Text>
        </VStack>

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          width="100%"
          textAlign="left"
          mt={8}
        >
          <Box>
            <Heading size="md">Health Labels:</Heading>
            {recipe.healthLabels.map((label) => (
              <Tag
                key={label}
                colorScheme="purple"
                size="sm"
                variant="subtle"
                mb="1"
              >
                {label}
              </Tag>
            ))}
          </Box>
          <Box>
            <Heading size="md">Diet:</Heading>
            {recipe.dietLabels.map((label) => (
              <Tag
                key={label}
                colorScheme="green"
                size="sm"
                variant="subtle"
                mb="1"
              >
                {label}
              </Tag>
            ))}
          </Box>
          <Box>
            <Heading size="md">Cautions:</Heading>
            {recipe.cautions.map((caution) => (
              <Tag
                key={caution}
                colorScheme="red"
                size="sm"
                variant="subtle"
                mb="1"
              >
                {caution}
              </Tag>
            ))}
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};

export default RecipePage;
