import { useRouter } from "next/router";
import React from "react";
import { Container, BoxContent, Paragaraf, ContainerList, Image } from "./styled";

const AllTipeUnitList = () => {
  const router = useRouter();
  return (
    <Container>
      <BoxContent>
        <ContainerList>
          <Image src="/picture/tipe-72.png" alt="tipe72" onClick={() => router.push("/unit-type/tipe-120")} />
          <Paragaraf>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur laboriosam, minima velit quasi
            cumque porro sint est rerum eligendi debitis doloremque quibusdam? Provident corporis veritatis similique
            vitae iusto ducimus.
          </Paragaraf>
        </ContainerList>
        <ContainerList>
          <Image src="/picture/tipe-90.png" alt="tipe90" onClick={() => router.push("/unit-type/tipe-120")} />
          <Paragaraf>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur laboriosam, minima velit quasi
            cumque porro sint est rerum eligendi debitis doloremque quibusdam? Provident corporis veritatis similique
            vitae iusto ducimus.
          </Paragaraf>
        </ContainerList>
        <ContainerList>
          <Image src="/picture/tipe-120.png" alt="tipe72" onClick={() => router.push("/unit-type/tipe-120")} />
          <Paragaraf>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur laboriosam, minima velit quasi
            cumque porro sint est rerum eligendi debitis doloremque quibusdam? Provident corporis veritatis similique
            vitae iusto ducimus.
          </Paragaraf>
        </ContainerList>
      </BoxContent>
    </Container>
  );
};

export default AllTipeUnitList;
