import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
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
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [ticket, setTicket] = useState({});

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
      const ticketInfo = {
        eventName: name,
        creator: authName,
        description: description,
        quantity: quantity,
        price: price,
      };
      setTicket(ticketInfo);
      console.log(ticket);
      setIsAuthorError(false);
      setIsDescriptionError(false);
      setIsNameError(false);
      setToast(true);

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
      <HStack margin={'auto'} w="50%">
        <Flex
          w="100%"
          boxShadow={'lg'}
          padding={7}
          direction={'column'}
          bg={useColorModeValue('white', 'gray.700')}
          borderRadius={'lg'}
        >
          <FormControl isInvalid={isDescriptionError}>
            <FormLabel htmlFor="quantity">Quantity</FormLabel>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={e => {
                setQuantity(e.target.value);
              }}
            />
            {!isDescriptionError ? (
              <FormHelperText>Add Number of tickets</FormHelperText>
            ) : (
              <FormErrorMessage>Please Enter Description 🥺 </FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex
          w="100%"
          boxShadow={'lg'}
          padding={7}
          direction={'column'}
          bg={useColorModeValue('white', 'gray.700')}
          borderRadius={'lg'}
        >
          <FormControl isInvalid={isDescriptionError}>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
            />
            {!isDescriptionError ? (
              <FormHelperText>Price for 1 ticket</FormHelperText>
            ) : (
              <FormErrorMessage>Please Enter Price 🥺 </FormErrorMessage>
            )}
          </FormControl>
        </Flex>
      </HStack>

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
