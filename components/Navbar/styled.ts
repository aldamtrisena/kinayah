import styled from 'styled-components'

export const Container = styled.nav`
width: 100%;
background-color: #fff;
display: flex;
justify-content: center;


`

export const ImageLogo = styled.img`
object-fit: cover;
cursor: pointer;

@media (max-width: 768px) {
   width:150px;
}
`