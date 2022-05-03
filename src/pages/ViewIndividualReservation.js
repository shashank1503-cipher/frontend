import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';

export default function ViewIndividualReservation() {
  //   let { id } = useParams();
  let data = {
    id: 1,
    author: 'Jaspreet Bumrah',
    name: 'Koi Load Nahi',
    statusActive: true,
    description: 'Laude Ka Comedy Show',
    price: 600,
    ticketsLeft: 20,
  };
  return (
    <Container maxW={'7xl'}>
      <Heading
        bgGradient="linear(to-t, #11998e, #38ef7d,)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        alignSelf={'center'}
        textAlign={'center'}
      >
        Event Details
      </Heading>

      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          {/* <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          /> */}
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {data.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              {data.author}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                About Event
              </Text>
              <Text fontSize={'lg'}>{data.description}</Text>
            </VStack>
          </Stack>
          <Flex margin={'auto'} justifyContent={'center'}>
            <Button
              //   rounded={'none'}
              //   mt={8}
              size={'lg'}
              py={'7'}
              colorScheme={'green'}
              textTransform={'uppercase'}
            >
              Book Now
            </Button>
          </Flex>

          <Stack
            direction="column"
            alignItems="center"
            justifyContent={'center'}
          >
            <Text>Rs. {data.price}</Text>
            <Text>Tickets Left:- {data.ticketsLeft}</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
