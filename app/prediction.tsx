import PredictionScreen from "@/screens/Prediction/Prediction";
import { useLocalSearchParams } from "expo-router";

export default function Prediction() {
  const { image } = useLocalSearchParams();

  return <PredictionScreen image={image as string} />;
}
