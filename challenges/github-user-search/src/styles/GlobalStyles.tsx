import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Space Mono";
    font-size: 16px;
    line-height: 25px;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor}
  }

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: ${(props) => props.theme.headingColor}
  }

  h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: ${(props) => props.theme.headingColor}
  }

  h3 {
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.headingColor}
  }

  h4 {
    font-size: 13px;
    line-height: 20px;
    color: ${(props) => props.theme.headingColor}
  }
`

export { GlobalStyles }
