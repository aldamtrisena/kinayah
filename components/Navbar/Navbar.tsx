import React from "react";
import { NavbarContainer, FontNavbar, ImageLogo, FlexNavbar } from "./styled";
const Navbar = () => {
  return (
    <NavbarContainer>
      <FlexNavbar>
        <ImageLogo src="/picture/logo.png" alt="logo" />
        <FontNavbar>Home</FontNavbar>
        <FontNavbar>About</FontNavbar>
        <FontNavbar>Facilities</FontNavbar>
        <FontNavbar>Unit Type</FontNavbar>
        <FontNavbar>Location</FontNavbar>
        <FontNavbar>Contact</FontNavbar>
      </FlexNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
