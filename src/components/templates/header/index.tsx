import React from 'react'
import { ButtonNavTemplate } from '../stylesTemplates'
import { HeaderNav } from './styles'

function Header() {
    return (
        <HeaderNav>
            <img src="/logo-3k.png" alt="" />
            <ButtonNavTemplate>Contato</ButtonNavTemplate>
        </HeaderNav>
    )
}

export default Header