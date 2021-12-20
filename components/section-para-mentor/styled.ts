import styled from "styled-components";

export const ContainerSection = styled.section`
width: 100%;
background-color: #000;
padding: 180px 0 100px 0;
position: relative;

@media (max-width: 768px) {
    padding: 50px 16px;
    box-sizing: border-box;
}

`
export const Title = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 39px;
/* identical to box height, or 65% */
text-align: center;
margin:0;
color: #FFFFFF;
border: 7px solid #24CE7B;
box-sizing: border-box;
border-radius: 21px;
/* width: 45%; */
padding: 32px 42px;
background-color: #000;

@media (max-width: 768px) {
font-size: 38px;
line-height: 41px;
padding: 0;
padding: 12px;
border: 5px solid #24CE7B;
}

`

export const BorderText = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 2;


@media (max-width: 768px) {

}
`

export const GridMentor = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 90px;
grid-row-gap: 30px;
justify-items: center;
padding: 20px 70px;
margin-top: 80px;

@media (max-width: 768px) {
grid-template-columns: repeat(1, 1fr);
padding: 20px 0px;
margin-top: 30px;
}
`

export const NamaPengajar = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 39px;
/* or 108% */
text-align: center;
color: #24CE7B;

@media (max-width: 768px) {
    font-size: 26px;
line-height: 29px;
}

`
export const ImageMentor = styled.img`
@media (max-width: 768px) {
width: 100%;
}
`

export const TextTestimoni = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 49px;
/* or 204% */
text-align: center;
margin:0;
color: #fff;
width: 80%;

@media (max-width: 768px) {
width: 100%;
font-weight: 400;
font-size: 16px;
line-height: 33px;
}

`

export const FlexContain = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction:column;
`

export const ImageDownSquare = styled.img`
position: absolute;
bottom: 120px;
right: 0;

@media (max-width: 768px) {
display: none;
}
`

export const ImageUpSquare = styled.img`
position: absolute;
top: -40px;
left: 0;
@media (max-width: 768px) {
width: 100%;
}
`

export const TextTesti2 = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 49px;
/* or 204% */
text-align: center;
margin:0;
color: #fff;
width: 80%;
margin-top: -139px;

@media (max-width: 768px) {
width: 100%;
font-weight: 400;
font-size: 16px;
line-height: 33px;
margin-top: 0;
}
`