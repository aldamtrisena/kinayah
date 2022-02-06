import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 0 0 190px 0;
`;

export const LinkName = styled.p`
  font-family: NotoSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.07;
  letter-spacing: 0.44px;
  color: #3a3a3a;
  margin: 32px 0 0 134px;

  span {
    font-weight: normal;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  margin: 80px 0 0 135px;
`;

export const Paragraf = styled.p`
  font-family: NotoSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: 0.5px;
  color: #888;
  margin: 0;
  width: 370px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 428px;
  border-radius: 10px;
`;
