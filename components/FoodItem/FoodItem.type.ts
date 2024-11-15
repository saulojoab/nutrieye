import { IRecipesFromStorage } from "@/screens/Main/Main.type";

export interface IFoodItem {
  recipe: IRecipesFromStorage;
  removeRecipe: (recipe: IRecipesFromStorage) => void;
}

export interface IFoodItemContainer {
  backgroundImage: string;
}
