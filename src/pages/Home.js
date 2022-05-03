import { Box, useToast } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import Hero from '../components/Hero';
import CreateEventContext from '../context/CreateEventContex';

const Home = () => {
  const toast = useToast();
  let { Toast, setToast } = useContext(CreateEventContext);
  useEffect(() => {
    if (Toast) {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setToast(false);
    }
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
