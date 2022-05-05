import {
  Flex,
  Text,
  Button,
  Box,
  Heading,
  Spacer,
  Stack,
  ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import AuthContext from '../context/AuthContext';
import { Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../assets/plane-tickets-green.png';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="4">
      <Box p="2">
        <Link to="/">
          <Stack direction="row">
            <Image
              boxSize="2em"
              objectFit="cover"
              src={logo}
              alt="Dan Abramov"
            />
            <Heading size="lg">TikIt</Heading>
          </Stack>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        {!user ? (
          <>
            <Button
              colorScheme="green"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign Up
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                navigate('/login');
              }}
            >
              Log In
            </Button>
          </>
        ) : (
          <Button colorScheme="red" onClick={logout}>
            Log out
          </Button>
        )}
      </ButtonGroup>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
