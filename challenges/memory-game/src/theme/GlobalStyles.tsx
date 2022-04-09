import { createGlobalStyle } from 'styled-components'
import '@fontsource/atkinson-hyperlegible/700.css'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Atkinson Hyperlegible', sans;
  }
  body {
      font-size: 18px;
  }
`

export { GlobalStyles }
