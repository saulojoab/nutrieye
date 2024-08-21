import { Image, StyleSheet, Platform, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import axios from "axios";
import { useState } from "react";
import { image } from "@/components/img";

export default function HomeScreen() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  interface AIPromptConfig {
    model: string;
    stream: boolean;
    prompt: string;
    format?: "json";
    system?: string;
    images?: string[];
  }
  async function generate(config: AIPromptConfig) {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://192.168.0.24:11434/api/generate",
        config
      );

      console.log(res.data.response);
      setResponse(JSON.parse(res.data.response).text);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }

  function generateResponse() {
    generate({
      model: "llava",
      stream: false,
      prompt:
        "what do you see in this image? Respond using JSON, in a property called text. For example, {text: 'I see a cat.'}. If you don't follow this format, the app will break.",
      format: "json",
      images: [image],
    });
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome, no.</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>

        <Button onPress={generateResponse} title="Generate" />
        {loading && <ThemedText type="defaultSemiBold">Loading...</ThemedText>}
        {response && <ThemedText type="defaultSemiBold">{response}</ThemedText>}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
