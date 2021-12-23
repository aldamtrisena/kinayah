import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  /* or 123% */
  margin: 0;
  text-align: center;
  margin-top: 27px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    margin-top: 16px;
  }
`;

export const ContainerImage = styled.div`
  width: 97.32px;
  height: 105.06px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 39.32px;
    height: 42.06px;
  }
`;

export const ImageIcon = styled.img`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  width: 50%;
  height: 7px;
  background-color: #fff;
  text-align: center;
  margin: 16px 0 50px 0;

  @media (max-width: 768px) {
    margin: 8px 0 12px 0;
    width: 71%;
    height: 2px;
  }
`;

export const ListPengajar = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 63px;
  /* or 175% */
  margin: 0;
  text-align: center;

  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 25px;
  }
`;
