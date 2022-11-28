import React from 'react'
import MiniPostIt from '../../atoms/minipostit'
import { NavBarHover, OptsNav } from './style'

function NavBar() {
  return (
    <NavBarHover>
        <OptsNav>
            <MiniPostIt name="Home" abrevi="H" link="/" color="red"/>
            <MiniPostIt name="Matérias" abrevi="M" link="/subjects"/>
            <MiniPostIt name="Atividades" abrevi="A" link="/atividades"/>
            <MiniPostIt name="Contribua" abrevi="C" link="/FAQ"/>
        </OptsNav>
    </NavBarHover>
  )
}

export default NavBar