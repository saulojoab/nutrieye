import SafeArea from "@/components/SafeArea";
import styled from "styled-components/native";
import { ILoadingSpacer } from "./Prediction.type";

export const Container = styled(SafeArea)`
  display: flex;
  flex-direction: column;
  background-color: black;
  flex: 1;
`;

export const ImageContainer = styled.View`
  flex: 0.4;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.View`
  padding: 20px;
  flex: 0.5;
  overflow-y: hidden;
`;

export const AddToListButton = styled.TouchableOpacity`
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 15px;
  margin-top: 10px;
  width: 200px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.1;
`;

export const ImageControls = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
`;
