import SafeArea from "@/components/SafeArea";
import styled from "styled-components/native";
import { ILoadingSpacer } from "./Prediction.type";

export const Container = styled(SafeArea)`
  background-color: black;
`;

export const HeaderImage = styled.Image`
  width: "100%";
  height: 350px;
`;

export const ContentContainer = styled.View`
  padding: 20px;
`;
