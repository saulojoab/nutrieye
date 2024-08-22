import { image } from "@/components/img";
import { ThemedText } from "@/components/ThemedText";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-native";

export default function Example() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <>
      <Button onPress={generateResponse} title="Generate" />
      {loading && <ThemedText type="defaultSemiBold">Loading...</ThemedText>}
      {response && <ThemedText type="defaultSemiBold">{response}</ThemedText>}
    </>
  );
}
