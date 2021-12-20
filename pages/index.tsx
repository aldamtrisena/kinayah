import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SectionDaftar from "../components/section-daftar/SectionDaftar";
import SectionInfoProgram from "../components/section-info/InfoProgram";
import SectionKeresahan from "../components/section-keresahan/SectionKeresahan";
import SectionMateriPelatihan from "../components/section-materi-petlatihan/SectionMateriPelatihan";
import SectionParaMentor from "../components/section-para-mentor/SectionParaMentor";
import SectionParaPengajar from "../components/section-para-pengajar/SectionParaPengajar";
import SectionQuotes from "../components/section-quotes/SectionQuotes";
import SectionSegeraDaftar from "../components/section-segera-daftar/SectionSegeraDaftar";
import SectionTestimoniSatu from "../components/section-testimoni/SectionTestimoni1";
import SectionTestimoni2 from "../components/section-testimoni/SectionTestimoni2";

export const Section1 = styled.section`
  background-image: url("/picture/section_1_full.png");
  width: 100%;
  height: 1021px;
  background-repeat: no-repeat;
  background-size: cover;

    @media (max-width: 768px) {
    height: 294px;
    /* background-size: contain; */
  }
`;

export const Section2 = styled.section`
  background-image: url("/picture/section_2_full.png");
  width: 100%;
  height: 1021px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    height: 294px;
    /* background-size: contain; */
  }
`;

export const Section4 = styled.section`
  background-image: url("/picture/section_4_full.png");
  width: 100%;
  height: 645px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -2;

  @media (max-width: 768px) {
    height: 170px;
    /* background-size: contain; */
  }
`;

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <Section1 />
      <Section2 />
      <SectionKeresahan />
      <Section4 />
      <SectionMateriPelatihan />
      <SectionQuotes />
      <SectionParaPengajar />
      <SectionInfoProgram />
      <SectionSegeraDaftar />
      <SectionTestimoniSatu />
      <SectionTestimoni2 />
      <SectionParaMentor />
      <SectionDaftar />
      <Footer />
    </main>
  );
};

export default Home;
