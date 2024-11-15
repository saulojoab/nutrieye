import { RecipePrediction } from "@/constants/AI";
import analyzeImage from "@/services/llmRequests";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export const usePredictionService = (image: string) => {
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState<RecipePrediction>();

  const { navigate } = useNavigation();

  async function getImagePrediction() {
    setLoading(true);
    const response = await analyzeImage(image);

    if (response) {
      setPrediction(response);
    }

    setLoading(false);
  }

  async function addToLocalStorage(recipe: RecipePrediction) {
    console.log("hello list");
    const storageRecipes = await AsyncStorage.getItem("recipes");

    console.log("image", image);

    const filename = `${FileSystem.documentDirectory}${
      recipe.name
    }-${new Date().toISOString()}.png`;

    await FileSystem.writeAsStringAsync(filename, image, {
      encoding: FileSystem.EncodingType.Base64,
    });

    console.log("should be in FS", filename);

    try {
      await MediaLibrary.saveToLibraryAsync(filename);
    } catch (e) {
      console.error(e);
    }

    console.log("should be saved");

    if (storageRecipes) {
      const recipes = JSON.parse(storageRecipes) ?? [];

      recipes.push({ recipe, image: filename, date: new Date() });
      await AsyncStorage.setItem("recipes", JSON.stringify(recipes));
      navigate("(tabs)" as never);
      return;
    }

    await AsyncStorage.setItem(
      "recipes",
      JSON.stringify([{ recipe, image: filename, date: new Date() }])
    );
    navigate("(tabs)" as never);
  }

  useEffect(() => {
    getImagePrediction();
  }, []);

  return {
    loading,
    prediction,
    addToLocalStorage,
  };
};
