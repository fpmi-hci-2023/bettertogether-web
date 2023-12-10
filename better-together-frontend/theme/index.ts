import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@/theme/breakpoints';
import { colors } from '@/theme/colors';
import { Button } from '@/theme/components/button';
import { Input } from '@/theme/components/input';
import { fonts, fontSizes, fontWeights } from '@/theme/fonts';

export const customTheme = extendTheme({
  fonts,
  fontSizes,
  fontWeights,
  colors,
  breakpoints,
  components: {
    Button,
    Input
  }
});
