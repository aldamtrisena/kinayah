import React from "react";
import styled from "styled-components";
import { Title, Subtitle, BoxText, GradienColor, ContainerRight } from "./styled";

export const BackgroundImage = styled.section`
  background-image: url("/picture/header-1.png");
  width: 100%;
  height: 809px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  mix-blend-mode: source-in;
  position: relative;
`;

export const Rectangle = styled.div`
  height: 215px;
  margin: 0 0 78px;
  mix-blend-mode: source-in;
  background-image: linear-gradient(to bottom, #002c54 -2%, rgba(0, 186, 255, 0) 81%, rgba(0, 186, 255, 0) 81%);
`;

export const ImageRight1 = styled.div`
  background-image: url("/picture/group-7.png");
  width: 304px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 274px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 30px 0 80px;
  flex-direction: column;
`;
export const ImageRight2 = styled.div`
  background-image: url("/picture/group-8.png");
  width: 304px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 274px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 30px 0 80px;
  flex-direction: column;
`;

const HeaderSection = () => {
  return (
    <BackgroundImage>
      <Rectangle />
      <BoxText>
        <Title>Perumahan di Tengah Kota Bernuansa Bali</Title>
        <Subtitle>
          Dian Karya Estate kembali memenuhi lebih banyak kebutuhan konsumen di Kota dengan mengembangkan kediaman
          Kinaya. Kompleks perumahan yang bergengsi dan bernuansa alam bali.
        </Subtitle>
        <Subtitle>SEE MORE</Subtitle>
      </BoxText>
      <GradienColor />
      <ContainerRight>
        <ImageRight1>
          <p className="unit-type">Unit type</p>
          <p className="Pringgandani-82-Unit">
            Pringgandani <br />
            <span className="text-style-1">82 Units</span>
          </p>
          <p className="see-more">SEE MORE +</p>
        </ImageRight1>
        <ImageRight2>
          <p className="unit-type">Unit type</p>
          <p className="Pringgandani-82-Unit">
            Konoman <br />
            <span className="text-style-1">118 Units</span>
          </p>
          <p className="see-more">SEE MORE +</p>
        </ImageRight2>
      </ContainerRight>
    </BackgroundImage>
  );
};

export default HeaderSection;
