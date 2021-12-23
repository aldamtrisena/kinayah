import styled from "styled-components";

export const ContainerText = styled.div`
  border: 2px solid #24ce7b;
  box-sizing: border-box;
  border-radius: 86px;
  padding: 89px;
  width: 90%;
  @media (max-width: 768px) {
    padding: 16px 21px;
    border-radius: 22px;
    width: 93%;
  }
`;

export const Paragraf = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  line-height: 40px;
  /* or 121% */
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 21px;
    text-align: center;
  }
`;