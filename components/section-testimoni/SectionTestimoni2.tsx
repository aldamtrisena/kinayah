import React, { useState } from "react";
import styled from "styled-components";
import { FotoUSerBawah, ListWhite2, VideoYoutube, VideoYoutube2 } from "./styled";

const ContainerSection = styled.section`
  background-image: url("/picture/bg_section_10.png");
  width: 100%;
  background-color: #24ce7b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 16px;
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
    top: 0px;
    left: -21px;
  }
  ::after {
    content: url("/picture/kutip_tutup.png");
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 29px;
    text-align: center;
    width: 100%;
    ::before {
      display: none;
    }

    ::after {
      display: none;
    }
  }
`;
export default function SectionTestimoni2() {
  const [view_video, setViewVideo] = useState(false);

  return (
    <ContainerSection>
      <FotoUSerBawah
        style={{ visibility: view_video ? "hidden" : "visible" }}
        onClick={() => {
          setViewVideo(true);
        }}
        src={"/picture/user_bawah.png"}
      />
      <VideoYoutube2
        id="myVideouki"
        style={{ display: !view_video ? "none" : "" }}
        src="https://www.youtube.com/embed/ZeJHYuDqhUg?autoplay=1"
        frameBorder="0"
        allowFullScreen
        allow="autoplay;"
      />
      <ListWhite2 />
      <TestimonyText>
        {" "}
        Manfaat pertama yang saya rasakan adalah memposisikan niat dalam menjalankan usaha. Harus lillahi ta’ala. Bukan
        semata-mata mencari dunia saja, tapi juga ada akhiratnya. Manfaat kedua sebagai wadah untuk bertemu teman-teman
        yang berjalan di atas kaidah yang benar dalam menjalankan usahanya. Manfaat ketiga untuk mencari permodalan
        dengan pembekalan yang sudah diberikan.
      </TestimonyText>
    </ContainerSection>
  );
}
