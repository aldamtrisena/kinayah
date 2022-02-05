import React from "react";
import {
  FooterContainer,
  Addrees,
  ContainerKiri,
  ContianerKanan,
  FlexLink,
  LinkText,
  PhoneNumber,
  DetailAddres,
  ImageLogo,
  CopyText,
  FlexSosmed,
  Sosmed,
} from "./styled";
const Footer = () => {
  return (
    <FooterContainer>
      <ContainerKiri>
        <FlexLink>
          <LinkText>Home</LinkText>
          <LinkText>About</LinkText>
          <LinkText>Facilities</LinkText>
          <LinkText>Unit Type</LinkText>
          <LinkText>Location</LinkText>
          <LinkText>Contact</LinkText>
        </FlexLink>
        <ImageLogo src="/picture/logo-2.png" />
        <CopyText>
          ©2021 <span>Kinaya Residence.</span> All Rights Reserved
        </CopyText>
      </ContainerKiri>
      <ContianerKanan>
        <PhoneNumber>021 323232</PhoneNumber>
        <Addrees>Kinaya Address</Addrees>
        <DetailAddres>Jl. Sultan Ageng Tirtayasa, Desa Cempaka</DetailAddres>
        <DetailAddres> Kec. Talun, Kab. Cirebon</DetailAddres>
        <FlexSosmed>
          <Sosmed>FB</Sosmed>
          <Sosmed>IG</Sosmed>
          <Sosmed>YT</Sosmed>
        </FlexSosmed>
      </ContianerKanan>
    </FooterContainer>
  );
};

export default Footer;
