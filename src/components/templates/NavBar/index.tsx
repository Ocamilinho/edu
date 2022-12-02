import React from 'react'
import MiniPostIt from '../../atoms/minipostit'
import { NavBarHover, OptsNav } from './style'
import {AiFillBook, AiFillHome} from 'react-icons/ai'
import {BsFillPenFill} from 'react-icons/bs'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
function NavBar() {
  return (
    <NavBarHover>
        <OptsNav>
            <MiniPostIt name="Home" link="/" color="var(--vermelhonav)" abrevi={<AiFillHome/>}/>
            <MiniPostIt name="Matérias" link="/subjects" color="var(--amarelonav)" abrevi={<AiFillBook/>}/>
            <MiniPostIt name="Atividades" link="/atividades" color="var(--azulnav)" abrevi={<BsFillPenFill/>}/>
            <MiniPostIt name="Contribua" link="/FAQ" color="var(--azulnav2)" abrevi={<RiMoneyDollarCircleFill/>}/>
            
        </OptsNav>
    </NavBarHover>
  )
}

export default NavBar