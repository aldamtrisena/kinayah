import React from "react";
import WhyComponent from "../../HomePage/WhyComponent/WhyComponent";
import { ContainerSection, BoxCotain, Text, Image, FlexImage } from "./styled";

const DetailTipe = () => {
  return (
    <ContainerSection>
      <BoxCotain>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut accusantium aliquam. Sit repudiandae
          laborum iure quo. Quos quibusdam nostrum neque eaque dolor aliquid accusantium corporis natus cumque. Hic,
          adipisci. Minima, dicta assumenda illum nihil soluta provident excepturi voluptatibus nulla obcaecati corrupti
          laudantium error quibusdam qui ab earum, quod ipsam tenetur hic voluptatem eius perferendis et inventore?
          Necessitatibus, nostrum voluptatum.
        </Text>
        <FlexImage>
          <Image src="/picture/ss-bawah.png" />
          <Image src="/picture/ss-atas.png" />
          <Image src="/picture/ss-facili.png" alt="foto" style={{ width: "388px " }} />
        </FlexImage>
      </BoxCotain>
      <WhyComponent top="140px" text="Tipe 120" />
    </ContainerSection>
  );
};

export default DetailTipe;
