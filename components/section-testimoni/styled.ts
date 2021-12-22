import styled from "styled-components";

export const Title = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 58px;
  /* or 138% */
  width: 70%;
  text-align: center;
  margin: 0;
  color: #000000;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 34px;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const FotoUki = styled.img`
  position: relative;
  z-index: 2;
  cursor: pointer;
  width: 77%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FotoUSerBawah = styled.img`
  position: relative;
  z-index: 2;
  cursor: pointer;
  width: 77%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListWhite = styled.div`
  border: 11px solid #ffffff;
  border-radius: 44px;
  height: 458px;
  width: 82%;
  position: absolute;
  top: 300px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ListWhite2 = styled.div`
  border: 11px solid #ffffff;
  border-radius: 44px;
  height: 458px;
  width: 82%;
  position: absolute;
  top: 114px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const VideoYoutube = styled.iframe`
  width: 75%;
  height: 591px;
  position: absolute;
  top: 233px;
  z-index: 3;
  outline: none;
  border: none;
  @media (max-width: 768px) {
    height: 30%;
    width: 85%;
    position: absolute;
    top: 152px;
  }
`;

export const VideoYoutube2 = styled.iframe`
  width: 77%;
  height: 591px;
  position: absolute;
  top: 54px;
  z-index: 3;
  outline: none;
  border: none;
  @media (max-width: 768px) {
    height: 30%;
    position: absolute;
    top: 28px;
    width: 85%;
  }
`;
