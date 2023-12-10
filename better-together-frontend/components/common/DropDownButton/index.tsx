import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface DropDownButtonProps {
  children?: ReactNode;
}

export const DropDownButton: FC<DropDownButtonProps> = ({ children }) => {
  return (
    <Flex
      as='button'
      width='100%'
      height='40px'
      top={0}
      left={0}
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='lightBlue'
      borderRadius='20px'
      padding='8px 14px'
      gap='10px'
    >
      <Text
        color='lightGray'
        fontSize='20px'
      >
        {children}
      </Text>
      <Image
        src='/static/icons/expand.svg'
        alt='logo'
        width={20}
        height={20}
      />
    </Flex>
  );
};
