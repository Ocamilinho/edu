import React from 'react'
import CircleSubject from '../../components/atoms/CircleSubject'
import Card from '../../components/molecules/Card'
import { ContainerSideTemplate, ContainerTemplate, ContainerTemplateContent, TitleTemplate } from '../../components/templates/stylesTemplates'
import { ListCircle } from './styles'

function SubjectPage() {
  return (
    <div>
      <ContainerTemplateContent>
        <ContainerSideTemplate>
          <ContainerTemplate>
            <TitleTemplate>Minimalistas</TitleTemplate>
            <ListCircle>
              <CircleSubject title="Ciências" number="1" color="red"/>
              <CircleSubject title="História" number="2"/>
              <CircleSubject title="Geografia" number="3"/>
            </ListCircle>
          </ContainerTemplate>
          <ContainerTemplate>
            <TitleTemplate>Aprofundados</TitleTemplate>
            <ListCircle>
              <CircleSubject title="Matematica" number="1"/>
              <CircleSubject title="Português" number="2"/>
            </ListCircle>
          </ContainerTemplate>
          <ContainerTemplate>
            <Card title="Matematica">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quis, sint aliquid.</Card>
          </ContainerTemplate>
          
        </ContainerSideTemplate>
      </ContainerTemplateContent>
    </div>
  )
}

export default SubjectPage