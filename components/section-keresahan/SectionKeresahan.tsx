import Image from "next/image";
import { useState } from "react";
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
  ContainerImageDown,
  VideoYoutube,
  ContainerVideo,
} from "./styled";

export default function SectionKeresahan() {
  const [view_video_uki, setVideoUki] = useState<boolean>(false);
  const [view_video_anto, setVideoAnto] = useState(false);

  return (
    <Container>
      <Title>Yuk, simak video keresahan rekan kita di bawah ini!</Title>
      <ContainerImageUp src={"/picture/TR24 para mentor-08 3.png"} alt="squre" />
      <GridContain>
        <ContainContainer>
          <ContainerPicture>
            <BingkaiHijau />
            <VideoYoutube
              style={{ display: view_video_uki ? "" : "none" }}
              src="https://www.youtube.com/embed/syNBPHYM5uI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <ImageTokoh
              style={{ display: !view_video_uki ? "" : "none" }}
              src={"/picture/UKI_atas.png"}
              alt="foto_uki"
              onClick={() => setVideoUki(true)}
            />
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
            {/* <ContainerVideo> */}
            <VideoYoutube
              style={{ display: view_video_anto ? "" : "none" }}
              src="https://www.youtube.com/embed/1SmQK9ltK_s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            {/* </ContainerVideo> */}
            <ImageTokoh
              style={{ display: !view_video_anto ? "" : "none" }}
              src={"/picture/Anto_atas.png"}
              alt="foto_uki"
              onClick={() => setVideoAnto(true)}
            />
          </ContainerPicture>
          <Paragraf>
            “Pengalaman lebih dari satu dekade di korporasi keuangan pada divisi business planning. Ketika resign dan
            terjun ke bisnis, alhamdulillah berhasil bikin business planning. Tapi eksekusinya ternyata gak mudah. Beda
            lagi. Eksekusi (jualan) ini ilmu yang lain lagi.”
          </Paragraf>
        </ContainContainer>
      </GridContain>
      <ContainerButton onClick={() => window.open("https://trizzah.co.id/join/")}>
        <ScaleUpButton>SCALE UP !</ScaleUpButton>
      </ContainerButton>
      <ContainerImageDown src={"/picture/TR24 para mentor-08 2.png"} alt="squre" />
    </Container>
  );
}
