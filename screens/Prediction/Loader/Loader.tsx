import { Skeleton } from "moti/skeleton";
import {
  Container,
  ContentContainer,
  HeaderImage,
  ImageContainer,
} from "../Prediction.style";
import { LoadingSpacer } from "./Loader.style";
import { IPredictionLoader } from "./Loader.type";

export default function PredictionLoader({ image }: IPredictionLoader) {
  return (
    <Container>
      <ImageContainer>
        <HeaderImage source={{ uri: image }} />
      </ImageContainer>
      <ContentContainer>
        <LoadingSpacer height={20} />
        <Skeleton colorMode="dark" width={250} height={60} />
        <LoadingSpacer height={50} />
        <Skeleton colorMode="dark" width={"100%"} height={40} />
        <LoadingSpacer height={10} />
        <Skeleton colorMode="dark" width={"100%"} height={40} />
        <LoadingSpacer height={10} />
        <Skeleton colorMode="dark" width={"100%"} height={40} />
        <LoadingSpacer height={10} />
        <Skeleton colorMode="dark" width={"100%"} height={40} />
      </ContentContainer>
    </Container>
  );
}
