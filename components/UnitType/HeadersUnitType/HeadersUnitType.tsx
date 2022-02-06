import React from "react";
import styled from "styled-components";
import { BoxText, TextBesar, TextKecil } from "./styled";

export const BackgroundImage = styled.section`
  background-image: url("/picture/img-hero.png");
  width: 100%;
  height: 529px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  mix-blend-mode: source-in;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const HeadersUnitType = () => {
  return (
    <BackgroundImage>
      <BoxText>
        <TextKecil>Unit Type</TextKecil>
        <TextBesar>PRINGGONDANI</TextBesar>
      </BoxText>
    </BackgroundImage>
  );
};

export default HeadersUnitType;
