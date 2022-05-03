import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
// import HookForm from './pages/SignUp.js';
import Signup from './pages/SignUp.js';
// import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ViewReservation from './pages/ViewReservation';
import CreateTicket from './pages/CreateTicket';
import { CreateEventProvider } from './context/CreateEventContex';
import ViewIndividualReservation from './pages/ViewIndividualReservation';
// import PrivateRoute from './utils/PrivateRoute';
// import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CreateEventProvider>
        <Router>
          {/* <AuthProvider> */}
          <Navbar />
          <Routes>
            <Route path="/createticket" element={<CreateTicket />} />
            <Route path="/bookticket" element={<ViewReservation />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/reservation/:id"
              element={<ViewIndividualReservation />}
            />
          </Routes>
          {/* </AuthProvider> */}
        </Router>
      </CreateEventProvider>
    </ChakraProvider>
  );
}

export default App;
