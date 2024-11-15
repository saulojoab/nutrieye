import { Text } from "react-native";
import RecentRecipes from "./RecentRecipes/RecentRecipes";
import SafeArea from "@/components/SafeArea";
import { NewImageButton } from "./Main.style";
import { Link } from "expo-router";
import { useMainService } from "./Main.service";

export default function MainScreen() {
  const { recipes, removeRecipe, onRefresh, refreshing } = useMainService();
  return (
    <SafeArea>
      {recipes.length > 0 && (
        <RecentRecipes
          onRefresh={onRefresh}
          refreshing={refreshing}
          removeRecipe={removeRecipe}
          recipes={recipes}
        />
      )}

      <Text>Main Screen</Text>

      <Link href="/foodCamera" asChild>
        <NewImageButton>
          <Text style={{ fontSize: 30 }}>+</Text>
        </NewImageButton>
      </Link>
    </SafeArea>
  );
}
