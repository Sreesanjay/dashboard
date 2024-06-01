import styled from "styled-components"

type props = {
    background?: string;
    color?: string;
    border?: string;
}

export const TableButton = styled.button<props>`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'black'};
    border: 1px solid ${props => props.border || 'gray'};
    border-radius: 3px;
    padding: 2px 10px;
    opacity: 0.9;
    cursor: pointer;

    &:hover {
        opacity: 1;
        transform: scale(1.02)
      }
`