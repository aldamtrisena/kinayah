import { useRouter } from "next/router";
import React from "react";
import { NavbarContainer, FontNavbar, ImageLogo, FlexNavbar } from "./styled";
const Navbar = () => {
  const router = useRouter();
  return (
    <NavbarContainer>
      <FlexNavbar>
        <ImageLogo src="/picture/logo.png" alt="logo" />
        <FontNavbar onClick={() => router.push("/")}>Home</FontNavbar>
        <FontNavbar>About</FontNavbar>
        <FontNavbar>Facilities</FontNavbar>
        <FontNavbar onClick={() => router.push("/unit-type")}>Unit Type</FontNavbar>
        <FontNavbar>Location</FontNavbar>
        <FontNavbar>Contact</FontNavbar>
      </FlexNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
