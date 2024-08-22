import { getLocales } from "expo-localization";

export interface AIPromptConfig {
  model: string;
  stream: boolean;
  prompt: string;
  format?: "json";
  system?: string;
  images?: string[];
}

export interface RecipePrediction {
  name: string;
  ingredients: Ingredients[];
}

interface Ingredients {
  name: string;
  amountInGrams: number;
  macros: Macros;
}

interface Macros {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

///const deviceLanguage = getLocales()[0].languageCode;

//console.log(deviceLanguage);

export const foodPredictionSystemPrompt = `You are an API for a mobile application that analyzes images of food. Your task is to predict the recipe depicted in the image provided by the user. You must return the prediction in the form of a JSON array, with two predictions, strictly following this format:

[
  {
    "name": "string", // The name of the recipe
    "ingredients": [
      {
        "name": "string", // The name of the ingredient
        "amountInGrams": number, // The amount of the ingredient in grams
        "macros": {
          "calories": number, // Caloric content of the ingredient
          "protein": number, // Protein content in grams
          "fat": number, // Fat content in grams
          "carbs": number // Carbohydrate content in grams
        }
      }
    ]
  },
  ...
]

If you cannot predict the recipe, respond with an empty array []. Do not include any additional text or explanations, only return the JSON array in the specified format. Make sure the recipe and ingredients names are in Brazilian Portuguese.
`;
