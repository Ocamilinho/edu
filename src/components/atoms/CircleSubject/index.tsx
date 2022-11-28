import React from 'react'
import { TitleTemplate } from '../../templates/stylesTemplates'
import { Circleedusub, Flex } from './style'

function CircleSubject(props) {
  return (
    <Flex>
        <Circleedusub/>
        <TitleTemplate>{props.title}</TitleTemplate>
    </Flex>
  )
}

export default CircleSubject