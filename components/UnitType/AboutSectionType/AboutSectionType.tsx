import React from "react";
import WhyComponent from "../../HomePage/WhyComponent/WhyComponent";
import { Container, LinkName, BoxContent, Paragraf, Image } from "./styled";

interface PropsAboutType {
  linkName: any;
  textAbout: any;
  media: any;
}
const AboutSectionType = (props: PropsAboutType) => {
  return (
    <Container>
      <LinkName>{props.linkName}</LinkName>
      <BoxContent>
        <Paragraf>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, blanditiis ratione. Fugiat facilis nulla,
          cumque quos molestiae quasi corporis error beatae quisquam reiciendis ipsam nihil pariatur aspernatur Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia eius perspiciatis quia dolorum, in
          unde? Ducimus?
        </Paragraf>
        <Image src={props.media} alt="foto" />
      </BoxContent>
      <WhyComponent top="140px" text={props.textAbout} />
    </Container>
  );
};

export default AboutSectionType;
