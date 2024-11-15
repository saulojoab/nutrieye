import { RecipePrediction } from "@/constants/AI";

export interface IRecipesFromStorage {
  date: string;
  recipe: RecipePrediction;
  image: string;
}
