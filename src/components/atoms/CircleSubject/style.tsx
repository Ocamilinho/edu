import styled from "styled-components"

export const Circleedusub = styled.span`
   width:60px;
   height: 60px;
   display:flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   border-radius: 100px;
   background-color: ${(props) => `${props.color}`};
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`