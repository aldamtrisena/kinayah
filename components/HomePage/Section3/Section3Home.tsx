import React from "react";
import WhyComponent from "../WhyComponent/WhyComponent";
import { Container, BoxContent, ImageContainer, Image, Text, SeeMore, FaciliteisAll } from "./styled";

const Section3Home = () => {
  return (
    <Container>
      <BoxContent>
        <ImageContainer>
          <Image src="/picture/img-ballroom.png" alt="ballroom" />
          <Text style={{ top: "60px", left: "-140px" }}>Tempat Ruang Serba Guna</Text>
          <SeeMore style={{ bottom: "10px", left: "-140px" }}>SEE MORE +</SeeMore>
        </ImageContainer>
        <ImageContainer style={{ right: "-50px", top: "200px" }}>
          <Image src="/picture/img-taman.png" alt="taman" />
          <Text style={{ top: "60px", left: "-140px" }}>Tempat Bermain Anak - Anak</Text>
          <SeeMore style={{ bottom: "10px", left: "-140px" }}>SEE MORE +</SeeMore>
        </ImageContainer>
        <ImageContainer style={{ top: "700px" }}>
          <Image src="/picture/img-ibadah.png" alt="ballroom" />
          <Text style={{ top: "-80px", left: "-140px" }}>Tempat untuk beribadah</Text>
          <SeeMore style={{ bottom: "0px", left: "-140px" }}>SEE MORE +</SeeMore>
        </ImageContainer>
        <ImageContainer style={{ right: "-50px", bottom: "-200px" }}>
          <Image src="/picture/img-serbaguna.png" alt="ballroom" />
          <Text style={{ top: "60px", left: "-140px" }}>Tempat Ballroom Yang Besar</Text>
          <SeeMore style={{ bottom: "10px", left: "-140px" }}>SEE MORE +</SeeMore>
        </ImageContainer>
      </BoxContent>
      <FaciliteisAll>SEE ALL FACILITIES</FaciliteisAll>
      <WhyComponent top="100px" text="Our Facilities" />
    </Container>
  );
};

export default Section3Home;
