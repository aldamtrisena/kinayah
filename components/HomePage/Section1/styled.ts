import styled from "styled-components";

export const Title = styled.h1`
  margin: 0 0 16px;
  margin-top: 32px;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 56px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #fff;
`;

export const Subtitle = styled.p`
  margin-top: 16px;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #fff;
`;

export const BoxText = styled.div`
  padding: 20px 135px;
  width: 60%;
`;

export const GradienColor = styled.div`
  width: 100%;
  height: 732px;
  box-sizing: border-box;
  margin: 1px 0 0;
  transform: rotate(-180deg);
  mix-blend-mode: multiply;
  background-image: linear-gradient(170deg, #001426 1%, rgba(0, 186, 255, 0) 66%, rgba(0, 186, 255, 0) 66%);
  position: absolute;
  bottom: 0;
`;

export const ContainerRight = styled.aside`
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: 0;
  right: 0;

  .unit-type {
    font-family: "Noto Sans Display", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: 0.5px;
    color: #fff;
    text-align: left;
    margin: 0 0 16px 0;
  }

  .Pringgandani-82-Unit {
    margin: 16px 0 0;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.5px;
    color: #fff;
    margin: 0;
  }

  .Pringgandani-82-Unit .text-style-1 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: normal;
  }

  .see-more {
    font-family: "Noto Sans Display", sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: 0.5px;
    color: #cb7a40;
  }
`;
