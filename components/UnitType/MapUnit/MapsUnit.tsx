import React from "react";
import WhyComponent from "../../HomePage/WhyComponent/WhyComponent";
import { Container, Text, TextCluster, ImageDot, ImageMaps, BoxContent, ContainerText } from "./styled";

const MapsUnit = () => {
  return (
    <Container>
      <BoxContent>
        <ContainerText>
          <TextCluster>Cluster</TextCluster>
          <Text>Prabayakasa</Text>
          <ImageDot src="/picture/prabayaksa.png" />
          <TextCluster>Cluster</TextCluster>
          <Text>Pringgondani</Text>
          <ImageDot src="/picture/prigondani.png" />
          <TextCluster>Cluster</TextCluster>
          <Text>Kanoman</Text>
          <ImageDot src="/picture/konoman.png" />
        </ContainerText>
        <div>
          <ImageMaps src="/picture/peta.png" />
        </div>
      </BoxContent>
      <WhyComponent
        top="64px"
        text={
          <>
            Lokasi <br /> Pringgondani
          </>
        }
      />
    </Container>
  );
};

export default MapsUnit;
