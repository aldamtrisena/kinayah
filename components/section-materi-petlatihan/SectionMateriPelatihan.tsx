import React from "react";
import styled from "styled-components";
import { Container, Title, Ellipse, Paragraf, GridContain, ListItem, SubTiile } from "./styled";
import ImageBG from "/picture/bg_section_5.png";

const ContainerSection = styled.section`
  background-image: url("/picture/bg_section_5.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0 80px 0;

  @media (max-width: 768px) {
   padding: 40px 16px;
   box-sizing: border-box;
    /* background-size: contain; */
}
`;

const dataListKiri = [
  { text: "Pengenalan Potensi Diri" },
  { text: "Business Model" },
  { text: "Legalitas Usaha" },
  { text: "Keuangan dan Pembukuan" },
  { text: "Pemasaran" },
  { text: "Perpajakan" },
  { text: "Business Plan" },
  { text: "Fund Raising" },
];
const dataListKanan = [
  { text: "Aqidah dan Muamalah" },
  { text: "Tazkiyatun Nufus dan Adab Pebisnis" },
  { text: "Pengantar Fiqh Jual Beli" },
  { text: "Mengenal Hak Khiyar dan Harga Pasar" },
  { text: "Aturan Membuat Kesepakatan dalam Akad" },
  { text: "Harta Haram" },
  { text: "Jual Beli yang Terlarang" },
  { text: "2 Jam Bersama Riba" },
  { text: "Mengenal Akad Kerja Sama" },
  { text: "Halal Haram Dunia Online" },
];
export default function SectionMateriPelatihan() {
  return (
    <ContainerSection>
      <Title>Materi Pelatihan</Title>
      <GridContain>
        <ListItem>
          <SubTiile>Ilmu Fiqh Muamalah:</SubTiile>
          {dataListKanan.map((text, i) => {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <Ellipse />
                <Paragraf>{text.text}</Paragraf>
              </div>
            );
          })}
        </ListItem>
        <ListItem>
          <SubTiile>Ilmu Manajemen Bisnis:</SubTiile>
          {dataListKiri.map((text, i) => {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <Ellipse />
                <Paragraf>{text.text}</Paragraf>
              </div>
            );
          })}
        </ListItem>
      </GridContain>
    </ContainerSection>
  );
}
