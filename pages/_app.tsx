import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../shared/GlobalStyles';
import { lightTheme } from '../theme';

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
