import { createGlobalStyle } from 'styled-components'
import '@fontsource/atkinson-hyperlegible/700.css'

const GlobalStyles = createGlobalStyle`
  *,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    font-family: 'Atkinson Hyperlegible', sans;
    color: ${(props) => props.theme.textColor};
  }
  body {
      font-size: 18px;
      height: 100vh;
  }
`

export { GlobalStyles }
