import { RecipePrediction } from "./AI";

export const mockIngredients = [
  {
    name: "Ingredient 1",
    amountInGrams: 100,
    macros: {
      calories: 200,
      protein: 10,
      fat: 5,
      carbs: 20,
    },
  },
  {
    name: "Ingredient 2",
    amountInGrams: 50,
    macros: {
      calories: 100,
      protein: 5,
      fat: 2.5,
      carbs: 10,
    },
  },
  {
    name: "Ingredient 2",
    amountInGrams: 50,
    macros: {
      calories: 100,
      protein: 5,
      fat: 2.5,
      carbs: 10,
    },
  },
  {
    name: "Ingredient 2",
    amountInGrams: 50,
    macros: {
      calories: 100,
      protein: 5,
      fat: 2.5,
      carbs: 10,
    },
  },
  {
    name: "Ingredient 2",
    amountInGrams: 50,
    macros: {
      calories: 100,
      protein: 5,
      fat: 2.5,
      carbs: 10,
    },
  },
];

export const mockRecipePrediction: RecipePrediction = {
  name: "Recipe 1",
  ingredients: mockIngredients,
};
