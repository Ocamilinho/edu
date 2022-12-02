import styled from "styled-components";

export const ButtonNavTemplate = styled.button`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:10px;
    background-color: #050505;
    border-radius:5px;
    font-size: 20px;
`
export const ContainerTemplate = styled.div`
    display:flex;
    align-items: center ;
    justify-content:center;
    flex-direction:column;
    margin-left: 40px;
    padding: 30px;
    gap:10px;
`

export const ContainerTemplateNoMargin = styled.div`
    display:flex;
    align-items: center ;
    justify-content:center;
    flex-direction:column;
    padding: 10px;
    gap:10px;
`

export const ContainerTemplateContent = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    gap:20px;
    margin-left: 40px;
    padding: 30px;
`

export const TitleTemplate = styled.h1`
    font-size: 27px;
    font-weight: 500;
`

export const TextTemplate = styled.p`
    font-family: 'Work Sans';
    font-size: 20px;
`

export const ContainerSideTemplate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80vw;
    padding: 0px;
    gap: 30px;

    @media (max-width:600px){
        flex-wrap: wrap;
    }
    
`
