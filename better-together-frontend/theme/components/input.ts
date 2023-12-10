import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['field']);

export const Input = helpers.defineMultiStyleConfig({
  baseStyle: {
    field: {
      width: '100%',
      height: '50px',
      border: 'none',
      borderRadius: '20px'
    }
  },
  variants: {
    default: {
      field: {
        backgroundColor: '#D9D9D966'
      }
    }
  },
  defaultProps: {
    variant: 'default'
  }
});
