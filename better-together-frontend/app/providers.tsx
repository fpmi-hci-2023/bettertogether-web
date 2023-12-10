import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';

import { customTheme } from '@/theme';

const inter = Inter({ subsets: ['latin'] });

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <style
        jsx
        global
      >
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider
          theme={customTheme}
          resetCSS
        >
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
};

export default Providers;
