import React, { Children } from 'react'
import { TextTemplate, TitleTemplate } from '../../templates/stylesTemplates'
import { Divcard } from './style'

function Card(props, {Children}) {
  return (
    <Divcard>
            <TitleTemplate>{props.title}</TitleTemplate>
            <TextTemplate>
              {props.children}
            </TextTemplate>
    </Divcard>
  )
}

export default Card