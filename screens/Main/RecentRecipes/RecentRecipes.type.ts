import { IRecipesFromStorage } from "../Main.type";

export interface IRecentRecipes {
  recipes: IRecipesFromStorage[];
  removeRecipe: (recipe: IRecipesFromStorage) => void;
  onRefresh: () => void;
  refreshing: boolean;
}
