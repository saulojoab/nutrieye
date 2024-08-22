import styled from "styled-components/native";
import { ILoadingSpacer } from "../Prediction.type";

export const LoadingSpacer = styled.View<ILoadingSpacer>`
  height: ${({ height }) => height || 8}px;
`;
