import React from "react";
import WhyComponent from "../../HomePage/WhyComponent/WhyComponent";
import { LinkName } from "../AboutSectionType/styled";
import { Container, Paragraf, BoxContent, Image } from "./styled";

const ExteriorUnit = () => {
  return (
    <Container>
      <LinkName style={{ visibility: "hidden" }}>okee </LinkName>
      <div></div>
      <BoxContent>
        <Paragraf>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum enim doloribus autem voluptatem tempore
          molestias. Commodi repudiandae cupiditate doloremque quis, magni ab. Odit minima temporibus, placeat
          distinctio excepturi ratione molestiae. Doloribus, molestiae laborum. Ex illo maxime accusamus at laboriosam
          error sequi quod sed enim porro modi eligendi reiciendis dolor ipsum, nihil veniam. Quis pariatur voluptatem
          molestias sequi ipsa quisquam similique?
        </Paragraf>
        <Image src="/picture/eksterior.png" alt="ok" />
      </BoxContent>
      <WhyComponent top="60px" text={"Eksterior"} />
    </Container>
  );
};

export default ExteriorUnit;
