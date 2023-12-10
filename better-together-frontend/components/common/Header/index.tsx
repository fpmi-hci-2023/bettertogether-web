import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <Flex
      width='100%'
      height='80px'
      position='fixed'
      top={0}
      left={0}
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='darkBlue'
      padding='10px 16px'
      zIndex='1'
    >
      <Link href='/login'>
        <Image
          src='/static/icons/better-together-logo.svg'
          alt='logo'
          width='60'
          height='60'
        />
      </Link>

      <Link href='/profile'>
        <Box
          width='60px'
          height='60px'
          borderRadius='50%'
          overflow='hidden'
        >
          <Image
            src='/static/images/person.png'
            alt='logo'
            width={60}
            height={60}
          />
        </Box>
      </Link>
    </Flex>
  );
};
