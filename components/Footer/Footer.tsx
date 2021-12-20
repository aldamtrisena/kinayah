import React from "react";
import { Container, FacebookIcon, LineFooter, InstagramIcon, YoutubeIcon, TextSosmed } from "./styled";

export default function Footer() {
  return (
    <>
      <Container>
        <div
          onClick={() => window.open("https://www.instagram.com/menujuizzah/")}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        >
          <InstagramIcon src={"/picture/instagram.png"} />
          <TextSosmed>menujuizzah</TextSosmed>
        </div>
        <div
          onClick={() => window.open("https://www.facebook.com/menuju.izzah")}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        >
          <InstagramIcon src={"/picture/facebook.png"} />
          <TextSosmed>menujuizzah</TextSosmed>
        </div>
        <div
          onClick={() => window.open("https://www.youtube.com/channel/UCtpggaggOsOQIVCjtavmmeg")}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        >
          <InstagramIcon src={"/picture/youtube.png"} />
          <TextSosmed>MenujuIzzah</TextSosmed>
        </div>
      </Container>
      <LineFooter />
    </>
  );
}
