import React from "react";
import styled from "styled-components";
import { Title, FotoUki, ListWhite } from "./styled";

const SectionContainer = styled.section`
  background-image: url("/picture/bg_section_9.png");
  width: 100%;
  background-color: #24ce7b;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 16px;
    box-sizing: border-box;
  }
`;

export const TestimonyText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  width: 85%;
  color: #0d0c1f;
  position: relative;

  ::before {
    content: url("/picture/kutip_buka.png");
    position: absolute;
    top: 0;
    left: 0;
  }

  ::after {
    content: url("/picture/kutip_tutup.png");
  }

  @media (max-width: 768px) {
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  width: 100%;

  ::before {
   display: none;
  }

  ::after {
    display: none;
  }
}

`;

export default function SectionTestimoniSatu() {
  return (
    <SectionContainer>
      <Title>Yuk, simak video testimoni peserta program Asah Izzah berikut ini:</Title>
      <FotoUki src={"/picture/uki_bawah.png"} />
      <ListWhite />
      <TestimonyText>
        Ingin tahu fiqih jual beli dan perlu mengerti bisnis supaya tahu halal/haramnya dan bisa membaca arah bisnis 5 –
        10 tahun ke depan yang aman dari sisi agama sehingga bisnis bisa berkembang dan manfaat buat orang banyak, dan
        untuk mengembangkan dunianya dan akhiratnya.
      </TestimonyText>
    </SectionContainer>
  );
}
