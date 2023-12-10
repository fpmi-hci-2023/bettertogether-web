import { Box, Flex, Grid, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';

const ProfilePage = () => {
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
        padding='30px 60px'
        backgroundColor='darkBlue'
        justifyContent='center'
        alignItems='center'
        gap='60px'
      >
        <Flex
          flexDirection='column'
          gap='40px'
        >
          <Flex
            flexDirection='column'
            gap='10px'
            alignItems='center'
          >
            <Box
              width='300px'
              height='300px'
              borderRadius='50%'
              overflow='hidden'
            >
              <Image
                src='/static/images/person.png'
                alt='logo'
                width={300}
                height={300}
              />
            </Box>
            <Text color='#FFFFFF'>Markusha</Text>
          </Flex>
          <Flex
            flexDirection='column'
            gap='10px'
          >
            <Flex gap='15px'>
              <Image
                src={'/static/icons/mail.svg'}
                alt={'e-mail'}
                width={20}
                height={20}
              />
              <Text color='#FFFFFF'>mark2001@gmail.com</Text>
            </Flex>
            <Flex gap='15px'>
              <Image
                src={'/static/icons/phone.svg'}
                alt={'e-mail'}
                width={20}
                height={20}
              />
              <Text color='#FFFFFF'>+375331111111</Text>
            </Flex>
            <Flex gap='15px'>
              <Image
                src={'/static/icons/friends.svg'}
                alt={'e-mail'}
                width={20}
                height={20}
              />
              <Text color='#FFFFFF'>friends: 15</Text>
            </Flex>
          </Flex>
        </Flex>

        <Grid
          gridTemplate='1fr 1fr / 1fr 1fr'
          gap='40px'
          padding='40px'
        >
          <Flex
            backgroundColor='#D9D9D966'
            width='246px'
            height='246px'
            justifyContent='center'
            alignItems='center'
            borderRadius='40px'
          >
            <Icon
              width='80px'
              height='80px'
              fill='none'
              stroke='darkBlue'
              viewBox='0 0 35 31'
            >
              <path
                d='M25.212 1C21.9837 1 19.1141 2.85897 17.5 5.64744C16.0652 2.85897 13.1957 1 9.78804 1C4.94565 1 1 5.08974 1 10.109C1 21.4487 14.4511 30 17.5 30C20.5489 30 34 20.5192 34 10.109C34 5.08974 30.0543 1 25.212 1Z'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </Icon>
          </Flex>
          <Flex
            backgroundColor='#D9D9D966'
            width='246px'
            height='246px'
            justifyContent='center'
            alignItems='center'
            borderRadius='40px'
          >
            <Icon
              width='80px'
              height='80px'
              fill='none'
              stroke='darkBlue'
              viewBox='0 0 41 26'
            >
              <path
                d='M30.9845 1.42316H31.5059C35.9242 1.42316 39.5059 5.00488 39.5059 9.42316V16.8972C39.5059 21.3155 35.9242 24.8972 31.5059 24.8972H20.5337H15.7907M25.2768 1.42316H20.5337H9.56152C5.14325 1.42316 1.56152 5.00488 1.56152 9.42316V16.8972C1.56152 21.3155 5.18231 24.8972 9.60059 24.8972V24.8972'
                stroke-width='2'
                stroke-linecap='round'
              />
              <path
                d='M25.0003 13.3212C25.0003 16.4504 22.8073 18.7525 20.373 18.7525C17.9386 18.7525 15.7456 16.4504 15.7456 13.3212C15.7456 10.192 17.9386 7.88995 20.373 7.88995C22.8073 7.88995 25.0003 10.192 25.0003 13.3212Z'
                stroke-width='2'
              />
              <circle
                cx='8.15385'
                cy='13.1604'
                r='1.7686'
                fill='#15132B'
              />
              <circle
                cx='32.5928'
                cy='13.1604'
                r='1.7686'
                fill='#15132B'
              />
            </Icon>
          </Flex>
          <Flex
            backgroundColor='#D9D9D966'
            width='246px'
            height='246px'
            justifyContent='center'
            alignItems='center'
            borderRadius='40px'
          >
            <Icon
              width='80px'
              height='80px'
              fill='none'
              stroke='darkBlue'
              viewBox='0 0 35 34'
            >
              <path
                d='M25.88 30.444C23.4269 31.9666 20.6353 32.8972 17.5054 32.8972C8.87708 32.8972 1.85596 25.876 1.85596 17.2477C1.85596 14.4561 2.61728 11.7492 3.88616 9.46521'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M8.11572 4.72841C10.7381 2.7828 14.0372 1.59851 17.5054 1.59851C26.1338 1.59851 33.1549 8.61964 33.1549 17.248C33.1549 20.0395 32.3936 22.6619 31.1247 24.9459'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M16.2363 8.36548V18.5165H23.0037'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </Icon>
          </Flex>
          <Flex
            backgroundColor='#D9D9D966'
            width='246px'
            height='246px'
            justifyContent='center'
            alignItems='center'
            borderRadius='40px'
          >
            <Icon
              width='80px'
              height='80px'
              fill='none'
              stroke='darkBlue'
              viewBox='0 0 41 40'
            >
              <path
                d='M30.6627 13.1299C32.0071 13.1299 33.0969 12.0434 33.0969 10.7031C33.0969 9.36278 32.0071 8.27625 30.6627 8.27625C29.3183 8.27625 28.2285 9.36278 28.2285 10.7031C28.2285 12.0434 29.3183 13.1299 30.6627 13.1299Z'
                fill='#15132B'
              />
              <path
                d='M23.5543 34.389C25.0148 32.8358 26.1832 30.9915 26.7674 28.8558L25.599 27.8851C24.8201 27.2056 24.3332 26.2348 24.3332 25.2641C24.3332 24.2934 24.8201 23.3226 25.599 22.6431L26.7674 21.6724C26.1832 19.5368 25.0148 17.6924 23.5543 16.1392L22.1911 16.6246C21.2175 17.0129 20.1464 16.9158 19.2701 16.4304C18.3938 15.945 17.8096 15.0714 17.6149 14.0036L17.3228 12.5475C16.2517 12.2563 15.1807 12.1592 14.1096 12.1592C13.0386 12.1592 11.9675 12.3533 10.8965 12.5475'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M9.04683 16.4297C8.17052 16.9151 7.09948 17.0122 6.1258 16.6239L4.76265 16.1385C3.30214 17.6917 2.13372 19.5361 1.54952 21.6717L2.71793 22.6424C3.3995 23.3219 3.88634 24.2927 3.88634 25.2634C3.88634 26.2341 3.3995 27.2049 2.62056 27.8844L1.45215 28.8551C2.03635 30.9907 3.20477 32.8351 4.66528 34.3883L6.02843 33.903C7.00211 33.5147 8.07315 33.6117 8.94946 34.0971C9.82577 34.5825 10.41 35.4561 10.6047 36.5239L10.7995 37.98C11.8705 38.2713 12.9415 38.3683 14.0126 38.3683C15.0836 38.3683 16.1547 38.1742 17.2257 37.98L17.4205 36.5239C17.6152 35.5532 18.1994 34.6795 19.0757 34.0971'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M14.1101 29.6322C16.5299 29.6322 18.4916 27.6764 18.4916 25.2639C18.4916 22.8513 16.5299 20.8956 14.1101 20.8956C11.6902 20.8956 9.72852 22.8513 9.72852 25.2639C9.72852 27.6764 11.6902 29.6322 14.1101 29.6322Z'
                stroke-width='2'
              />
              <path
                d='M30.6625 19.6334C31.4415 19.6334 32.2204 19.5363 32.902 19.3422L33.0967 18.2744C33.1941 17.5949 33.6809 17.0124 34.2651 16.6241C34.8493 16.2358 35.6283 16.2358 36.3098 16.43L37.2835 16.8183C38.3546 15.7505 39.1335 14.4885 39.523 12.9353L38.744 12.2558C38.1598 11.7704 37.8677 11.0909 37.8677 10.4114C37.8677 9.7319 38.1598 9.05239 38.744 8.56702L39.523 7.88751C39.1335 6.4314 38.3546 5.07237 37.2835 4.00456L36.3098 4.39286C35.5309 4.87823 34.8493 4.78115 34.1677 4.48993C33.5835 4.10164 33.0967 3.5192 32.9993 2.83968L32.8046 1.77187C32.123 1.57773 31.3441 1.48065 30.5651 1.48065C29.7862 1.48065 29.0073 1.57773 28.3257 1.77187L28.131 2.83968C28.0336 3.5192 27.5467 4.10164 26.9625 4.48993C26.4757 4.78115 25.7941 4.87823 25.1125 4.58701L24.1389 4.19871C23.0678 5.26652 22.2889 6.52848 21.8994 8.08165L22.6784 8.76117C23.2626 9.24654 23.5547 9.92605 23.5547 10.6056'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </Icon>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
