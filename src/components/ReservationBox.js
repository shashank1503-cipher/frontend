import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import StatusIndicatorActive from './StatusIndicatorActive';
import StatusIndicatorInactive from './StatusIndicatorInactive';

export default function ReservationBox({ reservation }) {
  return (
    <Center py={6}>
      <Box
        m={2}
        minWidth="445px"
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {reservation.author}
          </Text>
          <Flex verticalAlign={'center'} justifyContent={'center'}>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {reservation.name}
            </Heading>
            {reservation.statusActive ? (
              <StatusIndicatorActive ml={4} alignSelf={'center'} />
            ) : (
              <StatusIndicatorInactive ml={4} alignSelf={'center'} />
            )}
          </Flex>
          <Text color={'gray.500'}>{reservation.description}</Text>
        </Stack>
        <Flex mt={6} direction={'row'} justifyContent={'space-between'}>
          <Flex>
            <Text>Cost: - Rs.{reservation.price}</Text>
          </Flex>
          <Link to={`/reservation/${reservation.id}`}>
            <Button
              colorScheme={"green"}
              size={'lg'}
              isDisabled={!reservation.statusActive}
            >
              Book Ticket
            </Button>
          </Link>
        </Flex>
      </Box>
    </Center>
  );
}
