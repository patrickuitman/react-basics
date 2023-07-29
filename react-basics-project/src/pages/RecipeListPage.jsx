import React, { useState } from "react";
import { data } from "../utils/data";
import { Box, Heading, SimpleGrid, Input, Flex } from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/RecipeCard";

const RecipeListPage = ({ onRecipeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const recipes = data.hits;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Heading>Recipes</Heading>
      </Flex>
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Input
          placeholder="Search recipes"
          value={searchTerm}
          onChange={handleSearchChange}
          w="100%"
          maxW="400px"
        />
      </Flex>
      <SimpleGrid columns={[1, 2, 3, 4]} gap={2}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            onClick={() => onRecipeClick(recipe.recipe)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecipeListPage;
