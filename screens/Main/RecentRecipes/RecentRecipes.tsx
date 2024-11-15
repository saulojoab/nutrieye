import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { IRecipesFromStorage } from "../Main.type";
import React from "react";
import FoodItem from "@/components/FoodItem/FoodItem";
import {
  Grid,
  GridItem,
  Subtitle,
  Title,
  TitleContainer,
} from "./RecentRecipes.style";
import { IRecentRecipes } from "./RecentRecipes.type";

export default function RecentRecipes({
  recipes,
  removeRecipe,
  onRefresh,
  refreshing,
}: IRecentRecipes) {
  return (
    <SafeAreaView>
      <TitleContainer>
        <Title>Recipes</Title>
        <Subtitle>Long press to delete.</Subtitle>
      </TitleContainer>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Grid>
          {recipes &&
            recipes.map((item: IRecipesFromStorage) => (
              <GridItem key={item.image}>
                <FoodItem removeRecipe={removeRecipe} recipe={item} />
              </GridItem>
            ))}
        </Grid>
      </ScrollView>
    </SafeAreaView>
  );
}
