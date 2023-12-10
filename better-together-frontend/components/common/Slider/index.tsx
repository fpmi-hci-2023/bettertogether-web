import { Flex, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface SliderProps {
  title: string;
  children: ReactNode;
}

export const Slider: FC<SliderProps> = ({ title, children }) => {
  return (
    <Flex
      flexDirection='column'
      width='100%'
      gap='10px'
      overflow='hidden'
    >
      <Text
        color='#FFFFFF'
        fontSize={{ lg: '3xl' }}
      >
        {title}
      </Text>
      <Flex
        gap='40px'
        wrap='nowrap'
        width='fit-content'
      >
        {children}
      </Flex>
    </Flex>
  );
};
