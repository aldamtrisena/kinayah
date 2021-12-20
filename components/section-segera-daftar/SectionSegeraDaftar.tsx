import React from "react";
import { ContainerSection, PriceText, Title, MarginBorder, SubTitle, Title2, LineText, TextGratis } from "./styled";

export default function SectionSegeraDaftar() {
  return (
    <ContainerSection>
      <Title>SEGERA DAFTAR !</Title>
      <SubTitle>dan dapatkan biaya investasi spesial berikut:</SubTitle>
      <PriceText>
        Early Bird Price (Rp 3.750.000) : 19 - 30 Nov 2021 <br />
        Discount Price (Rp 4.000.000) : 1 - 20 Dec 2021 <br />
        Normal Price (Rp 4.500.000) : 21 Dec 2021 - 9 Jan 2022{" "}
      </PriceText>
      <MarginBorder />
      <LineText />
      <Title2>BENEFIT PROGRAM ASAH IZZAH:</Title2>
      <LineText />
      <TextGratis>
        <span>GRATIS</span> materi pelatihan ilmu agama dan ilmu bisnis (flashdisk + soft copy) <br />
        <span>GRATIS</span> e-certificate dari tR Izzah <br />
        <span>GRATIS</span> pendampingan (konsultasi) via WhatsApp Group langsung dengan ahli ilmu dan para mentor
        selama pelatihan berlangsung <br />
        <span>GRATIS</span> souvenir tR Izzah (notebook, tote bag, dan flashdisk)
      </TextGratis>
    </ContainerSection>
  );
}
