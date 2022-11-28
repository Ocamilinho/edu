import React from "react";
import Button from "../../components/atoms/Button";
import Header from "../../components/templates/header";
import NavBar from "../../components/templates/NavBar";
import {
  ButtonNavTemplate,
  ContainerTemplate,
  ContainerTemplateContent,
  TextTemplate,
  TitleTemplate,
} from "../../components/templates/stylesTemplates";

function FaqPage() {
  return (
    <div>
      <Header linkName="FAQ" />
      <NavBar />
      <ContainerTemplateContent>
        <div>
          <TitleTemplate>Faça Parte de Algo Maior</TitleTemplate>
          <TextTemplate>
            Tudo o que fazemos tem 100% de código aberto e é desenvolvido de
            forma colaborativa por pessoas de todas as partes do mundo. Mesmo se
            não for um programador, você pode participar e fazer diferença.
          </TextTemplate>
        </div>
        <div>
          <TitleTemplate>Financiamento</TitleTemplate>
          <TextTemplate>
            Com a ajuda de nossos usuários e fãs, conseguimos passar de um
            pequeno grupo de voluntários apaixonados para uma pequena, mas
            sustentável empresa. Todo pequeno suporte nos ajuda a melhorar o
            elementary OS e a enfrentar problemas ainda mais ambiciosos.
          </TextTemplate>
          <Button title="Paypal" href="https://paypal.com.br"/>
        </div>
      </ContainerTemplateContent>
    </div>
  );
}

export default FaqPage;
