import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ReservationBox from '../components/ReservationBox';

const ViewReservation = () => {
  const data = [
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: true,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: true,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: true,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: true,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: true,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: true,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
    {
      id: 1,
      author: 'Jaspreet Bumrah',
      name: 'Koi Load Nahi',
      statusActive: false,
      description: 'Laude Ka Comedy Show',
      price: 600,
    },
  ];
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'}>Book </Heading>
      <Heading
        bgGradient="linear(to-t, #11998e, #38ef7d,)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
      >
        Tickets
      </Heading>
      <Flex p={10} flexWrap={'wrap'} justifyContent={'center'}>
        {data.map(reservation => (
          <ReservationBox key={reservation.id} reservation={reservation} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ViewReservation;
