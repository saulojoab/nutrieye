import {
  AIPromptConfig,
  foodPredictionSystemPrompt,
  RecipePrediction,
} from "@/constants/AI";
import { api } from "./api";

async function generate(config: AIPromptConfig) {
  try {
    const res = await api.post("api/generate", config);

    console.log(JSON.parse(res.data.response));

    return [JSON.parse(res.data.response)] as RecipePrediction[];
  } catch (e) {
    console.error(e);
  }
}

export default async function analyzeImage(image: string) {
  return generate({
    model: "llava",
    stream: false,
    prompt: "Analyze the following image.",
    format: "json",
    images: [image],
    system: foodPredictionSystemPrompt,
  });
}
