import styled from "styled-components";

export const Container = styled.footer`
background: #24CE7B;
opacity: 0.9;
width: 100%;
height: 102px;
gap: 32px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    height: 50px;
    gap: 16px;
}
`

export const FacebookIcon = styled.img`

`
export const InstagramIcon = styled.img`
width: 35px;
height: 35px;

@media (max-width: 768px) {
width: 16px;
height: 16px;
}
`
export const YoutubeIcon = styled.img`

`

export const TextSosmed = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 49px;
/* or 204% */

text-align: center;
margin:0;
color: #000;
@media (max-width: 768px) {
font-size: 10px;
line-height: 35px;
}

`

export const LineFooter = styled.div`
width: 100%;
height: 51px;
background-color: #000;

@media (max-width: 768px) {
height: 32px;
}
`