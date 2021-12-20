import Image from "next/image";
import {
  Container,
  Paragraf,
  Title,
  BingkaiHijau,
  ContainerImageUp,
  GridContain,
  ContainContainer,
  ImageTokoh,
  ContainerPicture,
  ContainerButton,
  ScaleUpButton,
  ContainerImageDown
} from "./styled";

export default function SectionKeresahan() {
  return (
    <Container>
      <Title>Yuk, simak video keresahan rekan kita di bawah ini!</Title>
      <ContainerImageUp src={"/picture/TR24 para mentor-08 3.png"} alt="squre" />
      <GridContain>
        <ContainContainer>
          <ContainerPicture>
            <BingkaiHijau />
            <ImageTokoh src={"/picture/UKI_atas.png"} alt="foto_uki" />
          </ContainerPicture>
          <Paragraf>
            “Ingin tahu fiqih jual beli dan perlu mengerti bisnis supaya tahu halal/haramnya dan bisa membaca arah
            bisnis 5 – 10 tahun ke depan yang aman dari sisi agama sehingga bisnis bisa berkembang dan manfaat buat
            orang banyak, dan untuk mengembangkan dunianya dan akhiratnya.”{" "}
          </Paragraf>
        </ContainContainer>
        <ContainContainer>
          <ContainerPicture>
            <BingkaiHijau />
            <ImageTokoh src={"/picture/Anto_atas.png"} alt="foto_uki" />
          </ContainerPicture>
          <Paragraf>
            “Pengalaman lebih dari satu dekade di korporasi keuangan pada divisi business planning. Ketika resign dan
            terjun ke bisnis, alhamdulillah berhasil bikin business planning. Tapi eksekusinya ternyata gak mudah. Beda
            lagi. Eksekusi (jualan) ini ilmu yang lain lagi.”
          </Paragraf>
        </ContainContainer>
      </GridContain>
      <ContainerButton onClick={() => window.open('https://trizzah.co.id/join/')}>
        <ScaleUpButton>SCALE UP !</ScaleUpButton>
      </ContainerButton>
      <ContainerImageDown src={"/picture/TR24 para mentor-08 2.png"} alt="squre"/>
    </Container>
  );
}
