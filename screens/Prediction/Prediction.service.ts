import { RecipePrediction } from "@/constants/AI";
import analyzeImage from "@/services/llmRequests";
import { useEffect, useState } from "react";

export const usePredictionService = (image: string) => {
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState<RecipePrediction[]>();

  async function getImagePrediction() {
    setLoading(true);
    const response = await analyzeImage(image);

    console.log(response);

    if (response) {
      setPrediction(response);
    }

    setLoading(false);
  }

  useEffect(() => {
    getImagePrediction();
  }, []);

  return {
    loading,
    prediction,
  };
};
