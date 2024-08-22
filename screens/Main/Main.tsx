import { Text } from "react-native";
import RecentRecipes from "./RecentRecipes/RecentRecipes";
import SafeArea from "@/components/SafeArea";
import { NewImageButton } from "./Main.style";
import { Link } from "expo-router";

export default function MainScreen() {
  return (
    <SafeArea style={{ backgroundColor: "red" }}>
      <RecentRecipes />
      <Text>Main Screen</Text>

      <Link href="/foodCamera" asChild>
        <NewImageButton>
          <Text style={{ fontSize: 30 }}>+</Text>
        </NewImageButton>
      </Link>
    </SafeArea>
  );
}
