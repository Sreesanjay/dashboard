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

export const LargeButton = styled.button`
      background-color: rgb(${({ theme }) => theme.accent});
      border: 2px solid white;
      padding: 5px 10px;
      color: white;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: rgb(${({ theme }) => theme.secondary});
      }
`

export const ButtonGroup = styled.div`
      display: flex;
      gap: 10px;
`
export const FormButton = styled.button<props>`
  background-color:  ${props => props.background || 'rgb(119, 125, 247)'};
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    transform: scale(1.01)
  }
`;