import SafeArea from "@/components/SafeArea";
import { Image, Text } from "react-native";
import { usePredictionService } from "./Prediction.service";

export default function PredictionScreen({ image }: { image: string }) {
  const imageBase64 = `data:image/jpeg;base64,${image}`;

  const { loading, prediction } = usePredictionService(image);

  if (loading) {
    return (
      <SafeArea style={{ backgroundColor: "white" }}>
        <Image
          source={{ uri: imageBase64 }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Loading...</Text>
      </SafeArea>
    );
  }

  return (
    <SafeArea style={{ backgroundColor: "white" }}>
      <Text>Prediction</Text>
      <Image
        source={{ uri: imageBase64 }}
        style={{ width: 200, height: 200 }}
      />
      {prediction?.map((item) => (
        <>
          <Text key={item.name}>{item.name}</Text>
          {item.ingredients.map((ingredient) => (
            <Text key={ingredient.name}>
              {ingredient.name} - {ingredient.amountInGrams}g
            </Text>
          ))}
        </>
      ))}
    </SafeArea>
  );
}
