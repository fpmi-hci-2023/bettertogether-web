import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

const LabeledInput: FC<FlexProps> = ({ children, ...containerProps }) => {
  return (
    <Flex
      width='100%'
      flexDirection='column'
      justifyContent='start'
      alignItems='start'
      gap='6px'
      {...containerProps}
    >
      {children}
    </Flex>
  );
};

export default LabeledInput;
