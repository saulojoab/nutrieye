import { RecipePrediction } from "@/constants/AI";
import { ScrollView, Text, View } from "react-native";
import {
  IngredientContainer,
  Macro,
  MacrosContainer,
  RecipeIngredient,
  RecipeTitle,
} from "./Recipe.style";

export default function Recipe({ recipe }: { recipe: RecipePrediction }) {
  return (
    <View>
      <RecipeTitle key={`recipe-${recipe.name}`}>{recipe.name}</RecipeTitle>

      <ScrollView>
        {recipe.ingredients.map((ingredient) => (
          <IngredientContainer>
            <RecipeIngredient key={`${recipe.name}-${ingredient.name}`}>
              {ingredient.name} - {ingredient.amountInGrams}g
            </RecipeIngredient>
            <MacrosContainer>
              <Macro>{ingredient.macros.calories} kcal</Macro>
              <Macro>{ingredient.macros.protein}g protein</Macro>
              <Macro>{ingredient.macros.fat}g fat</Macro>
              <Macro>{ingredient.macros.carbs}g carbs</Macro>
            </MacrosContainer>
          </IngredientContainer>
        ))}
      </ScrollView>
    </View>
  );
}
