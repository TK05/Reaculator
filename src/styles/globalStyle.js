import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  * {
    transition: background 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
`

export default GlobalStyle
