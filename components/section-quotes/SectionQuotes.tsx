import React from "react";
import styled from "styled-components";
import { ContainerText, Paragraf } from "./styled";

const ContainerSection = styled.section`
  background-image: url("/picture/bg_section_6.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 50px 0;
  }

`;

export default function SectionQuotes() {
  return (
    <ContainerSection>
      <ContainerText>
        <Paragraf>
          Sobat Izzah akan didampingi oleh para praktisi (mentor) yang berpengalaman dan handal sesuai bidangnya
          masing-masing, yang insyaa Allah dapat membantu memberikan solusi dan menjawab berbagai persoalan dalam
          menjalankan serta mengembangkan bisnis. <br /> <br />
          Sesi pelatihan dan pendampingan baik online ataupun offline ini
          menerapkan metode Active Learning yang akan lebih banyak berdiskusi sehingga Sobat Izzah bisa lebih leluasa
          berkomunikasi dan berdiskusi langsung dengan para praktisi (mentor) tersebut.{" "}
        </Paragraf>
      </ContainerText>
    </ContainerSection>
  );
}
