import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import HeaderSection from "../../components/HomePage/Section1/HeaderSection";
import Navbar from "../../components/Navbar/Navbar";
import InterestSection from "../../components/SectionInterest/InterestSection";
import AboutSectionType from "../../components/UnitType/AboutSectionType/AboutSectionType";
import AllTipeUnitList from "../../components/UnitType/AllTipeUnitList/AllTipeUnitList";
import HeadersUnitType from "../../components/UnitType/HeadersUnitType/HeadersUnitType";
import MapsUnit from "../../components/UnitType/MapUnit/MapsUnit";

const UnitTypePage = () => {
  return (
    <main>
      <Navbar />
      <HeadersUnitType />
      <AboutSectionType
        media={"/picture/about-kinaya-tipe.png"}
        textAbout={
          <>
            About <br />
            Pringgondani
          </>
        }
        linkName={
          <>
            <span>Home</span> / Unit Type
          </>
        }
      />
      <AllTipeUnitList />
      <MapsUnit />
      <InterestSection />
      <Footer />
    </main>
  );
};

export default UnitTypePage;
