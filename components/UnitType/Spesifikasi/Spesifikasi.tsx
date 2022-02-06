import React from "react";
import WhyComponent from "../../HomePage/WhyComponent/WhyComponent";
import { Conatiner, BoxContain, TitleText, SmallText, BoxText } from "./styled";

const Spesifikasi = () => {
  return (
    <Conatiner>
      <BoxContain>
        <BoxText>
          <TitleText>Pondasi</TitleText>
          <div>
            <SmallText>Beton Bertulang (Pondasi Setempat, Sloof)</SmallText>
            <SmallText>Batu Kali (Pondasi Lajur)</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Dinding</TitleText>
          <div>
            <SmallText>Bata Merah Plaster Aci, Finish Cat</SmallText>
            <SmallText>Kamar Mandi : Granit 60x60cm</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Lantai</TitleText>
          <div>
            <SmallText>Lantai Utama : Granit 60x60cm</SmallText>
            <SmallText>Lantai Kamar Mandi : Granit 60x60cm</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Fasad Depan</TitleText>
          <div>
            <SmallText>Batu Alam Dengan Motif Ukiran Paras Jogja </SmallText>
            <SmallText>dan Batu Adensit Susun Sirih</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Cat</TitleText>
          <div>
            <SmallText>Dinding Dalam : Catylac/Setara</SmallText>
            <SmallText>BDinding Luar : Dulux Watershield/Setara</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Daun Pintu</TitleText>
          <div>
            <SmallText>Pintu Depan : Engineering Wood</SmallText>
            <SmallText>Pintu Dalam : Engineering Wood</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Atap</TitleText>
          <div>
            <SmallText>Genteng Keramik Berglazur</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Struktur</TitleText>
          <div>
            <SmallText>Beton Bertulang</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Kusen</TitleText>
          <div>
            <SmallText>Engineering Wood</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Plafond</TitleText>
          <div>
            <SmallText>Rangka Hollow, Gypsum Board Finish Cat</SmallText>
            <SmallText>Pintu Dalam : Engineering Wood</SmallText>
          </div>
        </BoxText>
        <BoxText style={{ height: "250px" }}>
          <TitleText>Ultilitas</TitleText>
          <div>
            <SmallText>Listrik : PLN 2200 watt Underground Cable</SmallText>
            <SmallText>Air Bersih : Sumur Bor Jet Pump & Water Tank</SmallText>
            <SmallText>Telepon : Instalasi Telkom, Fiber Optik (IndieHome)</SmallText>
            <SmallText>Kemanan : CCTV di Setiap CLuster</SmallText>
            <SmallText>Pembuangan Sampah Terpadu PJU</SmallText>
          </div>
        </BoxText>
        <BoxText>
          <TitleText>Sanitair</TitleText>
          <div>
            <SmallText>Closet Duduk (TOTO/Setara), Shower</SmallText>
          </div>
        </BoxText>
      </BoxContain>
      <WhyComponent top="200px" text="Spesifikasi" />
    </Conatiner>
  );
};

export default Spesifikasi;
