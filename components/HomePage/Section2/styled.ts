import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 809px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContent = styled.div`
  width: 55%;
`;

export const Text = styled.p`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: 0.5px;
  color: #888;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 78px;
  margin-top: 49px;
  position: relative;
`;

export const Icon = styled.img``;

export const TextValue = styled.p`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: center;
  color: #3a3a3a;
  margin: 8px 0 0;
`;

export const FlexText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
`;

export const Line = styled.div`
  width: 1px;
  height: 334px;
  margin: 49px 15px 0 14px;
  border-left: solid 1px #eaeaea;
  position: absolute;
  top: 0;
  left: 0;
`;
