import React, { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { Box, ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      blue: "#467FC2",
    },
  },
});

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackButtonClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.blue" minH="100vh">
        <CSSReset />
        <Box bg="white" p={4}>
          {selectedRecipe ? (
            <RecipePage
              recipe={selectedRecipe}
              onBackButtonClick={handleBackButtonClick}
            />
          ) : (
            <RecipeListPage onRecipeClick={handleRecipeClick} />
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
