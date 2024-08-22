import { Text } from "react-native";
import { usePredictionService } from "./Prediction.service";
import { Container, ContentContainer, HeaderImage } from "./Prediction.style";
import PredictionLoader from "./Loader/Loader";
import Recipe from "./Recipe/Recipe";
import { mockRecipePrediction } from "@/constants/mocks";

export default function PredictionScreen({ image }: { image: string }) {
  const imageBase64 = `data:image/jpeg;base64,${image}`;

  const { loading, prediction } = usePredictionService(image);

  if (loading) {
    return <PredictionLoader image={imageBase64} />;
  }

  //const prediction = [mockRecipePrediction];

  return (
    <Container>
      <HeaderImage source={{ uri: imageBase64 }} />
      <Text>Prediction</Text>
      <ContentContainer>
        {prediction?.map((item) => (
          <Recipe key={item.name} recipe={item} />
        ))}
      </ContentContainer>
    </Container>
  );
}
