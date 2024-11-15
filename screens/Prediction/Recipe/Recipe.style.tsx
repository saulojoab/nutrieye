import styled from "styled-components/native";

export const RecipeTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const IngredientGrid = styled.View`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-height: 360px;
`;

export const IngredientContainer = styled.View`
  margin: 10px;
  border-width: 1px;
  border-color: white;
  background-color: white;
  padding: 15px;
  border-radius: 30px;
  flex: 1;
`;

export const RecipeIngredient = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const MacrosContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Macro = styled.Text`
  font-size: 14px;
  color: black;
`;

export const MacroTag = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  margin-right: 10px;
  width: max-content;
`;

export const MacroTagContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  overflow-x: visible;
`;
