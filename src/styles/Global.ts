import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');\

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.backgroundColor || '#F2F2F2'};
    color: ${({ theme }) => theme.color || '#222326'};
    font-family: 'Poppins', sans-serif;
    margin: 0;
}
`

export default GlobalStyles