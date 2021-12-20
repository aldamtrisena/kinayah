import styled from "styled-components";

export const Title = styled.h1`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 42px;
line-height: 58px;
/* or 138% */
width: 70%;
text-align: center;
margin:0;
color: #000000;
margin-bottom: 70px;

@media (max-width: 768px) {
font-size: 22px;
line-height: 34px;
width: 100%;
margin-bottom: 30px;
}

`

export const FotoUki = styled.img`
position: relative;
z-index: 2;

@media (max-width: 768px) {
width: 100%;
}
`

export const FotoUSerBawah = styled.img`
position: relative;
z-index: 2;

@media (max-width: 768px) {
width: 100%;
}
`

export const ListWhite = styled.div`
border: 11px solid #FFFFFF;
border-radius: 44px;
height: 458px;
width: 82%;
position: absolute;
top: 300px;

@media (max-width: 768px) {
display: none;
}
`

export const ListWhite2 = styled.div`
border: 11px solid #FFFFFF;
border-radius: 44px;
height: 458px;
width: 82%;
position: absolute;
top: 300px;


@media (max-width: 768px) {
display: none;
}
`
