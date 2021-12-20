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
    padding: 50px 16px;
    box-sizing: border-box;
}
`

export const MarginBorder = styled.div`
margin-top: 100px;
@media (max-width: 768px) {
margin-top: 12px;
}
`

export const Title = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 64px;
line-height: 90px;
/* or 141% */
background: #25C779;
text-align: center;
margin:0;
padding: 0 24px;
color: #000000;

@media (max-width: 768px) {
font-size: 32px;
line-height: 60px;
}

`

export const SubTitle = styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 44px;
line-height: 90px;
/* or 141% */
text-align: center;
margin:0;
color: #fff;

@media (max-width: 768px) {
font-size: 20px;
line-height: 29px;
margin-top: 12px;
}
`

export const PriceText = styled.p`
font-family: Open Sans;
font-style: italic;
font-weight: 800;
font-size: 36px;
line-height: 84px;
/* or 235% */
text-align: center;
color: #FFFFFF;

@media (max-width: 768px) {
font-size: 12px;
line-height: 36px;
}

`

export const Title2 = styled.h1`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 39px;
/* identical to box height, or 81% */
margin:16px 0Î;
text-align: center;

color: #24CE7B;

@media (max-width: 768px) {
font-size: 20px;
line-height: 29px;
}

`

export const LineText = styled.div`
width: 60%;
height: 7px;
background-color: #fff;
`

export const TextGratis = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 58px;
/* or 193% */
text-align: center;
color: #fff;
margin:0; 
margin-top: 52px;
span{
    font-weight: bold;
    color: #24CE7B;
}
@media (max-width: 768px) {
font-size: 16px;
line-height: 36px;
}

`