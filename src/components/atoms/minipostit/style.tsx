import styled from "styled-components";

export const FundoPostIt = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 50px;
    padding: 20px;
    font-family: 'Space Grotesk';
    border-radius: 5px;
    transition: .6s;
    background-color: var(--fundocard);
    &:hover,
  &:focus{
    translate: +150px;
  }
`

export const FontTitleSpan = styled.span`
    font-size: 20px;
`