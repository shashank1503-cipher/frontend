import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useNavigate } from "react-router-dom";
//   import { createUserWithEmailAndPassword } from "firebase/auth";
//   import { auth } from "../firebase";
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorInSignUp , setErrorInSignUp] = useState(false);
    const [errorMessage , setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate("/login");
    };
  
    // const handleSignup = async () => {
    //   try {
    //     const us = await createUserWithEmailAndPassword(auth, email, password);
    //     console.log(us);
    //   } catch (error) {
    //      setErrorMessage(error.message)
    //      setErrorInSignUp(true)
    //   }
    // };
    // const formatErrorMessage = (message)=>{
    //   const indexOfSpace = message.indexOf(' ');
    //   if (indexOfSpace === -1) {
    //     return '';
    //   }
    //   return message.substring(indexOfSpace + 1);
    // }
  
    return (
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              {errorInSignUp ? <Alert status="error">
                <AlertIcon />
                {/* {formatErrorMessage(errorMessage)} */}
              </Alert> : " "
              }
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
  
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                //   onClick={handleSignup}
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} onClick={handleRedirect}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }