import styled from "styled-components";

export const Conatiner = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 130px 0;
`;

export const BoxContain = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  margin-left: 70px;
`;

export const TitleText = styled.p`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.5px;
  color: #2a2a2a;
  margin: 0;
`;

export const SmallText = styled.p`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #888;
  margin: 0;
`;

export const BoxText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
`;
