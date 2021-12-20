import Image from "next/image";
import React from "react";
import { Container,ImageLogo } from "./styled";
import LogoIzah from "../../assets/picture/Logo_izzah.png";

export default function Navbar() {
  return (
    <Container>
      <ImageLogo onClick={() => window.open('https://trizzah.co.id')} src={"/picture/Logo_izzah.png"} alt="logo"/>
    </Container>
  );
}
