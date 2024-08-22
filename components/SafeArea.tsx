import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export default SafeArea;
