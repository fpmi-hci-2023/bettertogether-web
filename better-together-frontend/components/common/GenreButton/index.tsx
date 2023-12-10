import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface GenreButtonProps {
  children?: ReactNode;
}

export const GenreButton: FC<GenreButtonProps> = ({ children }) => {
  return (
    <Flex
      as='button'
      width='fit-content'
      height='40px'
      top={0}
      left={0}
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='lightBlue'
      borderRadius='20px'
      padding='8px 14px'
      gap='40px'
    >
      <Text
        color='lightGray'
        fontSize='20px'
      >
        {children}
      </Text>
      <Image
        src='/static/icons/cross.svg'
        alt='logo'
        width={15}
        height={15}
      />
    </Flex>
  );
};
