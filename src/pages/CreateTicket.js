import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Textarea,
  toast,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router';
import CreateEventContext from '../context/CreateEventContex';

const CreateTicket = () => {
  let { setToast } = useContext(CreateEventContext);
  let navigate = useNavigate();
  const [isNameError, setIsNameError] = useState(false);
  const [isAuthorError, setIsAuthorError] = useState(false);
  const [isDescriptionError, setIsDescriptionError] = useState(false);
  const [name, setName] = useState('');
  const [authName, setAuthName] = useState('');
  const [description, setDescription] = useState('');

  let handleSubmit = () => {
    if (name === '') {
      setIsNameError(true);
    }
    if (authName === '') {
      setIsAuthorError(true);
    }
    if (description === '') {
      setIsDescriptionError(true);
    } else {
      setName('');
      setAuthName('');
      setDescription('');
      setIsAuthorError(false);
      setIsDescriptionError(false);
      setIsNameError(false);
      setToast(true);
      navigate('/');
    }
  };
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'}>Create </Heading>
      <Heading
        bgGradient="linear(to-t, #1FA2FF, #12D8FA,#A6FFCB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
      >
        Event
      </Heading>
      <Flex
        margin={'auto'}
        w={'50%'}
        boxShadow={'lg'}
        padding={7}
        direction={'column'}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius={'lg'}
        mb={5}
      >
        <FormControl isInvalid={isNameError}>
          <FormLabel htmlFor="Name">Name for event</FormLabel>
          <Input
            id="Name"
            type="text"
            size={'lg'}
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          {!isNameError ? (
            <FormHelperText>Name For Event</FormHelperText>
          ) : (
            <FormErrorMessage>Please Enter Name 🥺 </FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      <Flex
        margin={'auto'}
        w={'50%'}
        boxShadow={'lg'}
        padding={7}
        direction={'column'}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius={'lg'}
        mb={5}
      >
        <FormControl isInvalid={isAuthorError}>
          <FormLabel htmlFor="name">Your Name to be Displayed</FormLabel>
          <Input
            id="name"
            type="text"
            size={'lg'}
            value={authName}
            onChange={e => {
              setAuthName(e.target.value);
            }}
          />
          {!isAuthorError ? (
            <FormHelperText>Your Name to be Displayed For Event</FormHelperText>
          ) : (
            <FormErrorMessage>
              Please Enter Your Name to be Displayed 🥺{' '}
            </FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      <Flex
        margin={'auto'}
        w={'50%'}
        boxShadow={'lg'}
        padding={7}
        direction={'column'}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius={'lg'}
        mb={5}
      >
        <FormControl isInvalid={isDescriptionError}>
          <FormLabel htmlFor="desc">Description</FormLabel>
          <Textarea
            id="desc"
            type="text"
            size={'lg'}
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
          {!isDescriptionError ? (
            <FormHelperText>Description For Event</FormHelperText>
          ) : (
            <FormErrorMessage>Please Enter Description 🥺 </FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      <Flex margin={'auto'}>
        <Button
          variantColor="blue"
          colorScheme={'green'}
          mt={5}
          onClick={handleSubmit}
          leftIcon={<IoMdCheckmarkCircleOutline />}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateTicket;
