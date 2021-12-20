import React from "react";
import styled from "styled-components";
import { Title, Line, ListPengajar, ContainerImage, ImageIcon } from "./styled";
const ContainerSection = styled.section`
  background-image: url("/picture/bg_section_7.png");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000000;
  padding: 50px 0 80px 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  @media (max-width: 768px) {
    padding: 50px 16px;
    box-sizing: border-box;
  }
`;

export default function SectionParaPengajar() {
  return (
    <ContainerSection>
      <ContainerImage>
        <ImageIcon src={"/picture/icon_speaker.png"} />
      </ContainerImage>
      <Title>
        PARA PENGAJAR <br />
        PROGRAM ASAH IZZAH
      </Title>
      <Line />
      <ListPengajar>Ustadz Ammi Nur Baits, ST., BA. Hafidzahullah</ListPengajar>
      <ListPengajar>Ustadz Datyadikara, Lc., M.E.I. Hafidzahullah </ListPengajar>
      <ListPengajar>Ustadz Musa Mulyadi Lukman, Lc. Hafidzahullah</ListPengajar>
      <ListPengajar>Ustadz Resa Gunarsa, Lc. Hafidzahullah</ListPengajar>
      <ListPengajar>Okto Melandana Karseno, SE., AK., MAPPFIN., CPC.,</ListPengajar>
      <ListPengajar>Reggy Hadiwijaya, S.H.</ListPengajar>
      <ListPengajar>Rudi Irawan Gunarto, S.E., AK., M.M.</ListPengajar>
      <ListPengajar>Yunus Bani Sadar, S.SOS</ListPengajar>
      <ListPengajar>Kusnardi Budi Wicaksono, S.E., AK.</ListPengajar>
      <ListPengajar>Aden Budi, S.E., M.S.E</ListPengajar>
    </ContainerSection>
  );
}
