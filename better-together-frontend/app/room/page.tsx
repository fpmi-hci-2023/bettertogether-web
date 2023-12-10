import { Flex } from '@chakra-ui/react';

import { VideoPlayer } from '@/components/VideoPlayer';

const RoomPage = () => {
  return (
    <Flex
      width='100%'
      position='fixed'
      justifyContent='center'
      alignItems='center'
      padding='100px 0'
    >
      <Flex
        width='80%'
        backgroundColor='darkBlue'
        height='600px'
        padding='30px 60px'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        gap='50px'
      >
        <VideoPlayer></VideoPlayer>
      </Flex>
    </Flex>
  );
};

export default RoomPage;
