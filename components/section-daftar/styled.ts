
import styled from "styled-components";

export const Container = styled.section`
width: 100%;
box-sizing: border-box;
padding: 50px 80px ;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

@media (max-width: 768px) {
  padding: 30px 16px ;
}
`

export const Title = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 54px;
line-height: 70px;
/* identical to box height, or 130% */
margin:0;
text-align: center;
color: #000000;
@media (max-width: 768px) {
font-size: 22px;
line-height: 36px;
}

`

export const SubTitle = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 41px;
  line-height: 70px;
  /* identical to box height, or 130% */
  margin: 0;
  text-align: center;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 14px;
  }
`;

export const Paragraf = styled.p`
  font-family: Open Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  /* or 139% */
  margin: 6px 0;
  text-align: center;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Gap = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 12px;
  }
`;

export const CircleContainer = styled.div`
  background: #24ce7b;
  width: 300px;
  height: 300px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 122px;
    height: 122px;
  }
`;

export const OuterList = styled.div`
  height: 322px;
  width: 322px;
  border: 5px solid #24ce7b;
  box-sizing: border-box;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -10%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    display: none;
    height: 100px;
    width: 100px;
    border: 1px solid #24ce7b;
    top: 44%;
    right: -9%;
  }
`;

export const OuterListMobile = styled.div`
  display: none;
  height: 322px;
  width: 322px;
  border: 5px solid #24ce7b;
  box-sizing: border-box;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    height: 135px;
    width: 135px;
    border: 1px solid #24ce7b;
    margin-top: 14px;
  }
`;
export const CircleText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 41px;
  line-height: 50px;
  /* or 122% */
  text-align: center;

  color: #000000;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const ButtonDaftar = styled.div`
  background: #24ce7b;
  border-radius: 37px;
  width: 496px;
  padding: 39px 0;
  margin-top: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 200px;
    border-radius: 29px;
    padding: 18px 23px;
    margin-top: 20px;
  }
`;

export const TextDaftar = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 65px;
text-align: center;
margin:0;
color: #000000;

@media (max-width: 768px) {
font-size: 22px;
line-height: 27px;
}

`