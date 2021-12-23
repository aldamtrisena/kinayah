import React from "react";
import {
  Container,
  SubTitle,
  Title,
  CircleContainer,
  Paragraf,
  CircleText,
  OuterList,
  ButtonDaftar,
  TextDaftar,
  Gap,
  OuterListMobile,
} from "./styled";

export default function SectionDaftar() {
  return (
    <Container>
      <Title>Rugi kalo tidak ikut Bro!</Title>
      <SubTitle>(Ustadz Subhan Bawazier)</SubTitle>
      <OuterListMobile>
        <CircleContainer>
          <CircleText>Raih Akses Pendanaan!</CircleText>
        </CircleContainer>
      </OuterListMobile>
      <Gap>
        <div>
          <Paragraf>Kelas online terakhir!</Paragraf>
          <Paragraf>Dapatkan harga ekonomi!</Paragraf>
          <Paragraf>Referral discount program!</Paragraf>
          <Paragraf>Tersedia program cicilan 3 bulan!</Paragraf>
          <Paragraf>Kuota terbatas!</Paragraf>
          <Paragraf>Segera amankan kursi anda!</Paragraf>
        </div>
      </Gap>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonDaftar onClick={() => window.open("https://trizzah.co.id/join/")}>
          <TextDaftar>Daftar Sekarang</TextDaftar>
        </ButtonDaftar>
      </div>
      <OuterList>
        <CircleContainer>
          <CircleText>Raih Akses Pendanaan!</CircleText>
        </CircleContainer>
      </OuterList>
    </Container>
  );
}
