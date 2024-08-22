import { CameraView } from "expo-camera";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const StyledCameraView = styled(CameraView)`
  flex: 1;
`;

export const FlipCameraButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: ${(StatusBar.currentHeight ?? 0) + 20}px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

export const ShutterButon = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;
