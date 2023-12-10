import { Button, Flex, Grid, Input, Text } from '@chakra-ui/react';

import LabeledInput from '@/components/LabeledInput';

const RegistrationPage = () => {
  return (
    <Flex
      width='100%'
      height='100%'
      position='fixed'
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        width='80%'
        height='fit-content'
        padding='120px'
        backgroundColor='darkBlue'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        gap='60px'
      >
        <Grid
          width='100%'
          gridTemplateRows='1fr 1fr'
          gridTemplateColumns='1fr 1fr'
          gap='20px 56px'
        >
          <LabeledInput>
            <Text
              color='lightGray'
              fontSize={{ xl: 'xl' }}
            >
              Name
            </Text>
            <Input></Input>
          </LabeledInput>
          <LabeledInput>
            <Text
              color='lightGray'
              fontSize={{ xl: 'xl' }}
            >
              Surname
            </Text>
            <Input></Input>
          </LabeledInput>
          <LabeledInput>
            <Text
              color='lightGray'
              fontSize={{ xl: 'xl' }}
            >
              Email
            </Text>
            <Input></Input>
          </LabeledInput>
          <LabeledInput>
            <Text
              color='lightGray'
              fontSize={{ xl: 'xl' }}
            >
              Password
            </Text>
            <Input></Input>
          </LabeledInput>
        </Grid>
        <Flex
          flexDirection='column'
          gap='10px'
        >
          <Button p='0 30px'>log in</Button>
          <Button
            variant='noBackground'
            textDecoration='underline'
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RegistrationPage;
