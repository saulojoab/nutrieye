import styled from "styled-components/native";
import { IFoodItemContainer } from "./FoodItem.type";

export const FoodItemContainer = styled.TouchableOpacity<IFoodItemContainer>`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  height: 200px;
`;

export const FoodItemBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const FoodItemTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const FoodItemKcal = styled.Text`
  color: white;
  font-size: 14px;
`;

export const FoodItemOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
