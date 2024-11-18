import styled from "styled-components/native";
import Constants from "expo-constants";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export default SafeArea;
