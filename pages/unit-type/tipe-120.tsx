import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import InterestSection from "../../components/SectionInterest/InterestSection";
import AboutSectionType from "../../components/UnitType/AboutSectionType/AboutSectionType";
import DetailTipe from "../../components/UnitType/DetailTipe/DetailTipe";
import ExteriorUnit from "../../components/UnitType/Ekterior/ExteriorUnit";
import HeadersUnitType from "../../components/UnitType/HeadersUnitType/HeadersUnitType";
import Spesifikasi from "../../components/UnitType/Spesifikasi/Spesifikasi";

const Tipe120Page = () => {
  return (
    <main>
      <Navbar />
      <HeadersUnitType />
      <AboutSectionType
        media={"/picture/tipe120.png"}
        textAbout={"Interior"}
        linkName={
          <>
            <span>Home</span> / <span>Unit Type</span> / Type 120
          </>
        }
      />
      <DetailTipe />
      <ExteriorUnit />
      <Spesifikasi />
      <InterestSection />
      <Footer />
    </main>
  );
};

export default Tipe120Page;
