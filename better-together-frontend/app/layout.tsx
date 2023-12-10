'use client';

import { Box } from '@chakra-ui/react';

import { Header } from '@/components/common/Header';

import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Box
            width='100%'
            height='100%'
            position='fixed'
            backgroundImage={`url('static/images/background.png')`}
            bgRepeat='no-repeat'
            bgSize='cover'
            filter='auto'
            blur='10px'
            transform='scale(1.1)'
          ></Box>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
