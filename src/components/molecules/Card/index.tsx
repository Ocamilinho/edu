import React, { Children } from 'react'
import { TextTemplate, TitleTemplate } from '../../templates/stylesTemplates'
import { Divcard } from './style'

function Card(props) {
  return (
    <Divcard color={props.color}>
            <TitleTemplate>{props.title}</TitleTemplate>
            <TextTemplate>
              {props.children}
            </TextTemplate>
    </Divcard>
  )
}

export default Card