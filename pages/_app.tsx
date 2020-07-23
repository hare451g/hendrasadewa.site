import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../app/components/styled/GlobalStyles';
import { lightTheme } from '../app/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
