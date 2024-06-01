import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: rgba(${({ theme }) => theme.accent}, 0.8);
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);

  h1{
    font-size: ${({ theme }) => theme.fonts.f1}
  }

`