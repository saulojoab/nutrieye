import { Text } from "react-native";
import { usePredictionService } from "./Prediction.service";
import {
  AddToListButton,
  ButtonContainer,
  Container,
  ContentContainer,
  HeaderImage,
  ImageContainer,
  ImageControls,
} from "./Prediction.style";
import PredictionLoader from "./Loader/Loader";
import Recipe from "./Recipe/Recipe";
import { mockRecipePrediction } from "@/constants/mocks";
import React from "react";

export default function PredictionScreen({ image }: { image: string }) {
  const imageBase64 = `data:image/jpeg;base64,${image}`;

  const { loading, prediction, addToLocalStorage, goToHome } =
    usePredictionService(image);

  if (loading) {
    return <PredictionLoader image={imageBase64} />;
  }

  //const prediction = mockRecipePrediction;

  const hasPrediction = prediction?.name !== "";

  return (
    <Container>
      <ImageContainer>
        <HeaderImage source={{ uri: imageBase64 }} />
        <ImageControls>
          <AddToListButton style={{ width: 80 }} onPress={goToHome}>
            <Text>Back</Text>
          </AddToListButton>
        </ImageControls>
      </ImageContainer>

      {prediction && (
        <>
          <ContentContainer>
            {!hasPrediction ? (
              <Text style={{ color: "white" }}>
                Sorry, we couldn't find a recipe for this image. Make sure that
                it displays the food as clearly as possible.
              </Text>
            ) : (
              <Recipe recipe={prediction} />
            )}
          </ContentContainer>

          {hasPrediction && (
            <ButtonContainer>
              <AddToListButton onPress={() => addToLocalStorage(prediction)}>
                <Text>+ Add To List</Text>
              </AddToListButton>
            </ButtonContainer>
          )}
        </>
      )}
    </Container>
  );
}
