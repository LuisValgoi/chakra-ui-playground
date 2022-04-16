import { extendTheme, ChakraTheme } from '@chakra-ui/react';

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'light',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
};

export const theme = extendTheme(customTheme);
