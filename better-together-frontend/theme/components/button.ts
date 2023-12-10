import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    color: 'lightGray',
    fontWeight: 'regular',
    borderRadius: '10px',
    _hover: {
      backgroundColor: 'lightGray',
      color: 'lightBlue'
    }
  },
  sizes: {
    sm: {
      fontSize: 'sm'
    },
    md: {
      fontSize: 'md'
    },
    xl: {
      fontSize: 'xl'
    }
  },
  variants: {
    default: {
      background: 'lightBlue',
      fontSize: { xl: '2xl' }
    },
    noBackground: {
      background: 'none',
      fontSize: { xl: 'xl' }
    }
  },

  defaultProps: {
    variant: 'default'
  }
});
