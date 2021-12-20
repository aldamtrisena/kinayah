import styled from "styled-components";

export const ContainerText = styled.div`
border: 2px solid #24CE7B;
box-sizing: border-box;
border-radius: 86px;
padding: 89px;
width: 90%;
@media (max-width: 768px) {
    padding: 16px;
    border-radius: 22px;
    width: 93%;
}
`

export const Paragraf = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 33px;
line-height: 40px;
/* or 121% */
color: #FFFFFF;

@media (max-width: 768px) {
font-size: 10px;
line-height: 17px;
text-align: center;
}
`