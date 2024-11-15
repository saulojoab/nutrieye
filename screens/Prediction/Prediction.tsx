import { Button, ScrollView, Text } from "react-native";
import { usePredictionService } from "./Prediction.service";
import {
  AddToListButton,
  ButtonContainer,
  Container,
  ContentContainer,
  HeaderImage,
  ImageContainer,
} from "./Prediction.style";
import PredictionLoader from "./Loader/Loader";
import Recipe from "./Recipe/Recipe";
import { mockRecipePrediction } from "@/constants/mocks";
import React from "react";

export default function PredictionScreen({ image }: { image: string }) {
  const imageBase64 = `data:image/jpeg;base64,${image}`;

  const { loading, prediction, addToLocalStorage } =
    usePredictionService(image);

  if (loading) {
    return <PredictionLoader image={imageBase64} />;
  }

  //const prediction = mockRecipePrediction;

  return (
    <Container>
      <ImageContainer>
        <HeaderImage source={{ uri: imageBase64 }} />
      </ImageContainer>

      {prediction && (
        <>
          <ContentContainer>
            <Recipe recipe={prediction} />
          </ContentContainer>

          <ButtonContainer>
            <AddToListButton onPress={() => addToLocalStorage(prediction)}>
              <Text>+ Add To List</Text>
            </AddToListButton>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
