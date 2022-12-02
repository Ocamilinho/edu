import React from "react";
import Card from "../../components/molecules/Card";
import Header from "../../components/templates/header";
import NavBar from "../../components/templates/NavBar";
import {
  ContainerSideTemplate,
  ContainerTemplate,
  TextTemplate,
  TitleTemplate,
} from "../../components/templates/stylesTemplates";

export default function Home() {
  return (
    <div>
      <ContainerTemplate>
        <ContainerSideTemplate>
          <div>
            <img src="/logo-6k.png" alt="" width="600px" />
          </div>
          <div>
            <TitleTemplate>Olá, nós somos a EDU</TitleTemplate>
            <TextTemplate>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              omnis atque temporibus. Perspiciatis culpa beatae accusamus!
              Minima repellendus, asperiores, tenetur, facilis accusamus
              aspernatur laborum obcaecati tempore quos a ex optio.
            </TextTemplate>
          </div>
        </ContainerSideTemplate>
      </ContainerTemplate>
      <ContainerTemplate>
        <ContainerSideTemplate>
          <Card title="1- Exemplo" color="var(--vermelho)">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            tempora unde.
          </Card>
          <Card title="2-Exemplo" color="var(--vermelho)">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            tempora unde.
          </Card>
          <Card title="3- Exemplo" color="var(--vermelho)">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            tempora unde.
          </Card>
        </ContainerSideTemplate>
      </ContainerTemplate>
    </div>
  );
}
