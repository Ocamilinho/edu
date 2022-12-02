import Link from 'next/link'
import React from 'react'
import { TitleTemplate } from '../../templates/stylesTemplates'
import { Circleedusub, Flex } from './style'

function CircleSubject(props) {
  return (
      <Flex>
          <Circleedusub color={props.color}>{props.number}</Circleedusub>
          <TitleTemplate>{props.title}</TitleTemplate>
      </Flex>
  );
}

export default CircleSubject