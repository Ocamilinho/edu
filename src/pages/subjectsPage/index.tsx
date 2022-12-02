import React from 'react'
import CircleSubject from '../../components/atoms/CircleSubject'
import Card from '../../components/molecules/Card'
import { ContainerSideTemplate, ContainerTemplate, ContainerTemplateContent, ContainerTemplateNoMargin, TitleTemplate } from '../../components/templates/stylesTemplates'
import { ListCircle } from './styles'

function SubjectPage() {
  return (
    <div>
      <ContainerTemplateContent>
        <ContainerSideTemplate>
          <ContainerTemplateNoMargin>
            <TitleTemplate>Minimalistas</TitleTemplate>
            <ListCircle>
              <CircleSubject title="Ciências" number="1" color="var(--verdesub)"/>
              <CircleSubject title="História" number="2" color="var(--marromsub)"/>
              <CircleSubject title="Geografia" number="3" color="var(--amarelosub)"/>
            </ListCircle>
          </ContainerTemplateNoMargin>
          <ContainerTemplateNoMargin>
            <TitleTemplate>Aprofundados</TitleTemplate>
            <ListCircle>
              <CircleSubject title="Matematica" number="1" color="var(--vermelhosub)"/>
              <CircleSubject title="Português" number="2" color="var(--azulsub)"/>
            </ListCircle>
          </ContainerTemplateNoMargin>
          <ContainerTemplateNoMargin>
            <Card title="Matematica" color="var(--vermelho)">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quis, sint aliquid.</Card>
          </ContainerTemplateNoMargin>
          
        </ContainerSideTemplate>
      </ContainerTemplateContent>
    </div>
  )
}

export default SubjectPage