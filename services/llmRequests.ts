import {
  AIPromptConfig,
  foodPredictionSystemPrompt,
  RecipePrediction,
} from "@/constants/AI";
import { api } from "./api";

async function generate(config: AIPromptConfig) {
  try {
    const res = await api.post("api/generate", config);

    return JSON.parse(res.data.response) as RecipePrediction;
  } catch (e) {
    console.error(e);
  }
}

export default async function analyzeImage(image: string) {
  return generate({
    model: "llama3.2-vision",
    stream: false,
    prompt: "Identify the recipe depicted in the image provided by the user.",
    format: "json",
    images: [image],
    options: {
      temperature: 0,
    },
    system: foodPredictionSystemPrompt,
  });
}
