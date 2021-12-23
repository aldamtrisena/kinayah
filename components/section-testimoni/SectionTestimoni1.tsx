import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title, FotoUki, ListWhite, VideoYoutube } from "./styled";

const SectionContainer = styled.section`
  background-image: url("/picture/bg_section_9.png");
  width: 100%;
  background-color: #24ce7b;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px 16px;
    box-sizing: border-box;
  }
`;

export const TestimonyText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  width: 85%;
  color: #0d0c1f;
  position: relative;

  ::before {
    content: url("/picture/kutip_buka.png");
    position: absolute;
    top: 0;
    left: 0;
  }

  ::after {
    content: url("/picture/kutip_tutup.png");
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 22px;
    text-align: center;
    width: 92%;

    ::before {
      display: none;
    }

    ::after {
      display: none;
    }
  }
`;

export default function SectionTestimoniSatu() {
  const [view_video, setViewVideo] = useState(false);

  // let video: any;
  // if (typeof document !== "undefined") {
  //   // will run in client's browser only
  //   video = document.getElementById("video");
  // }

  // console.log(video);

  return (
    <SectionContainer>
      <Title>Yuk, simak video testimoni peserta program Asah Izzah berikut ini:</Title>
      <FotoUki
        style={{ visibility: view_video ? "hidden" : "visible" }}
        onClick={() => {
          setViewVideo(true);
        }}
        src={"/picture/uki_bawah.png"}
      />
      <VideoYoutube
        id="video"
        style={{ display: !view_video ? "none" : "" }}
        src="https://www.youtube.com/embed/ZeJHYuDqhUg?autoplay=1"
        frameBorder="0"
        allowFullScreen
        allow="autoPlay"
      />
      <ListWhite />
      <TestimonyText>
        Ingin tahu fiqih jual beli dan perlu mengerti bisnis supaya tahu halal/haramnya dan bisa membaca arah bisnis 5 –
        10 tahun ke depan yang aman dari sisi agama sehingga bisnis bisa berkembang dan manfaat buat orang banyak, dan
        untuk mengembangkan dunianya dan akhiratnya.
      </TestimonyText>
    </SectionContainer>
  );
}
