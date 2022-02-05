import React from "react";
import WhyComponent from "../WhyComponent/WhyComponent";
import { Container, BoxContain, Title, Subtitle, Download, Image } from "./styled";

const Section4Home = () => {
  return (
    <Container>
      <BoxContain>
        <Title>Bersatu Dengan Nuansa Alam</Title>
        <div style={{ display: "flex", gap: "30px" }}>
          <Subtitle>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam! Quisquam laborum officiis
            unde vel beatae magnam ullam corrupti similique commodi alias. Tempore animi mollitia perspiciatis similique
            itaque error dicta. Deserunt quam possimus quisquam eius nemo ratione impedit expedita. Temporibus explicabo
            repellat vero dolore, tempore quidem consequuntur distinctio inventore, aperiam accusantium aut fugiat
            expedita fuga molestias doloremque, autem laboriosam voluptatem!
          </Subtitle>
          <Subtitle>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam! Quisquam laborum officiis
            unde vel beatae magnam ullam corrupti similique commodi alias. Tempore animi mollitia perspiciatis similique
            itaque error dicta. Deserunt quam possimus quisquam eius nemo ratione impedit expedita. Temporibus explicabo
            repellat vero dolore, tempore quidem consequuntur distinctio inventore, aperiam accusantium aut fugiat
            expedita fuga molestias doloremque, autem laboriosam voluptatem!
          </Subtitle>
        </div>
        <Download>DOWNLOAD OUR BROCHURE</Download>
      </BoxContain>
      <WhyComponent text="About Kinaya" top="100px" />
      <Image src="/picture/img-rumah.png" alt="rumah" />
    </Container>
  );
};

export default Section4Home;
