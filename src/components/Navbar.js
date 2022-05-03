import {
  Flex,
  Text,
  Button,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
//   import AuthContext from "../context/AuthContext";

import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const {user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="4">
      <Box p="2">
        <Link to="/">
          <Heading size="md">GRCTC</Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        {/* {user ? (
            <Button
              colorScheme="red"
              onClick={logout}
            >
              Log out
            </Button>
          ) : null}  */}
      </ButtonGroup>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
