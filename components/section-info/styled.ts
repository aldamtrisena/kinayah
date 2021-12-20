import styled from "styled-components";

export const ContainerSection = styled.section`
background: #25C779;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 60px 0;

@media (max-width: 768px) {
    padding: 30px 16px;
    box-sizing: border-box;
}
`

export const IconImage = styled.img`
@media (max-width: 768px) {
width: 63px;
height: 63px;
}
`

export const Title = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 39px;
/* or 81% */
text-align: center;
color: #000000;
@media (max-width: 768px) {
font-size: 32px;
line-height: 28px;
}

`

export const LineBlack = styled.div`
width: 50%;
height: 7px;
background-color: #000000;
`
export const WarningText = styled.p`
font-family: Open Sans;
font-style: italic;
font-weight: normal;
font-size: 21px;
line-height: 64px;
/* or 307% */
margin:0;
text-align: center;
color: #000000;

@media (max-width: 768px) {
    font-size: 12px;
line-height: 20px;
}

`

export const IconBackground = styled.div`
width: 97px;
height: 97px;
background-color: #000000;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
width: 79px;
height: 79px;
}

`

export const JadwalText = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 60px;
/* or 167% */
text-align: center;
color: #000000;
@media (max-width: 768px) {
font-size: 16px;
line-height: 30px;
}

`