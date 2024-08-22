import {
  AIPromptConfig,
  foodPredictionSystemPrompt,
  RecipePrediction,
} from "@/constants/AI";
import { api } from "./api";

async function generate(config: AIPromptConfig) {
  try {
    const res = await api.post("api/generate", config);

    console.log(res.data);
    console.log(JSON.parse(res.data.response));

    return [JSON.parse(res.data.response)] as RecipePrediction[];
  } catch (e) {
    console.error(e);
  }
}

export default async function analyzeImage(image: string) {
  return generate({
    model: "llava:13b",
    stream: false,
    prompt: "Identify the recipe depicted in the image provided by the user.",
    format: "json",
    images: [image],
    system: foodPredictionSystemPrompt,
  });
}
