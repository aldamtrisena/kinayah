import React from "react";
import {
  ContainerSection,
  FlexContain,
  Title,
  NamaPengajar,
  ImageMentor,
  BorderText,
  GridMentor,
  TextTestimoni,
  ImageDownSquare,
  ImageUpSquare,
  TextTesti2,
} from "./styled";

export default function SectionParaMentor() {
  return (
    <ContainerSection>
      <BorderText>
        <Title>Apa kata mereka?</Title>
      </BorderText>
      <GridMentor>
        <FlexContain>
          <ImageMentor src={"/picture/mentor_1.png"} />
          <NamaPengajar>Ustadz Subhan Bawazier</NamaPengajar>
          <TextTestimoni>
            &quot;imam hasan al basri mengatakan : tidak ada satu pun orang yang memuliakan harta kecuali Allah hinakan.
            Karena izzah Tak hanya harta melainkan Ketakwaan.. dalam sebuah syair &quot;ketahuilah bahwa takwa itu
            adalah Izzah, dan cintamu kepada dunia adalah kehinaan dan penyakit&quot;
          </TextTestimoni>
        </FlexContain>
        <FlexContain>
          <ImageMentor src={"/picture/mentor_2.png"} />
          <NamaPengajar>Ustadz Ammi</NamaPengajar>
          <TextTestimoni>
            &quot;tR Izzah menyediakan wadah untuk belajar dan berkembang bagi masyarakat, termasuk pebisnis. Terutama
            materi muamalah syariah yang dibutuhkan untuk mengawali, menjalankan, dan mengembangkan bisnis. Semoga
            memberi manfaat bagi umat Muslim menuju izzah&quot;
          </TextTestimoni>
          {/*  */}
        </FlexContain>
        <FlexContain>
          <ImageMentor src={"/picture/mentor_3.png"} />
          <NamaPengajar>Ustadz Muhammad</NamaPengajar>
          <TextTestimoni>
            &quot;imam hasan al basri mengatakan : tidak ada satu pun orang yang memuliakan harta kecuali Allah hinakan.
            Karena izzah Tak hanya harta melainkan Ketakwaan.. dalam sebuah syair &quot;ketahuilah bahwa takwa itu
            adalah Izzah, dan cintamu kepada dunia adalah kehinaan dan penyakit&quot;
          </TextTestimoni>
          {/*  */}
        </FlexContain>
        <FlexContain>
          <ImageMentor src={"/picture/mentor_4.png"} />
          <NamaPengajar>Ustadz Hamdi</NamaPengajar>
          <TextTestimoni>
            &quot;umar bin khatab mengatakan: dahulu kami adalah umat yang hinda kemudian Allah berikan kepada kami
            Izzah dengan Islam&quot; makan, barangsiapa yang mencari izzah. carilah di dalam islam!&quot;
          </TextTestimoni>
        </FlexContain>
        <FlexContain>
          <ImageMentor src={"/picture/mentor_5.png"} />
          <NamaPengajar>Mentor Dana</NamaPengajar>
          <TextTestimoni>
            &quot;Business model memberikan gambaran yang komperhensif tentang; apa yang telah kita lakukan, yang sedang
            di lakukan, dan apa yang akan dilakukan&quot;
          </TextTestimoni>
        </FlexContain>
        <FlexContain>
          <ImageMentor src={"/picture/mentor_6.png"} />
          <NamaPengajar>Mentor Yunus</NamaPengajar>
          <TextTestimoni>
            Pemasaran berbasis internet sangat cocok bagi UMKM karena konsep yang diusung yaitu Low Budget High Impact.
            di program Asah Izzah kita akan memahami strategi pemasaran berbasis internet yang lebih efisien dalam
            kegiatannya namun efektif dalam hasilnya..&quot;
          </TextTestimoni>
        </FlexContain>
        <FlexContain>
          <TextTesti2>
            Di program Asah izzah kita akan mempelajari lebih dalam mengenai business model dan business plan yang akan
            membantu anda untuk memahami pondasi bisnis anda. selain belajar, sobat izzah akan di dampingi dalam
            pelaksanaan bisnis dan untuk proses scale up tR Izzah akan memberikan akses pendanaan untuk bisnis anda..
          </TextTesti2>
        </FlexContain>
      </GridMentor>
      <ImageDownSquare src={"/picture/TR24 para mentor-07 1.png"} />
      <ImageUpSquare src={"/picture/TR24 para mentor-08 2.png"} />
    </ContainerSection>
  );
}
