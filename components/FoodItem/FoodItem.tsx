import {
  FoodItemBackground,
  FoodItemContainer,
  FoodItemKcal,
  FoodItemOverlay,
  FoodItemTitle,
} from "./FoodItem.styles";
import { IFoodItem } from "./FoodItem.type";

export default function FoodItem({ recipe, removeRecipe }: IFoodItem) {
  const calories = recipe.recipe.ingredients
    .reduce((total, ingredient) => total + ingredient.macros.calories, 0)
    .toFixed(1);

  return (
    <FoodItemContainer
      backgroundImage={recipe.image}
      onLongPress={() => removeRecipe(recipe)}
    >
      <FoodItemBackground src={recipe.image} resizeMode="cover" />

      <FoodItemOverlay>
        <FoodItemTitle>{recipe.recipe.name}</FoodItemTitle>
        <FoodItemKcal>{calories} kcal</FoodItemKcal>
      </FoodItemOverlay>
    </FoodItemContainer>
  );
}
