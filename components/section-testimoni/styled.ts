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
    font-size: 20px;
    line-height: 26px;
    width: 100%;
    margin-bottom: 29px;
  }
`;

export const FotoUki = styled.img`
  position: relative;
  z-index: 2;
  cursor: pointer;
  width: 77%;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FotoUSerBawah = styled.img`
  position: relative;
  z-index: 2;
  cursor: pointer;
  width: 77%;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 90%;
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
    border: 3px solid #fff;
    border-radius: 19px;
    height: 151px;
    width: 92%;
    position: absolute;
    top: 119px;
  }

  @media (max-width: 375px) {
    border: 3px solid #fff;
    border-radius: 19px;
    height: 137px;
    width: 90%;
    position: absolute;
    top: 145px;
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
    border: 3px solid #fff;
    border-radius: 19px;
    height: 151px;
    width: 92%;
    top: 51px;
  }

  @media (max-width: 375px) {
    height: 144px;
    top: 43px;
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
  border-radius: 20px;
  @media (max-width: 768px) {
    height: 37%;
    width: 85%;
    position: absolute;
    top: 111px;
    border-radius: 20px;
  }

  @media (max-width: 375px) {
    height: 34%;
    top: 129px;
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
  border-radius: 20px;
  @media (max-width: 768px) {
    height: 30%;
    position: absolute;
    top: 28px;
    width: 85%;
  }
`;
