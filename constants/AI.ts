import { getLocales } from "expo-localization";

export interface AIPromptConfig {
  model: string;
  stream: boolean;
  prompt?: string;
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

export const foodPredictionSystemPrompt = `You are an API for a mobile application that analyzes images of food. 
Your task is to identify the recipe depicted in the image provided by the user, like an expert in the food and nutritional domain. 
Only identify the food, ignore any other background distractions.
If possible, give two suggestions for the recipe.
You must return the recipes in the form of a JSON array, strictly following this format:

RESPONSE FORMAT:
[
  {
    "name": string, // The name of the recipe
    "ingredients": [
      {
        "name": string, // The name of the ingredient
        "amountInGrams": number, // The amount of the ingredient in grams
        "macros": {
          "calories": number, // Caloric content of the ingredient
          "protein": number, // Protein content in grams
          "fat": number, // Fat content in grams
          "carbs": number // Carbohydrate content in grams
        }
      }
    ]
  }
]

Do not include any additional text or explanations, only return the JSON array in the specified format.
In case the image does not depict food, return an empty array.
Make sure the JSON is valid, and the keys are in the correct order.
`;
