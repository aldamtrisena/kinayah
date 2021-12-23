import styled from "styled-components";

export const Container = styled.section`
`

export const Title = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 39px;
  /* identical to box height, or 61% */
  color: #000000;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 30px;
    margin: 0;
  }
`;

export const GridContain = styled.div`
  display: flex;
  justify-content: center;
  gap: 52px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 7px;
  }
`;

export const ListItem = styled.div``;

export const SubTiile = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  /* or 122% */
  color: #000000;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    margin: 8px;
  }
`;

export const Paragraf = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 44px;
  /* or 147% */
  margin: 0;

  color: #0d0c1f;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 25px;
    text-align: center;
  }
`;

export const ContainerParagraf = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Ellipse = styled.div`
  background: #24ce7b;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;