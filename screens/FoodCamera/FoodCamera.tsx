import SafeArea from "@/components/SafeArea";
import { ActivityIndicator, Button, Text } from "react-native";
import { useFoodCameraService } from "./FoodCamera.service";
import {
  Container,
  FlipCameraButton,
  ShutterButon,
  StyledCameraView,
} from "./FoodCamera.style";

export default function FoodCameraScreen() {
  const {
    facing,
    permission,
    requestPermission,
    toggleCameraFacing,
    onCameraReady,
    isCameraReady,
    cameraRef,
    takePicture,
  } = useFoodCameraService();

  if (!permission) {
    // Camera permissions are still loading.
    return (
      <SafeArea
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator />
      </SafeArea>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <SafeArea>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </SafeArea>
    );
  }

  return (
    <Container>
      <StyledCameraView
        facing={facing}
        onCameraReady={onCameraReady}
        ref={cameraRef}
      >
        {isCameraReady && (
          <>
            <FlipCameraButton onPress={toggleCameraFacing}>
              <Text>Flip Camera</Text>
            </FlipCameraButton>
            <ShutterButon onPress={takePicture}>
              <Text>Take Picture</Text>
            </ShutterButon>
          </>
        )}
      </StyledCameraView>
    </Container>
  );
}
