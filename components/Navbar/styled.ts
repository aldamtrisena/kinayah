import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  background-color: transparent;
  height: 120px;
  width: 100%;
  opacity: 0.15px;
  padding: 23px 139px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  /* height: 215px; */
  z-index: 2;
  box-sizing: border-box;
`;

export const Line = styled.div``;

export const FlexNavbar = styled.div`
  gap: 72px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FontNavbar = styled.p`
  margin: 0;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: 0.5px;
  color: #fff;
  cursor: pointer;
`;

export const ImageLogo = styled.img``;
