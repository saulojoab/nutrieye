import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { IRecipesFromStorage } from "./Main.type";

export const useMainService = () => {
  const [recipes, setRecipes] = useState<IRecipesFromStorage[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const recipesFromStorage = await AsyncStorage.getItem("recipes");

    if (recipesFromStorage) {
      setRecipes(JSON.parse(recipesFromStorage));
      console.log(JSON.parse(recipesFromStorage));
    }
  }

  async function removeRecipe(recipe: IRecipesFromStorage) {
    const recipesFromStorage = await AsyncStorage.getItem("recipes");
    const recipes = recipesFromStorage ? JSON.parse(recipesFromStorage) : [];

    const newRecipes = recipes.filter(
      (item: IRecipesFromStorage) => item.image !== recipe.image
    );

    await AsyncStorage.setItem("recipes", JSON.stringify(newRecipes));
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getRecipes();
    setRefreshing(false);
  }, []);

  return {
    recipes,
    removeRecipe,
    onRefresh,
    refreshing,
  };
};
