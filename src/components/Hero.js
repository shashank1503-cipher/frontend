import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { HiOutlineCursorClick } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={'column'}>
      <Heading
        size={'4xl'}
        align={'center'}
        justifyContent={'center'}
        p={6}
        pb={2}
      >
        Welcome To
      </Heading>
      <Text
        bgGradient="linear(to-t, #11998e, #38ef7d,)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
        textAlign="center"
      >
        TIKIT
      </Text>
      <Text fontSize={'2xl'} align={'center'} justifyContent={'center'}>
        Create and Reserve Tickets
      </Text>
      <Flex justifyContent={'center'} m={10}>
        <Link to="/createticket">
          <Button
            variantColor="green"
            colorScheme={"green"}
            rightIcon={<IoIosCreate />}
            mr={10}
            size={'lg'}
          >
            Create Ticket
          </Button>
        </Link>
        <Link to="/bookticket">
          <Button
            variantColor="green"
            colorScheme={'red'}
            rightIcon={<HiOutlineCursorClick />}
            size={'lg'}
          >
            Book Tickets
          </Button>
        </Link>
      </Flex>
      <Flex justifyContent={'center'}>
        <Box
          width={['100%', '100%', '100%', '75%']}
          maxWidth={'1000px'}
          borderRadius={[2, 10, 10, 10]}
          m={10}
        >
          <Image
            src="hero.jpeg"
            alt="Hero Image"
            borderRadius={[2, 10, 10, 10]}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
