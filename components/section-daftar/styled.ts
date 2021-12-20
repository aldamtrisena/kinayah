
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
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 41px;
line-height: 70px;
/* identical to box height, or 130% */
margin:0;
text-align: center;
color: #000000;
@media (max-width: 768px) {
font-size: 22px;
line-height: 30px;
}

`

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
font-size: 10px;
line-height: 14px;
}

`

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
`

export const CircleContainer = styled.div`
background: #24CE7B;
width: 300px;
height: 300px;
border-radius: 999px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
  width: 89px;
height: 89px;
}
`

export const OuterList = styled.div`
    height: 322px;
    width: 322px;
    border: 5px solid #24CE7B;
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
  height: 100px;
  width: 100px;
  border: 1px solid #24CE7B;
  top: 44%;
  right: -9%;
  }

`
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
  font-size: 11px;
  line-height: 18px
}

`

export const ButtonDaftar = styled.div`
background: #24CE7B;
border-radius: 37px;
width: 496px;
padding: 39px 0;
margin-top: 50px;
cursor: pointer;

@media (max-width: 768px) {
width: 200px;
border-radius: 12px;
padding: 18px 0;
}
`

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