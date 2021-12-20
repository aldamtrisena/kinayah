import React from "react";
import { ContainerSection, Title, LineBlack, JadwalText, WarningText, IconBackground, IconImage } from "./styled";

export default function SectionInfoProgram() {
  return (
    <ContainerSection>
      <IconBackground>
        <IconImage src={"/picture/icon_key.png"} />
      </IconBackground>
      <Title>INFO PROGRAM</Title>
      <LineBlack />
      <JadwalText>
        Biaya investasi : Rp 4.500.000 <br />
        Durasi : 30 Kali Pertemuan <br />
        Periode : 10 Jan- 10 Mar 2022* (Senin - Kamis) <br />
        Tempat : LIVE Streaming via aplikasi Zoom Cloud Meetings <br />
        Registrasi : 19 Nov - 9 Jan 2022 <br />
        Waktu Pelatihan : 09.00am - 11.00am
      </JadwalText>
      <WarningText>
        * Jadwal dapat berubah sewaktu-waktu. Pemberitahuan akan diinformasikan satu pekan sebelumnya.
      </WarningText>
    </ContainerSection>
  );
}
