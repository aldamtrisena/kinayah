import React from "react";
import styled from "styled-components";
import { Image, Text } from "./styled";

export const Container = styled.div`
  position: absolute;
  left: 0;
`;

interface PropsWhy {
  top: string;
  text: string;
}

const WhyComponent = (props: PropsWhy) => {
  return (
    <Container style={{ top: props.top }}>
      <Image src="/picture/kinaya-left.png" alt="logo" />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default WhyComponent;
