import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

export interface PosterProps {
  image: string;
}

export const Poster: FC<PosterProps> = ({ image }) => {
  return (
    <Box
      borderRadius='29px'
      overflow='hidden'
      minWidth='210px'
    >
      <Image
        src={image}
        alt='poster'
        width={210}
        height={270}
      />
    </Box>
  );
};
