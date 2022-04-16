import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '~/components/Header';
import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>@luisvalgoi</title>
      </Head>

      <ChakraProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Component {...pageProps}></Component>
        </React.Fragment>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
