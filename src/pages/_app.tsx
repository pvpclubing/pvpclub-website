import 'src/styles/reset.css';
import React, { FC } from 'react';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import themes from 'src/styles/themes';
import GlobalStyle from 'src/styles/global';
import Layout from 'src/components/Layout';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={themes.light}>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
