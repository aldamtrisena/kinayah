import type { NextPage } from "next";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HeaderSection from "../components/HomePage/Section1/HeaderSection";
import Section2Home from "../components/HomePage/Section2/Section2Home";
import Section3Home from "../components/HomePage/Section3/Section3Home";
import Section4Home from "../components/HomePage/Section4/Section4Home";
import Navbar from "../components/Navbar/Navbar";
import InterestSection from "../components/SectionInterest/InterestSection";

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <HeaderSection />
      <Section2Home />
      <Section3Home />
      <Section4Home />
      <InterestSection />
      <Footer />
    </main>
  );
};

export default Home;
