import styled from "styled-components";

export const ContainerSection = styled.div`
  background-color: #000000;
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 16px;
    box-sizing: border-box;
  }
`;

export const MarginBorder = styled.div`
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const Title = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 90px;
  /* or 141% */
  background: #25c779;
  text-align: center;
  margin: 0;
  padding: 0 24px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 42px;
    font-weight: 800;
    border-radius: 25px;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 90px;
  /* or 141% */
  text-align: center;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
    margin-top: 15px;
  }
`;

export const PriceText = styled.p`
  font-family: Open Sans;
  font-style: italic;
  font-weight: 800;
  font-size: 36px;
  line-height: 84px;
  /* or 235% */
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 32px;
    font-style: normal;
    font-weight: bold;
  }
`;

export const Title2 = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 39px;
  /* identical to box height, or 81% */
  margin: 16px 0î;
  text-align: center;

  color: #24ce7b;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 29px;
    margin: 9px 0;
  }
`;

export const LineText = styled.div`
  width: 60%;
  height: 7px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 92%;
    height: 2px;
  }
`;

export const TextGratis = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 58px;
  /* or 193% */
  text-align: center;
  color: #fff;
  margin: 0;
  margin-top: 52px;
  span {
    font-weight: bold;
    color: #24ce7b;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 25px;
    margin-top: 22px;
  }
`;
