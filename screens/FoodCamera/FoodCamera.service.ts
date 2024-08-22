import Camera, {
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

export const useFoodCameraService = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const router = useRouter();

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    const image = await cameraRef.current?.takePictureAsync({
      base64: true,
      quality: 0.3,
    });

    router.push({ pathname: "/prediction", params: { image: image?.base64 } });
  }

  function onCameraReady() {
    setIsCameraReady(true);
  }

  return {
    facing,
    toggleCameraFacing,
    permission,
    requestPermission,
    onCameraReady,
    isCameraReady,
    cameraRef,
    takePicture,
  };
};
