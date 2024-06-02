import styled from "styled-components"

type props = {
    background?: string;
    color?: string;
    border?: string;
}

export const TableButton = styled.button<props>`
    border: none;
    background: transparent;
    margin-right: 10px;
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
      height: 45px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        background-color: rgb(${({ theme }) => theme.secondary});
      }
`

export const ButtonGroup = styled.div`
      display: flex;
      gap: 10px;
      margin: 20px 0;
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