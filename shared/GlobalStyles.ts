import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  :root {
    ${({
      theme: {
        colors,
        typography: { fontFamily },
      },
    }) => css`
      font-family: ${fontFamily.primary};
      font-weight: normal;
      font-size: 16px;
      color: ${colors.text.body};
      padding: 0px;
      margin: 0px;
      background: ${colors.background.body};
    `}
  }
  
  body {
    margin: 0;
  }
  
`;

export default GlobalStyles;
