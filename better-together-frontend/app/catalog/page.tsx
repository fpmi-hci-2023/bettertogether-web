import { Flex, Grid, Input } from '@chakra-ui/react';

import { DropDownButton } from '@/components/common/DropDownButton';
import { GenreButton } from '@/components/common/GenreButton';
import { Poster } from '@/components/common/Poster';
import { Slider } from '@/components/common/Slider';

const CatalogPage = () => {
  return (
    <Flex
      width='100%'
      position='relative'
      justifyContent='center'
      alignItems='center'
      padding='100px 0'
    >
      <Flex
        width='80%'
        height='fit-content'
        padding='30px 60px'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        gap='50px'
      >
        <Input></Input>
        <Grid
          gridTemplateColumns='repeat(5, 1fr)'
          gap='45px'
          width='100%'
        >
          <DropDownButton>Genres</DropDownButton>
          <DropDownButton>Subgenres</DropDownButton>
          <DropDownButton>Countries</DropDownButton>
          <DropDownButton>Years</DropDownButton>
          <DropDownButton>Rating</DropDownButton>
        </Grid>
        <Flex
          width='100%'
          justifyContent='start'
          alignItems='center'
        >
          <GenreButton>2023</GenreButton>
        </Flex>
        <Slider title='New'>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
        </Slider>
        <Slider title='Recomendations'>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
          <Poster image='/static/images/gosling.png'></Poster>
        </Slider>
      </Flex>
    </Flex>
  );
};

export default CatalogPage;
