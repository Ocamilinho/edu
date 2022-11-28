import React from 'react'
import { ButtonEdu } from './style'

function Button(props) {
  return (
    <div>
        <a href={props.href}><ButtonEdu>{props.title}</ButtonEdu></a>
    </div>
  )
}

export default Button