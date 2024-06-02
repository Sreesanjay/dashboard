import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: rgb(${({ theme }) => theme.accent});
  padding: 10px 20px;
  width: 100%;
  position: sticky;
  top: 0;
  color: white;
  display: flex;
  justify-content: space-between;

  h1{
    font-size: ${({ theme }) => theme.fonts.f1}
  }

`

export const PageHeading = styled.h2`
  margin: 20px 0;
`