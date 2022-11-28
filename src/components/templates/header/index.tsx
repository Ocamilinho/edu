import React from "react";
import { ButtonNavTemplate, TitleTemplate } from "../stylesTemplates";
import { HeaderNav, HeaderNavCont } from "./styles";

function Header(props) {
  return (
    <HeaderNav>
      <HeaderNavCont>
        <img src="/logo-3k.png" alt="" />
        <TitleTemplate>{props.linkName}</TitleTemplate>
      </HeaderNavCont>

      <ButtonNavTemplate>Contato</ButtonNavTemplate>
    </HeaderNav>
  );
}

export default Header;
