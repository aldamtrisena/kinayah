import React from "react";
import WhyComponent from "../WhyComponent/WhyComponent";
import { Container, BoxContent, Text, GridContent, Icon, FlexText, TextValue, Line } from "./styled";

const contentGrid = [
  { label: "Bebas Banjir", image: "/picture/fill-1.svg" },
  { label: "Masjid", image: "/picture/fill-2.svg" },
  { label: "CCTV", image: "/picture/fill-3.svg" },
  { label: "Internet & TV Kabel", image: "/picture/fill-4.svg" },
  { label: "Jogging Track", image: "/picture/fill-5.svg" },
  { label: "Children Playground", image: "/picture/fill-6.svg" },
  { label: "Club House", image: "/picture/fill-7.svg" },
  { label: "Area Komersil", image: "/picture/fill-8.svg" },
];
const Section2Home = () => {
  return (
    <Container>
      <BoxContent>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores sit corporis aperiam, quos
          necessitatibus fugit facere saepe consequatur rem architecto facilis magnam illo nulla molestias deserunt
          itaque neque ad? Libero, possimus! Consequuntur voluptate, tempora quidem atque minima cupiditate, molestiae
          laudantium nobis officiis quaerat perferendis sint ex? Reiciendis ipsam quibusdam blanditiis, aperiam minus
          debitis quaerat dolor tenetur, deserunt neque cum? Unde assumenda nulla corrupti nesciunt est veniam officiis
        </Text>
        <GridContent>
          {contentGrid.map((item, i) => {
            return (
              <FlexText key={i}>
                <Icon src={item.image} />
                <TextValue>{item.label}</TextValue>
              </FlexText>
            );
          })}
          <Line style={{ top: "-50px", left: "180px" }} />
          <Line style={{ top: "-50px", left: "378px" }} />
          <Line style={{ top: "-50px", left: "563px" }} />
        </GridContent>
        <WhyComponent top="140px" text="Why Kinaya" />
      </BoxContent>
    </Container>
  );
};

export default Section2Home;
