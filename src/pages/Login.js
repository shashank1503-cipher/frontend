import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Stack,
  Image,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
//   import { app, auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
//   import { signInWithEmailAndPassword } from "firebase/auth";
//   import AuthContext from "../context/AuthContext";

export default function Login() {
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //    const {user , setEmail , setPassword , loginUser , errorInLogIn , errorMessageLogIn} =  useContext(AuthContext);

  // const handleLogIn = async () => {
  //   try {
  //     const us = await signInWithEmailAndPassword(auth, email, password);
  //     console.log(us);
  //     navigate('/');
  //   } catch (error) {
  //      setErrorMessage(error.message)
  //      setErrorInSignUp(true)

  //   }
  // };
//   console.log(user);
  const handleRedirect = () => {
    navigate('/signup');
  };
  const formatErrorMessage = message => {
    const indexOfSpace = message.indexOf(' ');
    if (indexOfSpace === -1) {
      return '';
    }
    return message.substring(indexOfSpace + 1);
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          {/* {errorInLogIn ? <Alert status="error">
                <AlertIcon />
                {formatErrorMessage(errorMessageLogIn)}
              </Alert> : " "
              } */}
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" 
            // onChange={(event)=>{ setEmail(event.target.value)}}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" 
            // onChange={(event)=>{ setPassword(event.target.value)}}
             />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Text>Dont have account ?</Text>
              <Link color={'blue.500'} onClick={handleRedirect}>
                Register now
              </Link>
            </Stack>
            <Button
              colorScheme={"green"}
              variant={'solid'}
              //   onClick={loginUser}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={'hero.jpeg'} />
      </Flex>
    </Stack>
  );
}
