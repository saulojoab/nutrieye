import { RecipePrediction } from "@/constants/AI";
import { FlatList, ScrollView, Text, View } from "react-native";
import {
  IngredientContainer,
  IngredientGrid,
  Macro,
  MacrosContainer,
  MacroTag,
  MacroTagContainer,
  RecipeIngredient,
  RecipeTitle,
} from "./Recipe.style";

export default function Recipe({ recipe }: { recipe: RecipePrediction }) {
  const totalMacros = recipe.ingredients.reduce(
    (acc, ingredient) => {
      acc.calories += ingredient.macros.calories;
      acc.protein += ingredient.macros.protein;
      acc.fat += ingredient.macros.fat;
      acc.carbs += ingredient.macros.carbs;
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return (
    <View>
      <RecipeTitle key={`recipe-${recipe.name}`}>{recipe.name}</RecipeTitle>
      {totalMacros && (
        <MacroTagContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <MacroTag>
              <Macro>{totalMacros.calories.toFixed(1)} kcal</Macro>
            </MacroTag>
            <MacroTag>
              <Macro>{totalMacros.protein.toFixed(1)}g protein</Macro>
            </MacroTag>
            <MacroTag>
              <Macro>{totalMacros.fat.toFixed(1)}g fat</Macro>
            </MacroTag>
            <MacroTag>
              <Macro>{totalMacros.carbs.toFixed(1)}g carbs</Macro>
            </MacroTag>
          </ScrollView>
        </MacroTagContainer>
      )}

      <IngredientGrid>
        <FlatList
          data={recipe.ingredients}
          numColumns={2}
          renderItem={({ item: ingredient }) => (
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
          )}
        />
      </IngredientGrid>
    </View>
  );
}
