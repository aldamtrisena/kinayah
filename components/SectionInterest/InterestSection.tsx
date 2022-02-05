import React from "react";
import styled from "styled-components";
import {
  Title,
  Subtitle,
  BoxContent,
  ContactContainer,
  WAContainer,
  WaText,
  IconWa,
  InputText,
  SendText,
  ContainerInput,
} from "./styled";
export const BackgroundImage = styled.section`
  background-image: url("/picture/bg.png");
  width: 100%;
  height: 247px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InterestSection = () => {
  return (
    <BackgroundImage>
      <BoxContent>
        <div>
          <Title>Are you interested?</Title>
          <Subtitle>Leave your email and we will contact you as soon as possible</Subtitle>
        </div>
        <ContactContainer>
          <ContainerInput>
            <InputText placeholder="Your Email" />
            <SendText>SEND</SendText>
          </ContainerInput>
          <WAContainer>
            <IconWa src="/picture/whatsapp-icon.png" alt="wa" />
            <WaText>WHATSAPP NOW</WaText>
          </WAContainer>
        </ContactContainer>
      </BoxContent>
    </BackgroundImage>
  );
};

export default InterestSection;
